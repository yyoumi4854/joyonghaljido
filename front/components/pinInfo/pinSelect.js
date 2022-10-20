import { useEffect, useState } from 'react';

import G4_PinGraph from './G4_PinGraph';
import { noiseDegree, noiseEffect } from './noiseInfo';
import axios from 'axios';
import pinIds from '../../Id_book/pinId.json'
import * as Api from '../../api';

// styled
import PinSelectLayout from './pinSelect.style';
import Title from '../titleStyles';
import { ReviewBtn } from '../../styles/btnStyles';

// react-icons
import { AiOutlineArrowLeft } from "react-icons/ai";

const calc = (avg) => {
    const result = {
        noiseDegreeMessage: '',
        noiseEffectMessage: '',
        imgSrcState: -1,
        avg: 0,
    }
    result.avg = avg;

    const val = ((result.avg - (result.avg % 10)) + '');

    for (let i = 0; i < noiseDegree.length; i++) {
        if (noiseDegree[i].dB == val) { result.noiseDegreeMessage = noiseDegree[i].MSG }
    }
    for (let i = 0; i < noiseEffect.length; i++) {
        if (noiseEffect[i].dB == val) { result.noiseEffectMessage = noiseEffect[i].MSG }
    }

    if (result.avg <= 50) { result.imgSrcState = 1 } // 보라
    else if (result.avg > 50 && result.avg <= 55) { result.imgSrcState = 2 } // 파랑
    else if (result.avg > 55 && result.avg <= 60) { result.imgSrcState = 3 } // 초록
    else if (result.avg > 60 && result.avg <= 65) { result.imgSrcState = 4 } // 노랑
    else if (result.avg > 65 && result.avg <= 70) { result.imgSrcState = 5 } // 주황
    else if (result.avg > 70) { result.imgSrcState = 6 } // 빨강

    return result;
}

const PinSelect = ({ currentState, setCurrentState, pins }) => {

    const pin = pins.find(v => v._id === currentState.clickSpotId);

    const [pinState, setPinstate] = useState({
        name: '',
        timeDecibels: [],
        dong: '',
        gu: '',

        noiseDegreeMessage: '',
        noiseEffectMessage: '',
        imgSrcNum: -1,
        avg: 0,
    })

    useEffect(() => {
        const result = calc(pin.timeDecibelsAvg);
        setPinstate({
            ...pinState,
            name: pin.name,
            timeDecibels: pin.timeDecibels,
            dong: pin.dongName,
            gu: currentState.guName,

            noiseDegreeMessage: result.noiseDegreeMessage,
            noiseEffectMessage: result.noiseEffectMessage,
            imgSrcNum: result.imgSrcState,
            avg: result.avg,
        })
    }, [currentState.clickSpotId])
    const back = (currentState, setCurrentState) => {
        if (currentState.currentView === 'dong' || currentState.currentView === 'info') {
            const gu = currentState.guName;
            setCurrentState({
                ...currentState,
                currentView: 'gu',
                clickSpotId: '',
                clickedName: gu,
            })
        }
    }
    return (
        <PinSelectLayout>
            <Title alignItem='flexStart'>
                <div className='title'>
                    <button className='back' onClick={() => { back(currentState, setCurrentState) }}>
                        <AiOutlineArrowLeft />
                    </button>
                    <div>
                        <h3>{pinState.name}</h3>
                        <h4>{pinState.gu} {pinState.dong}</h4>
                    </div>
                </div>
            </Title>

            <div className='pinInfoCon'>
                <div className='textCon'>
                    <h5 className='title'>어느 정도의 소음인가요?</h5>
                    <div className='textBox'>
                        <div className={`pin${pinState.imgSrcNum}`}>
                            <span>{`pin${pinState.imgSrcNum}`}</span>
                            <p>{Math.floor(pinState.avg)}</p>
                        </div>

                        <div className='infoBox'>
                            <dl>
                                <dt>소음 정도</dt>
                                <dd>{pinState.noiseDegreeMessage}</dd>
                            </dl>
                            <dl>
                                <dt>소음 영향</dt>
                                <dd>{pinState.noiseEffectMessage}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className='graphCon'>
                    <h5 className='title'>시간대별 소음 그래프</h5>
                    <div className='graphBox'>
                        <G4_PinGraph time={pinState.timeDecibels} colorIdx={pinState.imgSrcNum} />
                    </div>
                    <div className={`graphPin${pinState.imgSrcNum}`}>
                        <dl>
                            <dt></dt>
                            <dd>소음 측정량 (dB)</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </PinSelectLayout>
    );
}

export default PinSelect;
