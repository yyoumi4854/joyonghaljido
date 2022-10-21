import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import filterClicked from './functions/filtering.js'
import allReviewClicked from './functions/allReviewClicked.js'

// styled
import FormContent from "./reviewAddForm.style";
import DarkArea from "./darkAreaStyles";
import { SmallBtn } from '../../styles/btnStyles';

const ReviewAddForm = ({ setIsWriting, setModal, reviewType, currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx, lv}) => {
  
  const [noiseLevel, setNoiseLevel] = useState('');
  const [guList, setGuList] = useState([]);
  const [dongList, setDongList] = useState([]);
  const [defaultGu, setDefualtGu] = useState(true);
  const [review, setReview] = useState({
    guId: currentState.guId,
    dongId: "",
    title: "",
    description: "",
    password: "",
    noiseLevel: "",
  });

  // 구 리스트 불러오기
  useEffect(() => {
    axios.get("http://localhost:5001/location/gus")
        .then((res) => {
          setGuList(res.data);
        })
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:5001/location/gus/${currentState.guId}/dongs`)
      .then((res) => {
        setDongList(res.data.dongs);
      })
  }, []);

  // 구 선택했을 때 속한 동 리스트 찾기
  const handleGuChange = async (e) => {
      const selectedGuId = e.target.value;
      if(currentState.guId == selectedGuId){
        setDefualtGu(true);
      }else{
        setDefualtGu(false);
      }
      await axios.get(`http://localhost:5001/location/gus/${selectedGuId}/dongs`)
      .then((res) => {
        setDongList(res.data.dongs);
      });
  }
  // 노이즈레벨 입력 시점
  const handleNoiseLevelClick = (e) => {
    setNoiseLevel(e.target.value);
    axios.get(`http://localhost:5001/location/gus/${currentState.guId}/dongs`)
      .then((res) => {
        setDongList(res.data.dongs);
      })
  };

  // 입력폼 변동
  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
 
  // 제출 시점   
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    if(review.guId == '' 
    || review.dongId == ''
    || review.title == ''
    || review.description == ''
    || review.password == ''
    || review.noiseLevel == ''
    ){
        alert('모든 항목을 채워 주세요')
        return
    }

    // API 요청
    try {
      console.log('review', review)
      await axios.post("http://localhost:5001/reviews", review);

      try{    
        // 다시 GET 하기
        if(reviewType=='default'){
            allReviewClicked(
                currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx)
            }
        else if(reviewType=='filter'){
            filterClicked(
                currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx, lv)
            }
        }
        catch{
            console.log('값 생성은 했는데 get 실패!')
        }

      setIsWriting(false);
    } catch (e) {
      setIsWriting(false);
      setModal('ban') // 작성금지 모달
      console.log("POST 요청이 실패했습니다.", e);
      console.log('보낸 값', review)
    }
  }

  const handleDongValue = (e) => {
    setReview((prev)=>({
        ...prev,
        dongId:e.target.value
    }))
  }

  const modalRef = useRef();
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsWriting(false);
    }
  };

  return (
    <>
      <DarkArea></DarkArea>
      <FormContent ref={modalRef} onChange={handleReviewChange}>
        <div className="formCon">
          <form onSubmit={handleAddSubmit}>
            <h3>소음 리뷰 <span>작성하기</span></h3>
            <div className="content">
              <p className="title">지역을 선택해주세요.</p>
              <div className="selectBox">
                <select name="guId" onChange={handleGuChange}>
                  <option key={currentState.guId} value={currentState.guId}>{currentState.guName}</option>
                  {
                    guList.map(gu => {
                      if (gu.name !== currentState.guName) {
                        return <option key={gu._id} value={gu._id}>{gu.name}</option>
                      }
                    })
                  }
                </select>
                <select name="dongId" id="" onClick={(e)=>{handleDongValue(e);}}>
                {/* <select name="dongId" id=""> */}
                  <option value="">동을 선택해주세요.</option>
                  
                  {defaultGu && 
                    dongList.map(dong => {
                      return <option key={dong._id} value={dong._id}>{dong.name}</option>
                    })
                  }
                  {!defaultGu &&
                    dongList.map(dong => {
                      return <option key={dong._id} value={dong._id}>{dong.name}</option>
                    })
                  }
                </select>
              </div>
            </div>

            <div className="content">
              <p className="title">소음에 대한 상세 설명을 작성해주세요.</p>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="제목을 입력해 주세요."
                  name="title"
                  value={review.title}
                />

                <textarea
                  name="description"
                  value={review.description}
                  placeholder="내용을 입력해주세요."
                ></textarea>
              </div>
            </div>

            <div className="content">
              <p className="title">비밀번호를 입력해 주세요.</p>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                name="password"
                value={review.password}
              />
            </div>

            <div className="content">
              <p className="title">내가 느낀 소음은 어느 정도였나요?</p>

              <ul className="radioBox">
                <li className="good">
                  <input id="good" type="radio" name="noiseLevel" value='3' checked={noiseLevel === "3"} onClick={handleNoiseLevelClick} />
                  <label for="good">좋음</label>
                  <p>좋음</p>
                </li>
                <li className="soso">
                  <input id="soso" type="radio" name="noiseLevel" value='2' checked={noiseLevel === "2"} onClick={handleNoiseLevelClick} />
                  <label for='soso'>보통</label>
                  <p>보통</p>
                </li>
                <li className="bad">
                  <input id="bad" type="radio" name="noiseLevel" value='1' checked={noiseLevel === "1"} onClick={handleNoiseLevelClick} />
                  <label for='bad'>나쁨</label>
                  <p>나쁨</p>
                </li>
              </ul>
            </div>

            <div className="btnBox content">
              <SmallBtn onClick={() => { setIsWriting(false) }}>취소</SmallBtn>
              <SmallBtn type="submit" check='yes'>확인</SmallBtn>
            </div>
          </form>
        </div>
      </FormContent>
    </>
  )
};

export default ReviewAddForm;


