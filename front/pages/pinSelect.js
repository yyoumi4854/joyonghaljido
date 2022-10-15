import G4_PinGraph from './stats/G4_PinGraph';
import Image from 'next/image';
import PinImg1 from '../public/images/pin1.svg'
import PinImg2 from '../public/images/pin2.svg'
import PinImg3 from '../public/images/pin3.svg'
import PinImg4 from '../public/images/pin4.svg'
import PinImg5 from '../public/images/pin5.svg'
import PinImg6 from '../public/images/pin6.svg'
import LeftArrow from '../public/images/LeftArrow.svg'
import PinSelectLayout from './pinSelect.style';
import {noiseDegree, noiseEffect} from './noiseInfo';

const PinSelect = () => {

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

    let imgSrc = -1
    if(avg <= 50){imgSrc = 6}
    else if(avg > 50 && avg <= 55){imgSrc = 5}
    else if(avg > 55 && avg <= 60){imgSrc = 4}
    else if(avg > 60 && avg <= 65){imgSrc = 3}
    else if(avg > 65 && avg <= 70){imgSrc = 2}
    else if(avg > 70 && avg <= 75){imgSrc = 1}

    // render thi
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
                    {imgSrc==6 && (<p><Image src={PinImg1} alt='PinImg1'></Image></p>)}
                    {imgSrc==5 && (<p><Image src={PinImg2} alt='PinImg2'></Image></p>)}
                    {imgSrc==4 && (<p><Image src={PinImg3} alt='PinImg3'></Image></p>)}
                    {imgSrc==3 && (<p><Image src={PinImg4} alt='PinImg4'></Image></p>)}
                    {imgSrc==2 && (<p><Image src={PinImg5} alt='PinImg5'></Image></p>)}
                    {imgSrc==1 && (<p><Image src={PinImg6} alt='PinImg6'></Image></p>)}
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
                        <G4_PinGraph time={dummy.time} colorIdx= {imgSrc}/>
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