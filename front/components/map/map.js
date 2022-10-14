import theme from '../../styles/theme';
import PinImg1 from '../../public/images/pin1.svg'
import PinImg2 from '../../public/images/pin2.svg'
import PinImg3 from '../../public/images/pin3.svg'
import PinImg4 from '../../public/images/pin4.svg'
import PinImg5 from '../../public/images/pin5.svg'
import PinImg6 from '../../public/images/pin6.svg'

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

import seoulMap from '../../dummy/seoul.json';
import zoomMap from '../../dummy/zoom.json';

import Image from 'next/image';

import { scaleQuantize } from "d3-scale";

// styled
import MapContent from './mapStyles';

// react-icons
import { BsForwardFill } from "react-icons/bs";

import nameIds from '../../Id_book/nameId.json';

import axios from 'axios';

const Map = ({ currentState, setCurrentState }) => {
    const [pins, setPins] = useState('');
    const [dongs, setDongs] = useState('');
    const [tooltipName, setTooltipName] = useState('');

    //맵 색지정 함수
    const mapColor = (currentState) => {
        if (currentState.rankingTab == 'mw') {
            return (scaleQuantize()
                .domain([1000, 7500])
                .range([
                    'rgba(91, 184, 251, 0.1)',
                    'rgba(91, 184, 251, 0.2)',
                    'rgba(91, 184, 251, 0.3)',
                    'rgba(91, 184, 251, 0.4)',
                    'rgba(91, 184, 251, 0.5)',
                    'rgba(91, 184, 251, 0.6)',
                    'rgba(91, 184, 251, 0.7)',
                    'rgba(91, 184, 251, 0.8)',
                    'rgba(91, 184, 251, 0.9)',
                    'rgba(91, 184, 251, 1)',
                ]));
        }
        else if (currentState.rankingTab == 'noise') {
            return (scaleQuantize()
                .domain([50, 68])
                .range([
                    "rgba(245, 80, 115, 0.1)",
                    "rgba(245, 80, 115, 0.2)",
                    "rgba(245, 80, 115, 0.3)",
                    "rgba(245, 80, 115, 0.4)",
                    "rgba(245, 80, 115, 0.5)",
                    "rgba(245, 80, 115, 0.6)",
                    "rgba(245, 80, 115, 0.7)",
                    "rgba(245, 80, 115, 0.8)",
                    "rgba(245, 80, 115, 0.9)",
                    "rgba(245, 80, 115, 1)",
                ]));
        }
    }

    //구지역 민원 및 소음 데이터
    const MW_OBJ = [
        { name: '종로구', VALUE: 2016 },
        { name: '중구', VALUE: 1060 },
        { name: '용산구', VALUE: 1625 },
        { name: '성동구', VALUE: 1860 },
        { name: '광진구', VALUE: 1943 },
        { name: '동대문구', VALUE: 2446 },
        { name: '중랑구', VALUE: 1787 },
        { name: '성북구', VALUE: 1783 },
        { name: '강북구', VALUE: 2204 },
        { name: '도봉구', VALUE: 1289 },
        { name: '노원구', VALUE: 1006 },
        { name: '은평구', VALUE: 3060 },
        { name: '서대문구', VALUE: 2147 },
        { name: '마포구', VALUE: 3307 },
        { name: '양천구', VALUE: 1223 },
        { name: '강서구', VALUE: 1348 },
        { name: '구로구', VALUE: 1935 },
        { name: '금천구', VALUE: 1876 },
        { name: '영등포구', VALUE: 3264 },
        { name: '동작구', VALUE: 2534 },
        { name: '관악구', VALUE: 2542 },
        { name: '서초구', VALUE: 4187 },
        { name: '강남구', VALUE: 7518 },
        { name: '송파구', VALUE: 2099 },
        { name: '강동구', VALUE: 4327 }
    ];
    const NOISE_OBJ = [
        { name: '광진구', VALUE: 0 },
        { name: '강남구', VALUE: 57.42 },
        { name: '강동구', VALUE: 66.15 },
        { name: '강북구', VALUE: 57.99 },
        { name: '강서구', VALUE: 67.66 },
        { name: '관악구', VALUE: 66.46 },
        { name: '구로구', VALUE: 62.83 },
        { name: '금천구', VALUE: 65.47 },
        { name: '노원구', VALUE: 53.29 },
        { name: '도봉구', VALUE: 0 },
        { name: '동대문구', VALUE: 59.19 },
        { name: '동작구', VALUE: 65.48 },
        { name: '마포구', VALUE: 60.71 },
        { name: '서대문구', VALUE: 68.97 },
        { name: '서초구', VALUE: 55.37 },
        { name: '성동구', VALUE: 65.24 },
        { name: '성북구', VALUE: 57.45 },
        { name: '송파구', VALUE: 63.09 },
        { name: '양천구', VALUE: 54.93 },
        { name: '영등포구', VALUE: 61.87 },
        { name: '용산구', VALUE: 64.32 },
        { name: '은평구', VALUE: 60.64 },
        { name: '종로구', VALUE: 58.66 },
        { name: '중구', VALUE: 62.67 },
        { name: '중랑구', VALUE: 61.8 },
    ];



    return (
        <MapContent>
            <ReactTooltip type='light'>{tooltipName}</ReactTooltip>
            <div className='locationText'>
                {currentState.currentView === 'ranking' ?
                    <h2 >찾고 싶은 지역을 선택해주세요.</h2> :
                    <h2 ><span
                        onClick={() => {
                            setCurrentState({
                                ...currentState,
                                currentView: 'ranking',
                                // rankingTab: 'noise',
                                zoom: 2,
                                map: seoulMap,

                                guId: '',
                                guName: '',
                                clickSpotId: '',
                                clickedName: '',
                                center: [126.986, 37.561],
                            });
                        }}>서울시</span> <BsForwardFill />
                        <span onClick={() => (
                            setCurrentState({
                                ...currentState,
                                currentView: 'gu',
                                clickSpotId: '',
                                clickedName: '',
                            }))}>{currentState.guName}</span> {currentState.clickSpotId ? <><BsForwardFill /> <span>{currentState.clickedName}</span></> : null}</h2>}
            </div>


            <div className='mapCon'>
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
                                    const cur = currentState.rankingTab === 'mw' ?
                                        MW_OBJ.find(v => v.name === geo.properties.name) :
                                        NOISE_OBJ.find(v => v.name === geo.properties.name)

                                    return <Geography
                                        fill={
                                            currentState.currentView !== 'ranking' ?
                                                theme.colors.grey3 :
                                                mapColor(currentState)(cur ? cur.VALUE : "#E4E5E9")}
                                        stroke={'#F5F5F5'}
                                        strokeWidth={currentState.isZoom ? 0 : 0.4}
                                        onClick={async () => {
                                            //서울지도일때만 동작
                                            if (currentState.currentView === 'ranking') {
                                                const { name } = geo.properties;
                                                const gu = nameIds.find(v => v.name === name);
                                                const guId = gu._id;
                                                const guName = gu.name;

                                                const mapData = await axios.get(`http://localhost:5001/gus/${guId}`);
                                                const dongsAndPins = await axios.get(`http://localhost:5001/location/gus/${guId}`);
                                                setDongs(dongsAndPins.data.dongs);
                                                setPins(dongsAndPins.data.pins);
                                                // console.log(pins);

                                                const { center } = zoomMap[name];
                                                // const { center } = mapData.data;

                                                setCurrentState({
                                                    ...currentState,
                                                    currentView: 'gu',
                                                    zoom: 7,
                                                    map: mapData.data,
                                                    clickedName: name,
                                                    center,
                                                    guId,
                                                    guName,
                                                });
                                            }
                                        }}
                                        onMouseEnter={() => {
                                            if (currentState.currentView === 'ranking') {
                                                const { name } = geo.properties;
                                                setTooltipName(name);
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipName('');
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
                                            clickedName: pin.name,
                                            clickSpotId: pin._id
                                        });
                                    }}
                                    onMouseEnter={() => {
                                        setTooltipName(pin.name);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipName('');
                                    }}
                                    coordinates={[pin.longitude, pin.latitude]}>
                                    <g
                                        transform="translate(-0, -5) scale(0.1)">
                                        <path d="M25.9078 59.0345C25.5502 59.8087 24.4498 59.8087 24.0922 59.0345L18.7274 47.4193C18.4213 46.7567 18.9053 46 19.6352 46H30.3648C31.0947 46 31.5787 46.7567 31.2727 47.4193L25.9078 59.0345Z" fill="#7352DE" />
                                        <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z" fill="#7352DE" />
                                        <path d="M25 45C36.0469 45 45 36.0469 45 25C45 13.9531 36.0469 5 25 5C13.9531 5 5 13.9531 5 25C5 36.0469 13.9531 45 25 45ZM12.5625 29.5391C12.2656 28.4688 13.1406 27.5 14.25 27.5H35.75C36.8594 27.5 37.7422 28.4688 37.4375 29.5391C35.9531 34.8438 30.9453 38.75 25 38.75C19.0547 38.75 14.0469 34.8438 12.5625 29.5391ZM15.4297 13.9609L22.4531 17.7031C23.2891 18.1484 23.2891 19.3516 22.4531 19.7969L15.4297 23.5391C14.8125 23.8672 14.0625 23.4219 14.0625 22.7188C14.0625 22.5 14.1406 22.2891 14.2812 22.125L17.0938 18.75L14.2812 15.375C14.1406 15.2109 14.0625 15 14.0625 14.7812C14.0625 14.0781 14.8125 13.6328 15.4297 13.9609ZM35.9375 14.7734C35.9375 14.9922 35.8594 15.2031 35.7188 15.3672L32.9062 18.7422L35.7188 22.1172C35.8594 22.2812 35.9375 22.4922 35.9375 22.7109C35.9375 23.4141 35.1875 23.8594 34.5703 23.5312L27.5469 19.7891C26.7109 19.3438 26.7109 18.1406 27.5469 17.6953L34.5703 13.9531C35.1875 13.625 35.9375 14.0703 35.9375 14.7734Z" fill="#AB97EB" />
                                    </g>
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
                                            clickedName: dong.name,
                                            clickSpotId: dong._id,
                                        });
                                    }}
                                    onMouseEnter={() => {
                                        setTooltipName(dong.name);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipName('');
                                    }}
                                    style={{
                                        default: { fill: theme.colors.main },
                                        hover: {
                                            fill: theme.colors.main,
                                            outline: 'none',
                                            stroke: theme.colors.mainLight1,
                                            strokeWidth: 0.5,
                                        },
                                    }}
                                    coordinates={[dong.longitude, dong.latitude]}>
                                    <circle
                                        r={1}
                                    />
                                </Marker>
                            }) : null}
                    </ZoomableGroup>
                </ComposableMap>
            </div>

        </MapContent >);
}

export default Map;