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

const Find = () => {
    const [mapState, setMapState] = useState(
        {
            isZoom: false,
            zoom: 2,
            zoomName: '',
            map: seoulMap,
            center: [126.986, 37.561],
            name: '',
        }
    );
    console.log(mapState.isZoom);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '30vw', height: 'calc(100vh - 50px)', background: 'white' }}>
                {!mapState.isZoom ? <Ranking /> : <Info />}
                {/* <Review /> */}

            </div>
            <div style={{
                width: '70vw', height: 'calc(100vh - 50px)',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Map
                    mapState={mapState}
                    setMapState={setMapState} />
            </div>
        </div >
    );
}
export default Find;
