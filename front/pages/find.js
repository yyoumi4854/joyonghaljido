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
import Review from '../components/review';
import Info from '../components/info';

import Ranking2 from '../components/ranking/ranking2';

// styled
import FindLayout from '../styles/findLayoutStyles';
import FooterStyle from '../styles/footerStyles';


const Find = () => {
    return (
        <FindLayout>
            <div className='view'>
                {/* <Ranking /> */}
                {/* <Review /> */}
                {/* <Info /> */}

                {/* 임시 이렇게 사용하세요. */}
                <Ranking2/>
                <FooterStyle>&copy; 2022 조용할지도</FooterStyle>
                {/* 임시 */}
            </div>

            <div className='map'>
                <Map />
            </div>
        </FindLayout >
    );
}
export default Find;
