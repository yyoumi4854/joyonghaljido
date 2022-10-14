import React from 'react';
import { useState, useEffect } from 'react';

// import nameId from '../../Id_book/nameId.json'

import axios from 'axios';
import * as Api from '../../api'; // API 활용하세용

import ReviewList from './reviewList';
import ReviewNone from './reviewNone';

// styled
import Title from '../titleStyles';

// react-icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";


const ReviewTest = ({ currentState, setModal, modal }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    //구 리뷰 출력
    if (currentState.currentView === 'gu') {
      try {
        axios.get(`http://localhost:5001/reviews?guId=${currentState.guId}`)
          .then(v => (setList(v.data)));
      }
      catch {
        console.log('구 리뷰 불러오기 실패!');
      }
    }
    //동 리뷰 출력
    else if (currentState.currentView === 'dong') {
      try {
        axios.get(`http://localhost:5001/reviews?dongId=${currentState.dongId}`)
          .then(v => (setList(v.data)));
      }
      catch {
        console.log('동 리뷰 불러오기 실패!');
      }
    }
  }
    , []);


  useEffect(() => {
    // console.log(list);
  }, [list])

  const [limit, setLimit] = useState(71);
  const toggleEllipsis = (str, limit) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit
    }
  };

  const onClickMore = (str) => () => {
    setLimit(str.length);
  };

  return (
    <>
      <Title>
        <div className='title'>
          <button className='back'>
            <AiOutlineArrowLeft />
          </button>
          <h3>{currentState.guName} {currentState.clickSpotId && currentState.clickedName} <span>리뷰</span></h3>
        </div>

        <div>
          <div className='reviewAll'>
            <button>
              <AiFillWechat />
            </button>
            {/* 한번에 모든 게시글을 불러오지 않기때문에 모든 모든 게시글 개수를 불러오는 api 설정 필요 */}
            <span>{list && list.length}</span>
          </div>
        </div>
      </Title>

      <ReviewList
        list={list}
        limit={limit}
        toggleEllipsis={toggleEllipsis}
        onClickMore={onClickMore}
        setModal={setModal}
        modal={modal}
      />
      {/* <ReviewNone/> */}
    </>
  );
}
export default ReviewTest;
// modal