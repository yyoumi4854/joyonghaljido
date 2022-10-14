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

// components
import Map from '../components/map';
import Ranking from '../components/ranking/ranking';
import ReviewPage from '../components/review/reviewPage';
import Info from '../components/info';

// styled
import FindLayout from '../styles/findLayoutStyles';
import FooterStyle from '../styles/footerStyles';

const Find = () => {
    const [currentState, setCurrentState] = useState(
        {
            currentView: 'ranking',
            //'ranking', 'gu', 'dong', 'info'
            rankingTab: 'mw',
            //'mw' or 'noise'

            zoom: 2,
            clickedName: '',
            map: seoulMap,
            center: [126.986, 37.561],
            name: '',
        }
    );

    return (
        <FindLayout>
            <div className='view'>
                {/* <Ranking /> */}
                {/* <Review /> */}
                {/* <Info /> */}

                {/* 임시 이렇게 사용하세요. */}

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '30vw', height: 'calc(100vh - 50px)', background: 'white' }}>
                        {currentState.currentView === 'ranking' ?
                            <Ranking
                                currentState={currentState}
                                setCurrentState={setCurrentState} /> : null}
                        {currentState.currentView === 'gu' ?
                            <Review
                                currentState={currentState}
                                setCurrentState={setCurrentState} /> : null}
                        {currentState.currentView === 'dong' ?
                            <Review
                                currentState={currentState}
                                setCurrentState={setCurrentState} /> : null}
                        {currentState.currentView === 'info' ?
                            <Info
                                currentState={currentState}
                                setCurrentState={setCurrentState} /> : null}
                    </div>
                </div>
                <FooterStyle>&copy; 2022 조용할지도</FooterStyle>
                {/* 임시 */}
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
        </FindLayout >
    );
}
export default Find;
