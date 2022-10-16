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
import { noiseDegree, noiseEffect } from './noiseInfo';
import axios from 'axios';
import { useEffect, useState } from 'react';
import pinIds from '../../Id_book/pinId.json'

const PinSelect = ({ currentState }) => {

    const [pinState, setPinstate] = useState({
        name:'',
        timeDecibels:[],
        dong:'',
        gu:''
    })

    const [avg, setAvg] = useState(-1)
    const [ImgSrcNum, setImgSrcNum] = useState(-1)

    const [noiseDegreeMessage, setNoiseDegreeMessage] = useState('')
    const [noiseEffectMessage, setNoiseEffectMessage] = useState('')

    let pinId = currentState.clickSpotId;

    

    console.log(pinId);
    let sum = 0;
    const ImgArr = [PinImg1, PinImg2, PinImg3, PinImg4, PinImg5, PinImg6]

    // GET API
    const backendPortNumber = "5001";
    const serverUrl = "http://" + window.location.hostname + ":" + backendPortNumber + "/";
    async function get(endpoint, params = "") {
        console.log(`%cGET 요청 ${serverUrl + endpoint + params}`, "color: #a25cd1;");
        return axios.get(serverUrl + endpoint + params, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
            },
        });
    }

    const getData = async () => {
        const res = await get('pins/', pinId);
        const d = res.data;
        console.log()

        setPinstate({
            name : res.data.name, 
            timeDecibels : res.data.timeDecibels, 
            dong : res.data.dongName, 
            gu : res.data.guName
        })

        res.data.timeDecibels.forEach(e => { sum += e });
        calc(sum)
    }

    getData();

    const calc = (sum) => {
        setAvg(Math.floor(sum / 6));
        const val = ((avg - (avg % 10)) + '');
        for (let i = 0; i < noiseDegree.length; i++) {
            if (noiseDegree[i].dB == val) { setNoiseDegreeMessage(noiseDegree[i].MSG) }
        }
        for (let i = 0; i < noiseEffect.length; i++) {
            if (noiseEffect[i].dB == val) { setNoiseEffectMessage(noiseEffect[i].MSG) }
        }
        if (avg <= 25) { setImgSrcNum(1) } // 보라
        else if (avg > 25 && avg <= 35) { setImgSrcNum(2) } // 파랑
        else if (avg > 35 && avg <= 45) { setImgSrcNum(3) } // 초록
        else if (avg > 45 && avg <= 55) { setImgSrcNum(4) } // 노랑
        else if (avg > 55 && avg <= 65) { setImgSrcNum(5) } // 주황
        else if (avg > 65) { setImgSrcNum(6) } // 빨강
    }

    return (
        <PinSelectLayout>
            <div>
                <div className='section1'>
                    <div className='Lside'>
                        <h2><Image src={LeftArrow} alt='LeftArrow' onClick={() => { alert() }}></Image></h2>
                    </div>
                    <div className='Rside'>
                        <h2>{pinState.name}</h2>
                        <h4>{pinState.gu} {pinState.dong}</h4>
                    </div>
                </div>
                <hr></hr>
                <div className='section2'>
                    <div>
                        <h3>어느 정도의 소음인가요?</h3>
                    </div>
                    <div className='Lside'>
                        {ImgArr.map((x, i) => {
                            if (i + 1 == ImgSrcNum) {
                                return (<p><Image src={x} alt={x}></Image></p>)
                            }
                        })}
                        <div className='average'>{avg}</div>
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
                        <G4_PinGraph time={pinState.timeDecibels} colorIdx={ImgSrcNum} />
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
