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

import { scaleQuantize } from "d3-scale";

const Map = () => {
    let MW_OBJ = [
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

    // 2. 소음(데시벨)
    let DB_OBJ = [
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
        .domain([1, 10])
        .range([
            "#ffedea",
            "#ffcec5",
            "#ffad9f",
            "#ff8a75",
            "#ff5533",
            "#e2492d",
            "#be3d26",
            "#9a311f",
            "#782618"
        ]);

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

    return (
        <>
            <ReactTooltip type='light'>{mapState.name}</ReactTooltip>
            {mapState.isZoom === false ? <h2>찾고 싶은 지역을 선택해주세요.</h2> :
                <h2><span onClick={() => {
                    setMapState({
                        ...mapState,
                        isZoom: false,
                        zoom: 2,
                        map: seoulMap,
                        zoomName: '',
                        center: [126.986, 37.561],
                    });
                }}>서울시</span> &gt; {mapState.zoomName}</h2>}
            <div style={{
                height: '80vh', width: '80vh',
                // border: '1px grey solid'
            }}>
                <ComposableMap
                    width={600}
                    height={600}
                    style={{ backgroundColor: 'whitesmoke' }}
                    projection="geoMercator"
                    projectionConfig={{ rotate: [-60, 0, 5], scale: 35000 }}
                    data-tip="">
                    <ZoomableGroup
                        center={mapState.center}
                        zoom={mapState.zoom}
                        minZoom={mapState.zoom - 1}
                        maxZoom={mapState.zoom + 1}
                    >
                        <Geographies geography={mapState.map}>
                            {({ geographies }) =>
                                geographies.map((geo) => {
                                    // const cur = data.find(s => s.id === geo.properties.name);
                                    return <Geography
                                        onClick={() => {
                                            //서울지도일때만 동작
                                            if (mapState.isZoom === false) {
                                                const { name } = geo.properties;
                                                const { center } = zoomMap[name];
                                                console.log(center);
                                                setMapState({
                                                    ...mapState,
                                                    isZoom: true,
                                                    zoom: 7,
                                                    map: zoomMap[name],
                                                    zoomName: name,
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
                                            setMapState({ ...mapState, name })
                                        }}
                                        onMouseLeave={() => {
                                            setMapState({ ...mapState, name: '' })
                                        }}
                                        key={geo.rsmKey}
                                        geography={geo}
                                    // fill={colorScale(cur ? cur.unemployment_rate : "#EEE")}
                                    // style={{
                                    //     default: {
                                    //         stroke: "whitesmoke",
                                    //         strokeWidth: 0,
                                    //         outline: "none",
                                    //     },
                                    //     hover: {
                                    //         fill: "#B1D6AE",
                                    //         outline: "none",
                                    //     },
                                    //     pressed: {
                                    //         fill: "fff",
                                    //         outline: "#333",
                                    //     },
                                    // }}
                                    />
                                })
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
                            {/* <text textAnchor="middle" fill="grey">
                        서울중앙
                    </text> */}
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
                            {/* <text textAnchor="middle" fill="grey">
                        종로구
                    </text> */}
                        </Marker>
                    </ZoomableGroup>
                </ComposableMap>
            </div>

        </>);
}

export default Map;