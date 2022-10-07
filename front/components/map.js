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

const Map = () => {
    // const [mapState, setMapState] = useState(
    //     {
    //          수정중
    //     }
    // );
    const [zoom, setZoom] = useState(2);

    const [map, setMap] = useState(seoulMap);
    const [center, setCenter] = useState([126.986, 37.561]);
    const [locationName, setLocationName] = useState('');

    return (<div style={{ width: '500px', height: 'auto' }}>
        <ReactTooltip type='light'>{locationName}</ReactTooltip>
        <ComposableMap
            style={{ backgroundColor: 'beige' }}
            projection="geoMercator"
            projectionConfig={{ rotate: [-60, 0, 5], scale: 35000 }}
            data-tip="">
            <ZoomableGroup
                center={center}
                zoom={zoom}>

                <Geographies geography={map}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                onClick={() => {
                                    if (zoom === 2) {
                                        const { name } = geo.properties;
                                        const { center } = geo.properties;
                                        // console.log(geo.properties);
                                        // state 하나의 객체로 정리 필요
                                        setZoom(5);
                                        setMap(zoomMap[name])
                                        setCenter(center);

                                        //서버통신시 진행방향
                                        //여기서 서버에 name의 맵데이터를 요청
                                        //setMap(응답받은 맵데이터);
                                        //setCenter();
                                        //setZoom();
                                    }
                                }}
                                onMouseEnter={() => {
                                    const { name } = geo.properties;
                                    console.log(geo.properties);
                                    setLocationName(`${name}`);
                                }}
                                onMouseLeave={() => {
                                    setLocationName("");
                                }}
                                key={geo.rsmKey}
                                geography={geo}
                                style={{
                                    default: {
                                        fill: "white",
                                        stroke: "grey",
                                        strokeWidth: 0.06,
                                        outline: "none",
                                    },
                                    hover: {
                                        fill: "#B1D6AE",
                                        outline: "none",
                                    },
                                    pressed: {
                                        fill: "fff",
                                        outline: "#333",
                                    },
                                }}
                            />
                        ))
                    }
                </Geographies>
                <Marker
                    coordinates={[126.986, 37.561]}
                // onMouseEnter={() => {
                //     setName('서울 중앙');
                // }}
                // onMouseLeave={() => {
                //     setName("");
                // }}
                >
                    <text textAnchor="middle" fill="grey">
                        서울중앙
                    </text>
                </Marker>
                <Marker
                    coordinates={[126.97962084516, 37.57002838826]}
                // onMouseEnter={() => {
                //     setName('종로구');
                // }}
                // onMouseLeave={() => {
                //     setName("");
                // }}
                >
                    <text textAnchor="middle" fill="grey">
                        종로구
                    </text>
                </Marker>
            </ZoomableGroup>
        </ComposableMap>
    </div>);
}

export default Map;