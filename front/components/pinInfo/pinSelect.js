import G4_PinGraph from './G4_PinGraph';
import Image from 'next/image';
import PinImg1 from '../../public/images/pin1.svg'
import PinImg2 from '../../public/images/pin2.svg'
import PinImg3 from '../../public/images/pin3.svg'
import PinImg4 from '../../public/images/pin4.svg'
import PinImg5 from '../../public/images/pin5.svg'
import PinImg6 from '../../public/images/pin6.svg'
import LeftArrow from '../../public/images/LeftArrow.svg'
import PinSelectLayout from './pinSelect.style';
import {noiseDegree, noiseEffect} from './noiseInfo';

const PinSelect = () => {

    const ImgArr = [PinImg1, PinImg2, PinImg3, PinImg4, PinImg5, PinImg6]

    // dummy data
    const dummy = {
        pinID:'',
        pinName:'스타벅스 앞', 
        GuName:'강남구', 
        DongName:'1동', 
        time:[88,77,44,66,55,77]
    }

    // calculating figures
    let sum = 0;
    dummy.time.forEach(element => {sum += element});
    const avg = Math.floor(sum/6);
    const val = (avg-(avg%10))+'';

    let noiseDegreeMessage = ''
    let noiseEffectMessage = ''

    for(let i=0; i<noiseDegree.length; i++){
        if(noiseDegree[i].dB == val){ noiseDegreeMessage = noiseDegree[i].MSG }
    }
    for(let i=0; i<noiseEffect.length; i++){
        if(noiseEffect[i].dB == val){ noiseEffectMessage = noiseEffect[i].MSG}
    }

    let ImgSrcNum = 4
    if(avg <= 25){ImgSrcNum = 1} // 보라
    else if(avg > 25 && avg <= 35){ImgSrcNum = 2} // 파랑
    else if(avg > 35 && avg <= 45){ImgSrcNum = 3} // 초록
    else if(avg > 45 && avg <= 55){ImgSrcNum = 4} // 노랑
    else if(avg > 55 && avg <= 65){ImgSrcNum = 5} // 주황
    else if(avg > 65){ImgSrcNum = 6} // 빨강

    return (
        <PinSelectLayout>
            <div>
                <div className='section1'>
                    <div className='Lside'>
                        <h2><Image src={LeftArrow} alt='LeftArrow' onClick={()=>{alert()}}></Image></h2>
                    </div>
                    <div className='Rside'>
                        <h2>{dummy.pinName}</h2>
                        <h4>{dummy.GuName} {dummy.DongName}</h4>
                    </div>
                </div>
                <hr></hr>
                <div className='section2'>
                <div>
                    <h3>어느 정도의 소음인가요?</h3>
                </div>
                <div className='Lside'>
                    
                    {ImgArr.map((x, i)=>{
                        if(i+1 == ImgSrcNum){
                            return (<p><Image src={x}></Image></p>)
                        }
                    })}

                    <p className='average'>{avg}</p>
                </div>
                <div className='Rside'>
                    <p className='bold'> 소음 정도 </p>
                    <p className="gray"> {noiseDegreeMessage}</p>
                    <p className='bold'> 소음 영향 </p>
                    <p className="gray"> {noiseEffectMessage}</p>
                </div>
                </div>
                
                <hr></hr>
                <div className='section3'>
                    <h3>시간대별 소음 그래프</h3>
                    <div className='graph'>
                        <G4_PinGraph time={dummy.time} colorIdx= {ImgSrcNum}/>
                    </div>
                    <div>
                        <button type="button" className="toReview" data-toggle="modal" data-target="">
                        소음 리뷰 쓰러가기
                        </button>
                    </div>
                </div>
            </div>
        </PinSelectLayout>
    );
}

export default PinSelect;