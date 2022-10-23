import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

import { useState } from "react";
import ReactTooltip from "react-tooltip";

import seoulMap from "../data/map/seoul.json";

// components
import Map from "../components/map/map";
import Ranking from "../components/ranking/ranking";
import Review from "../components/review/review";
import PinSelect from "../components/pinInfo/pinSelect";
import RankingInfo from "../components/sideInfo/rankingInfo";
import PinMarkerInfo from "../components/sideInfo/pinMarkerInfo";
import PinLevelInfo from "../components/sideInfo/pinLevelInfo";

// styled
import FindLayout from "./findLayoutStyles";
import FooterStyle from "../styles/footerStyles";

const Find = () => {
  const [pins, setPins] = useState("");
  const [dongs, setDongs] = useState("");

  const [currentState, setCurrentState] = useState({
    currentView: "ranking", //'ranking', 'gu', 'dong', 'info'
    rankingTab:  "noise",   //'mw' or 'noise'

    zoom: 2,
    guId: "",
    guName: "",
    clickSpotId: "",
    clickedName: "",

    map: seoulMap,
    center: [126.986, 37.561],
  });

  const [modal, setModal] = useState("none");
  // 모달종류 : pw, chk, deny, pw_delete, pw_update, none

  return (
    <div style={{ marginTop: '64px' }}>
      <Row className='gx-0'>
        <Col xs={12} lg={4}>
          {currentState.currentView === "ranking" ? (
            <>
              <Ranking
                currentState={currentState}
                setCurrentState={setCurrentState}
                pins={pins}
                setPins={setPins}
                dongs={dongs}
                setDongs={setDongs}
              />
              <RankingInfo />
            </>
          ) : null}
          {currentState.currentView === "gu" ? (
            <>
              <Review
                currentState={currentState}
                setCurrentState={setCurrentState}
                modal={modal}
                setModal={setModal}
              />
              <PinMarkerInfo />
            </>
          ) : null}
          {currentState.currentView === "dong" ? (
            <Review
              currentState={currentState}
              setCurrentState={setCurrentState}
              modal={modal}
              setModal={setModal}
            />
          ) : null}
          {currentState.currentView === "info" ? (
            <>
              <PinSelect
                pins={pins}
                currentState={currentState}
                setCurrentState={setCurrentState}
              />
              <PinLevelInfo />
            </>
          ) : null}
          <FooterStyle>&copy; 2022 조용할지도</FooterStyle>
        </Col>
        <Col sm={12} lg={8} style={{ overflow: 'hidden' }}>
          <Map
            currentState={currentState}
            setCurrentState={setCurrentState}
            pins={pins}
            setPins={setPins}
            dongs={dongs}
            setDongs={setDongs}
          />
        </Col>
      </Row>
    </div>


  );
};

export default Find;
