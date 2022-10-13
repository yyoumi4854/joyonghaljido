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
import Ranking from '../components/ranking/ranking.js';
import Review from '../components/review/review.js';
import Info from '../components/info';

// styled
import FindLayout from '../styles/findLayoutStyles';
import FooterStyle from '../styles/footerStyles';


const Find = () => {
    return (
        <FindLayout>
            <div className='view'>
                {/* <Review /> */}
                {/* <Info /> */}

                <Ranking />
                <FooterStyle>&copy; 2022 조용할지도</FooterStyle>
            </div>

            <div className='map'>
                <Map />
            </div>
        </FindLayout >
    );
}
export default Find;
