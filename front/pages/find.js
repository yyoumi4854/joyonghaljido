import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation,
    ZoomableGroup,
} from 'react-simple-maps';

import { useState } from 'react';
import ReactTooltip from 'react-tooltip'

import seoulMap from '../dummy/seoul.json';
import zoomMap from '../dummy/zoom.json';

import Map from '../components/map';
import Ranking from '../components/ranking/ranking';
import ReviewGu from '../components/reviewGu';
import ReviewDong from '../components/reviewDong';
import Info from '../components/info';

const Find = () => {
    const [currentState, setCurrentState] = useState(
        {
            clicked: 1,
            //상태(1 : 랭킹컴포넌트, 2 : 리뷰(구), 3: 리뷰(동), 4: 정보(핀))에 따라 컴포넌트가 좌측에 나타납니다. 
            rankingClicked: 1,
            //ranking.js에서 클릭된 탭에 따라 서울지도에서의 구 색상 기준이 변경됩니다. (1: 민원, 2: 소음수치)

            zoom: 2,
            clickedName: '',
            map: seoulMap,
            center: [126.986, 37.561],
            name: '',
        }
    );

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '30vw', height: 'calc(100vh - 50px)', background: 'white' }}>
                {currentState.clicked === 1 ?
                    <Ranking
                        currentState={currentState}
                        setCurrentState={setCurrentState} /> : null}
                {currentState.clicked === 2 ?
                    <ReviewGu
                        currentState={currentState}
                        setCurrentState={setCurrentState} /> : null}
                {currentState.clicked === 3 ?
                    <ReviewDong
                        currentState={currentState}
                        setCurrentState={setCurrentState} /> : null}
                {currentState.clicked === 4 ?
                    <Info
                        currentState={currentState}
                        setCurrentState={setCurrentState} /> : null}
            </div>
            <div style={{
                width: '70vw', height: 'calc(100vh - 50px)',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Map
                    currentState={currentState}
                    setCurrentState={setCurrentState}
                />
            </div>
        </div >
    );
}
export default Find;
