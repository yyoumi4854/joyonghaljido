import G4_PinGraph from './stats/G4_PinGraph';
import Image from 'next/image';

import styled from "styled-components";
import PinImg1 from '../public/images/pin1.svg'
import PinImg2 from '../public/images/pin2.svg'
import PinImg3 from '../public/images/pin3.svg'
import PinImg4 from '../public/images/pin4.svg'
import PinImg5 from '../public/images/pin5.svg'
import PinImg6 from '../public/images/pin6.svg'

const PinSelectLayout = styled.div`
    *{
        position:relative;
        width:400px;
        background-color:aliceblue;
    }
    hr{ border:solid gray 1px;}
`;

// 소음의 정도
const noiseDegree = [
    {dB:'20' , MSG:'나뭇잎 부딪히는 소리'},
    {dB:'30' , MSG:'조용한 농촌, 심야의 교회'},
    {dB:'40' , MSG:'주택의 거실'},
    {dB:'50' , MSG:'사무실 소리'},
    {dB:'60' , MSG:'보통의 대화소리, 백화점 내 소음'},
    {dB:'70' , MSG:'전화벨소리, 거리, 시끄러운 사무실'},
    {dB:'80' , MSG:'철로변 및 지하철 소음'},
    {dB:'90' , MSG:'소음이 심한 공장 안'},
    {dB:'100', MSG:'착암기, 경적소리'},
]
// 소음의 영향
const noiseEffect = [
    {dB:'40' , MSG:'수면의 깊이에 영향'},
    {dB:'50' , MSG:'호흡 및 맥박수 증가'},
    {dB:'60' , MSG:'수면장애 시작'},
    {dB:'70' , MSG:'말초혈관 수축'},
    {dB:'80' , MSG:'청력장애 시작'},
]

const testObj = {'asdf':'asdfasdf'}

const PinSelect = () => {
    
    // const dummy = {
    //     pinID:'',
    //     pinName:'스타벅스앞', 
    //     GuName:'강남구', 
    //     DongName:'1동', 
    //     time:[44,55,44,66,55,77]
    // }

    // const dummy = {
    //     pinID:'',
    //     pinName:'스타벅스앞', 
    //     GuName:'강남구', 
    //     DongName:'1동', 
    //     time:[55,55,44,66,88,77]
    // }

    const dummy = {
        pinID:'',
        pinName:'스타벅스앞', 
        GuName:'강남구', 
        DongName:'1동', 
        time:[88,77,44,66,55,77]
    }


    let sum = 0
    dummy.time.forEach(element => {sum += element});
    const avg = Math.floor(sum/6)
    const val = (avg-(avg%10))+''
    let noiseDegreeMessage = ''
    for(let i=0; i<noiseDegree.length; i++){
        if(noiseDegree[i].dB == val){
            noiseDegreeMessage = noiseDegree[i].MSG
        }
    }

    let noiseEffectMessage = ''
    for(let i=0; i<noiseEffect.length; i++){
        if(noiseEffect[i].dB == val){
            noiseEffectMessage = noiseEffect[i].MSG
        }
    }

    let imgSrc = -1
    if(avg <= 50){imgSrc = 6}
    else if(avg > 50 && avg <= 55){imgSrc = 5}
    else if(avg > 55 && avg <= 60){imgSrc = 4}
    else if(avg > 60 && avg <= 65){imgSrc = 3}
    else if(avg > 65 && avg <= 70){imgSrc = 2}
    else if(avg > 70 && avg <= 75){imgSrc = 1}

    return (
        <PinSelectLayout>
            <div>
                <p>스타벅스 앞</p>
                <p>동대문구 답십리 2동</p>
                <hr></hr>
                <p>어느 정도의 소음인가요?</p>
                <p>시간 별 평균 소음(dB) : {avg}</p>
                {imgSrc==6 && (<p><Image src={PinImg1} alt='PinImg1'></Image></p>)}
                {imgSrc==5 && (<p><Image src={PinImg2} alt='PinImg2'></Image></p>)}
                {imgSrc==4 && (<p><Image src={PinImg3} alt='PinImg3'></Image></p>)}
                {imgSrc==3 && (<p><Image src={PinImg4} alt='PinImg4'></Image></p>)}
                {imgSrc==2 && (<p><Image src={PinImg5} alt='PinImg5'></Image></p>)}
                {imgSrc==1 && (<p><Image src={PinImg6} alt='PinImg6'></Image></p>)}
                <p> 소음 정도 : {noiseDegreeMessage}</p>
                <p> 소음 영향 : {noiseEffectMessage}</p>
                <hr></hr>
                <p>시간대별 소음 그래프</p>
                <div className='graph'>
                    <G4_PinGraph time={dummy.time} colorIdx= {imgSrc}/>
                </div>
            </div>
        </PinSelectLayout>
    );
}

export default PinSelect;
