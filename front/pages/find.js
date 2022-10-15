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
import Map from '../components/map/map';
import Ranking from '../components/ranking/ranking';
import Review from '../components/review/review';
import PinSelect from '../components/pinInfo/pinSelect';
import RankingInfo from '../components/sideInfo/rankingInfo';
import PinMarkerInfo from '../components/sideInfo/pinMarkerInfo';

// styled
import FindLayout from './findLayoutStyles';
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
            <div >
                {currentState.currentView === 'ranking' ?
                    (<>
                        <Ranking
                            currentState={currentState}
                            setCurrentState={setCurrentState} /> 
                        <RankingInfo/>
                    </>)
                : null}
                {currentState.currentView === 'gu' ?
                    (<>
                        <Review
                            currentState={currentState}
                            setCurrentState={setCurrentState} /> 
                        <PinMarkerInfo/>
                    </>)
                : null}
                {currentState.currentView === 'dong' ?
                    <Review
                        currentState={currentState}
                        setCurrentState={setCurrentState} /> : null}
                {currentState.currentView === 'info' ?
                    <PinSelect
                        currentState={currentState}
                        setCurrentState={setCurrentState} /> : null}
                <FooterStyle>&copy; 2022 조용할지도</FooterStyle>
            </div>
            <div >
                <Map
                    currentState={currentState}
                    setCurrentState={setCurrentState}
                />
            </div>
        </FindLayout>
    );
}

export default Find;
