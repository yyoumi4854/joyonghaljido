//lib
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup,
} from 'react-simple-maps';
import { scaleQuantize } from "d3-scale";
import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip'


//data
import { mwColor, noiseColor } from '../../data/map/mapColor';
import { MW_OBJ, NOISE_OBJ } from '../../data/map/valueData';
import { redPin, orangePin, yellowPin, greenPin, bluePin, purplePin } from '../../data/map/pins';
import nameIds from '../../Id_book/nameId.json';
import seoulMap from '../../data/map/seoul.json';
import zoomMap from '../../data/map/zoom.json'


// styled
import theme from '../../styles/theme';
import MapContent from './mapStyles';

// react-icons
import { BsForwardFill } from "react-icons/bs";



//맵 색지정 함수
const mapColor = (currentState) => {
    if (currentState.rankingTab == 'mw') {
        return (scaleQuantize()
            .domain([1000, 7500])
            .range(mwColor));
    }
    else if (currentState.rankingTab == 'noise') {
        return (scaleQuantize()
            .domain([50, 68])
            .range(noiseColor));
    }
}

const Map = ({ currentState, setCurrentState, pins, setPins, dongs, setDongs }) => {


    //tooltip때문에 호버할때마다 리렌더 발생 => 매우 비효율
    const [tooltipName, setTooltipName] = useState('');
    useEffect(() => {
        console.log(pins);
    }, [pins])

    return (
        <MapContent>
            <ReactTooltip type='light'>{tooltipName}</ReactTooltip>

            {
                currentState.guName || currentState.clickSpotId ?
                    <div className='title locationPath'>
                        {currentState.guName && <>
                            <p
                                onClick={() => {
                                    setCurrentState({
                                        ...currentState,
                                        currentView: 'ranking',
                                        zoom: 2,
                                        map: seoulMap,

                                        guId: '',
                                        guName: '',
                                        clickSpotId: '',
                                        clickedName: '',
                                        center: [126.986, 37.561],
                                    });
                                }}>서울시
                            </p>

                            <BsForwardFill />

                            <p
                                onClick={() => {
                                    const gu = currentState.guName;
                                    setCurrentState({
                                        ...currentState,
                                        currentView: 'gu',
                                        clickSpotId: '',
                                        clickedName: gu,
                                    })
                                }}>
                                {currentState?.guName}
                            </p>
                        </>}

                        {currentState.clickSpotId &&
                            <>
                                <BsForwardFill />
                                <p>
                                    {currentState.clickedName}
                                </p>
                            </>
                        }
                    </div>
                    : <p className='title'>지역을 선택해주세요.</p>
            }


            <div className='mapCon'>
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{ rotate: [-60, 0, 5], scale: 38000 }}
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
                                        className='tansition'
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
                                    {
                                        pin.timeDecibelsAvg > 1 && pin.timeDecibelsAvg <= 50 &&
                                        purplePin
                                    }
                                    {
                                        pin.timeDecibelsAvg > 50 && pin.timeDecibelsAvg <= 55 &&
                                        bluePin
                                    }
                                    {
                                        pin.timeDecibelsAvg > 55 && pin.timeDecibelsAvg <= 60 &&
                                        greenPin
                                    }
                                    {
                                        pin.timeDecibelsAvg > 60 && pin.timeDecibelsAvg <= 65 &&
                                        yellowPin
                                    }
                                    {
                                        pin.timeDecibelsAvg > 65 && pin.timeDecibelsAvg <= 70 &&
                                        orangePin
                                    }
                                    {
                                        pin.timeDecibelsAvg > 70 &&
                                        redPin
                                    }
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
                                        r={0.5}
                                    />
                                </Marker>
                            }) : null}
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        </MapContent >);
}

export default Map;