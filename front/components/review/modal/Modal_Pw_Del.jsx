import { SmallBtn } from "../../../styles/btnStyles";
import { useState, useRef, useEffect } from "react";

import filterClicked from "../functions/filtering.js";
import allReviewClicked from "../functions/allReviewClicked.js";

import axios from "axios";

// styled
import DarkArea from "../darkAreaStyles";
import ModalContent from "./modalStyles";

const Modal_Pw = ({
  setModal,
  reviewObj,
  reviewType,
  currentState,
  more,
  setList,
  setReviewCnt,
  reviewCnt,
  setAvgIdx,
  lv,
}) => {
  const serverUrl = "http://kdt-ai5-team04.elicecoding.com:5001";
  const [showWrong, setShowWrong] = useState(false);
  const [inputValue, setInputValue] = useState("");

  let innerScreen = 0;
  let outerScreen = 0;
  const outerCheck = () => {
    if (innerScreen + outerScreen == 1) setModal("none");
    innerScreen = 0;
    outerScreen = 0;
  };
  const innerCheck = () => {
    innerScreen = 0;
    outerScreen = 0;
  };

  async function del(endpoint, params = "") {
    return axios.delete(`${serverUrl}${endpoint}/${params}`, {
      data: { currentPassword: inputValue + "" },
    });
  }

  const deleteReview = async () => {
    const reviewId = reviewObj._id;

    try {
      // DEL
      await del("/reviews", reviewId);
      setModal("none");

      try {
        // GET
        if (reviewType == "default") {
          allReviewClicked(
            currentState,
            more,
            setList,
            setReviewCnt,
            reviewCnt,
            setAvgIdx
          );
        }
        if (reviewType == "filter") {
          filterClicked(
            currentState,
            more,
            setList,
            setReviewCnt,
            reviewCnt,
            setAvgIdx,
            lv
          );
        }
      } catch {
        console.log("수정 이후 get 오류");
      }
    } catch {
      fail();
      console.log("삭제 실패");
    }
  };

  // 비밀번호 입력
  const submitPW = async () => {
    await deleteReview();
  };

  // 빨간색 입력창 (비번 입력 실패)
  const fail = () => {
    const pwInput = document.getElementById("pwInput");
    pwInput.style.border = "1px solid #E35753";
    setShowWrong(true);
  };
  // 검정색 입력창 (새 기회 부여)
  const onChangeHandler = () => {
    const pwInput = document.getElementById("pwInput");
    pwInput.style.border = "solid black 1px";
    setShowWrong(false);
  };

  return (
    <>
      <DarkArea
        onClick={() => {
          outerScreen++;
          outerCheck();
        }}
      ></DarkArea>
      <ModalContent
        onClick={() => {
          innerScreen++;
          innerCheck();
        }}
      >
        <h3>비밀번호를 입력해 주세요.</h3>

        <div className="inputBox">
          <input
            type="password"
            id="pwInput"
            name="name"
            placeholder="글 작성시 사용한 비밀번호"
            onChange={(e) => {
              setInputValue(e.target.value);
              onChangeHandler();
            }}
            required
          />
          {showWrong && <p className="wrong">비밀번호가 틀렸습니다</p>}
          {/* {!showWrong && <p className='space'></p>} */}
        </div>

        <div className="btns">
          <SmallBtn
            onClick={() => {
              setModal("none");
            }}
          >
            취소
          </SmallBtn>
          <SmallBtn
            type="submit"
            check="yes"
            onClick={() => {
              submitPW();
            }}
          >
            확인
          </SmallBtn>
        </div>
      </ModalContent>
    </>
  );
};

export default Modal_Pw;
