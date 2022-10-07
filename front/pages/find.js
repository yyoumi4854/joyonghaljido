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

// import seoulMap from '../dummy/seoul.json';
// import zoomMap from '../dummy/zoom.json';

// import Map from '../components/map';
import Ranking from '../components/ranking';
import Review from '../components/review';
import Info from '../components/info';

const Find = () => {
    return (
        <div style={{ display: 'flex' }}>
            {/* <Map /> */}
            <div style={{ width: '300px', height: '80vh', background: 'whitesmoke', marginLeft: '20px' }}>
                <Ranking />
                {/* <Review /> */}
                {/* <Info /> */}
            </div>
        </div>
    );
}
export default Find;
