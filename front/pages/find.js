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
import Review from '../components/review/review';
import Info from '../components/info';

const Find = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '30vw', height: 'calc(100vh - 50px)', background: 'white' }}>
                <Ranking />
                <Review />
                {/* <Info /> */}
            </div>
            <div style={{
                width: '70vw', height: 'calc(100vh - 50px)',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Map />
            </div>
        </div >
    );
}
export default Find;
