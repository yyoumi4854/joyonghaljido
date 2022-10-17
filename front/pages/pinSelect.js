import G4_PinGraph from "./G4_PinGraph";
import Image from "next/image";
import PinImg1 from "../../public/images/pin1.svg";
import PinImg2 from "../../public/images/pin2.svg";
import PinImg3 from "../../public/images/pin3.svg";
import PinImg4 from "../../public/images/pin4.svg";
import PinImg5 from "../../public/images/pin5.svg";
import PinImg6 from "../../public/images/pin6.svg";
import LeftArrow from "../../public/images/LeftArrow.svg";
import PinSelectLayout from "./pinSelect.style";
import { noiseDegree, noiseEffect } from "./noiseInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import pinIds from "../../Id_book/pinId.json";
import * as Api from "../../api";

const PinSelect = ({ currentState }) => {
  useEffect(() => {
    console.log("getdata");
    getData();
  }, [currentState]);

  const [pinState, setPinstate] = useState({
    name: "",
    timeDecibels: [],
    dong: "",
    gu: "",

    noiseDegreeMessage: "",
    noiseEffectMessage: "",
    imgSrcNum: -1,
    avg: 0,
  });

  let pinId = currentState.clickSpotId;

  console.log(pinId);
  let sum = 0;
  const ImgArr = [PinImg1, PinImg2, PinImg3, PinImg4, PinImg5, PinImg6];

  const getData = async () => {
    const res = await Api.get("pins/", pinId);
    const d = res.data;

    res.data.timeDecibels.forEach((e) => {
      sum += e;
    });
    const result = calc(sum);

    setPinstate({
      ...pinState,
      name: res.data.name,
      timeDecibels: res.data.timeDecibels,
      dong: res.data.dongName,
      gu: res.data.guName,

      noiseDegreeMessage: result.noiseDegreeMessage,
      noiseEffectMessage: result.noiseEffectMessage,
      imgSrcNum: result.imgSrcState,
      avg: result.avg,
    });
  };

  const calc = (sum) => {
    const result = {
      noiseDegreeMessage: "",
      noiseEffectMessage: "",
      imgSrcState: -1,
      avg: 0,
    };
    result.avg = Math.floor(sum / 6);

    const val = result.avg - (result.avg % 10) + "";

    for (let i = 0; i < noiseDegree.length; i++) {
      if (noiseDegree[i].dB == val) {
        result.noiseDegreeMessage = noiseDegree[i].MSG;
      }
    }
    for (let i = 0; i < noiseEffect.length; i++) {
      if (noiseEffect[i].dB == val) {
        result.noiseEffectMessage = noiseEffect[i].MSG;
      }
    }

    if (result.avg <= 25) {
      result.imgSrcState = 1;
    } // 보라
    else if (result.avg > 25 && result.avg <= 35) {
      result.imgSrcState = 2;
    } // 파랑
    else if (result.avg > 35 && result.avg <= 45) {
      result.imgSrcState = 3;
    } // 초록
    else if (result.avg > 45 && result.avg <= 55) {
      result.imgSrcState = 4;
    } // 노랑
    else if (result.avg > 55 && result.avg <= 65) {
      result.imgSrcState = 5;
    } // 주황
    else if (result.avg > 65) {
      result.imgSrcState = 6;
    } // 빨강

    return result;
  };

  return (
    <PinSelectLayout>
      <div>
        <div className="section1">
          <div className="Lside">
            <h2>
              <Image
                src={LeftArrow}
                alt="LeftArrow"
                onClick={() => {
                  alert();
                }}
              ></Image>
            </h2>
          </div>
          <div className="Rside">
            <h2>{pinState.name}</h2>
            <h4>
              {pinState.gu} {pinState.dong}
            </h4>
          </div>
        </div>
        <hr></hr>
        <div className="section2">
          <div>
            <h3>어느 정도의 소음인가요?</h3>
          </div>
          <div className="Lside">
            {ImgArr.map((x, i) => {
              if (i + 1 == pinState.imgSrcNum) {
                return (
                  <p>
                    <Image src={x} alt={x}></Image>
                  </p>
                );
              }
            })}
            <div className="average">{pinState.avg}</div>
          </div>
          <div className="Rside">
            <p className="bold"> 소음 정도 </p>
            <p className="gray"> {pinState.noiseDegreeMessage}</p>
            <p className="bold"> 소음 영향 </p>
            <p className="gray"> {pinState.noiseEffectMessage}</p>
          </div>
        </div>

        <hr></hr>
        <div className="section3">
          <h3>시간대별 소음 그래프</h3>
          <div className="graph">
            <G4_PinGraph
              time={pinState.timeDecibels}
              colorIdx={pinState.imgSrcNum}
            />
          </div>
          <div>
            <button
              type="button"
              className="toReview"
              data-toggle="modal"
              data-target=""
            >
              소음 리뷰 쓰러가기
            </button>
          </div>
        </div>
      </div>
    </PinSelectLayout>
  );
};

export default PinSelect;
