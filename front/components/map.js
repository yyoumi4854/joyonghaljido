import theme from '../styles/theme';

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation,
    ZoomableGroup,
} from 'react-simple-maps';

import { useState, useEffect } from 'react';

import ReactTooltip from 'react-tooltip'

import seoulMap from '../dummy/seoul.json';
import zoomMap from '../dummy/zoom.json';

import Image from 'next/image';
import redPin from '../public/images/logo.svg';

import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";

const Map = ({ currentState, setCurrentState }) => {
    const [pins, setPins] = useState('');
    const [dongs, setDongs] = useState('');

    useEffect(() => {
        csv("/pin_data_master.csv").then(v => {
            setPins(v);
        });
        csv("/geojsonbase_gu_dong_coordinates_master.csv").then(v => {
            setDongs(v);
        });
    }, []);

    const MW_OBJ = [
        { name: '종로구', MW: 2016 },
        { name: '중구', MW: 1060 },
        { name: '용산구', MW: 1625 },
        { name: '성동구', MW: 1860 },
        { name: '광진구', MW: 1943 },
        { name: '동대문구', MW: 2446 },
        { name: '중랑구', MW: 1787 },
        { name: '성북구', MW: 1783 },
        { name: '강북구', MW: 2204 },
        { name: '도봉구', MW: 1289 },
        { name: '노원구', MW: 1006 },
        { name: '은평구', MW: 3060 },
        { name: '서대문구', MW: 2147 },
        { name: '마포구', MW: 3307 },
        { name: '양천구', MW: 1223 },
        { name: '강서구', MW: 1348 },
        { name: '구로구', MW: 1935 },
        { name: '금천구', MW: 1876 },
        { name: '영등포구', MW: 3264 },
        { name: '동작구', MW: 2534 },
        { name: '관악구', MW: 2542 },
        { name: '서초구', MW: 4187 },
        { name: '강남구', MW: 7518 },
        { name: '송파구', MW: 2099 },
        { name: '강동구', MW: 4327 }
    ];
    const DB_OBJ = [
        { name: '광진구', DB: 0 },
        { name: '강남구', DB: 57.42 },
        { name: '강동구', DB: 66.15 },
        { name: '강북구', DB: 57.99 },
        { name: '강서구', DB: 67.66 },
        { name: '관악구', DB: 66.46 },
        { name: '구로구', DB: 62.83 },
        { name: '금천구', DB: 65.47 },
        { name: '노원구', DB: 53.29 },
        { name: '도봉구', DB: 0 },
        { name: '동대문구', DB: 59.19 },
        { name: '동작구', DB: 65.48 },
        { name: '마포구', DB: 60.71 },
        { name: '서대문구', DB: 68.97 },
        { name: '서초구', DB: 55.37 },
        { name: '성동구', DB: 65.24 },
        { name: '성북구', DB: 57.45 },
        { name: '송파구', DB: 63.09 },
        { name: '양천구', DB: 54.93 },
        { name: '영등포구', DB: 61.87 },
        { name: '용산구', DB: 64.32 },
        { name: '은평구', DB: 60.64 },
        { name: '종로구', DB: 58.66 },
        { name: '중구', DB: 62.67 },
        { name: '중랑구', DB: 61.8 },
    ];

    const colorScale = scaleQuantize()
        .domain([1000, 7500])
        .range([
            "#ffedea",
            "#ffcec5",
            "#ffad9f",
            "#ff8a75"
        ]);

    return (
        <>
            <ReactTooltip type='light'>{currentState.name}</ReactTooltip>
            <div style={{
                width: '100%', textAlign: 'center', padding: '10px'
                , fontSize: '26px', fontWeight: '700'
            }}>
                {currentState.currentView === 'ranking' ?
                    <h2 >찾고 싶은 지역을 선택해주세요.</h2> :
                    <h2 ><span
                        onClick={() => {
                            setCurrentState({
                                ...currentState,
                                currentView: 'ranking',
                                zoom: 2,
                                map: seoulMap,
                                clickedName: '',
                                center: [126.986, 37.561],
                            });
                        }}>서울시</span> &gt; {currentState.clickedName}</h2>}
            </div>


            <div style={{
                overflow: 'hidden',
                height: '80%', width: '100%'
            }}>
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{ rotate: [-60, 0, 5], scale: 35000 }}
                    data-tip=""
                >
                    <ZoomableGroup
                        center={currentState.center}
                        zoom={currentState.zoom}
                        minZoom={currentState.zoom - 1}
                        maxZoom={currentState.zoom + 1}
                    >
                        <Geographies geography={currentState.map}>
                            {({ geographies }) =>
                                geographies.map((geo) => {
                                    const cur = MW_OBJ.find(v => v.name === geo.properties.name)
                                    return <Geography
                                        fill={
                                            currentState.currentView !== 'ranking' ? theme.colors.grey3 : colorScale(cur ? cur.MW : "#EEE")}
                                        stroke={'white'}
                                        strokeWidth={currentState.isZoom ? 0 : 1}
                                        onClick={() => {
                                            //서울지도일때만 동작
                                            if (currentState.currentView === 'ranking') {
                                                const { name } = geo.properties;
                                                const { center } = zoomMap[name];
                                                setCurrentState({
                                                    ...currentState,
                                                    currentView: 'gu',
                                                    zoom: 7,
                                                    map: zoomMap[name],
                                                    clickedName: name,
                                                    center,
                                                });

                                                //서버통신시 진행방향
                                                //여기서 서버에 name의 맵데이터를 요청
                                                //setMap(응답받은 맵데이터);
                                                //setCenter();
                                                //setZoom();
                                            }
                                        }}
                                        onMouseEnter={() => {
                                            const { name } = geo.properties;
                                            setCurrentState({ ...currentState, name })
                                        }}
                                        onMouseLeave={() => {
                                            setCurrentState({ ...currentState, name: '' })
                                        }}
                                        key={geo.rsmKey}
                                        geography={geo}
                                        style={{
                                            default: {
                                                outline: "none",
                                            },
                                            hover: {
                                                outline: "none",
                                            },
                                            pressed: {
                                                fill: "fff",
                                                outline: "#333",
                                            },
                                        }}
                                    />
                                })
                            }
                        </Geographies>
                        {currentState.currentView !== 'ranking' ?
                            pins && pins.map(pin => {
                                return <Marker
                                    key={pin._id}
                                    onClick={() => {
                                        setCurrentState({
                                            ...currentState,
                                            currentView: 'info',
                                            clickedName: pin.name
                                        });
                                    }}
                                    coordinates={[pin.longitude, pin.latitude]}>
                                    {/* <Image src={redPin} alt="빨간 핀" /> */}
                                    <circle r={3} fill={theme.colors.red} />
                                </Marker>
                            }) : null}
                        {currentState.currentView !== 'ranking' ?
                            dongs && dongs.map(dong => {
                                return <Marker
                                    key={dong._id}
                                    onClick={() => {
                                        setCurrentState({
                                            ...currentState,
                                            currentView: 'dong',
                                            clickedName: dong.name
                                        });
                                    }}
                                    coordinates={[dong.longitude, dong.latitude]}>
                                    <circle r={1} fill={theme.colors.main} />
                                </Marker>
                            }) : null}
                    </ZoomableGroup>
                </ComposableMap>
            </div>

        </>);
}

export default Map;