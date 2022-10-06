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

import SeoulMap from '../dummy/seoul.json';
import GMap from '../dummy/gb.json';

const Find = () => {
    const [zoom, setZoom] = useState(2);
    const [name, setName] = useState('');
    return (
        <div style={{ display: 'flex' }}>
            <ReactTooltip type='light'>{name}</ReactTooltip>
            {
                zoom === 2 ?
                    <div className='map' style={{ width: '50vw', height: 'auto' }}>
                        <ComposableMap
                            style={{ backgroundColor: 'beige' }}
                            projection="geoMercator"
                            projectionConfig={{ rotate: [-60, 0, 5], scale: 35000 }}
                            data-tip="">
                            <ZoomableGroup
                                center={[126.986, 37.561]}
                                zoom={zoom}>

                                <Geographies geography={SeoulMap}>
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography
                                                onClick={() => {
                                                    setZoom(5);
                                                }}
                                                onMouseEnter={() => {
                                                    const { name } = geo.properties;
                                                    setName(`${name}`);
                                                }}
                                                onMouseLeave={() => {
                                                    setName("");
                                                }}
                                                key={geo.rsmKey}
                                                geography={geo}
                                                style={{
                                                    default: {
                                                        fill: "salmon",
                                                        stroke: "white",
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

                            </ZoomableGroup>

                        </ComposableMap></div> : null}
            {zoom === 5 ?
                <div className='map' style={{ width: '600px', height: '400px' }}>
                    <ComposableMap
                        style={{ backgroundColor: 'beige' }}
                        projection="geoMercator"
                        projectionConfig={{ rotate: [-60, 0, 5], scale: 35000 }}
                        data-tip="">
                        <ZoomableGroup
                            center={[
                                127.01985895225,
                                37.636542897005
                            ]}
                            zoom={zoom}>
                            <Geographies geography={GMap}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            onClick={() => {
                                                setZoom(2);
                                            }}
                                            onMouseEnter={() => {
                                                const { name } = geo.properties;
                                                setName(`${name}`);
                                            }}
                                            onMouseLeave={() => {
                                                setName("");
                                            }}
                                            key={geo.rsmKey}
                                            geography={geo}
                                            style={{
                                                default: {
                                                    fill: "salmon",
                                                    stroke: "white",
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
                        </ZoomableGroup>

                    </ComposableMap></div> : null}
            <div style={{ width: '300px', height: '80vh', background: 'whitesmoke', marginLeft: '20px' }}>
                순위 or 게시판 or 정보 영역
            </div>
        </div>
    );
}

export default Find;


{/* <Marker
                                coordinates={[126.986, 37.561]}
                                onMouseEnter={() => {
                                    setName('서울 중앙');
                                }}
                                onMouseLeave={() => {
                                    setName("");
                                }}>
                                <circle r={2} fill="yellow" />
                            </Marker>
                            <Marker
                                coordinates={[126.97962084516, 37.57002838826]}
                                onMouseEnter={() => {
                                    setName('종로구');
                                }}
                                onMouseLeave={() => {
                                    setName("");
                                }}>
                                <circle r={2} fill="yellow" />
                            </Marker> */}


{/* {markers.map(({ name, coordinates, markerOffset }, i) => {
                            return (
                                <>
                                    <Marker
                                        key={i}
                                        coordinates={coordinates}
                                        onMouseEnter={() => {
                                            setTooltipContent(name);
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent("");
                                        }}
                                    >
                                        <g
                                            fill="#5BC691"
                                            stroke="#5BC691"
                                            strokeWidth="0.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            transform="translate(0, -1.5)"
                                        >
                                            <svg width="10px" height="10px" viewBox="0 0 100 100">
                                                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                                            </svg>
                                        </g>
                                        <text
                                            textAnchor="middle"
                                            y={markerOffset}
                                            x={markerOff}
                                            style={{
                                                fontFamily: "system-ui",
                                                fill: "#5D5A6D",
                                                fontSize: 1,
                                                fontWeight: "500",
                                            }}
                                        >
                                            {name}
                                        </text>
                                    </Marker>
                                </>
                            );
                        })} */}