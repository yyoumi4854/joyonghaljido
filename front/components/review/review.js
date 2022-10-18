import React from 'react';
import { useState, useEffect } from 'react';
import Modal_Pw_Del from './modal/Modal_Pw_Del'
import Modal_Pw_Update from './modal/Modal_Pw_Update'
import Modal_Ask from './modal/Modal_Ask'
import styled from "styled-components";

// import nameId from '../../Id_book/nameId.json'

import axios from 'axios';
import * as Api from '../../api'; // API 활용하세용

import ReviewList from './reviewList';
import ReviewNone from './reviewNone';
import ReviewEditForm from './reviewEditForm';

// styled
import Title from '../titleStyles';

// react-icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";


const ReviewTest = ({ currentState, setModal, modal }) => {

  const [list, setList] = useState([]);
  const [reviewObj, setReviewObj] = useState(undefined)
  const [isEditing, setIsEditing] = useState(false);

  const openIsEditing = () => {
    setIsEditing(true);
  }

  const closeIsEditing = () => {
    setIsEditing(false);
  }

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
    , [list]);


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
        reviewObj={reviewObj}
        setReviewObj={setReviewObj}
      />
      {/* <ReviewNone/> */}
      
        {/* 삭제확인 */}
        {(modal == 'chk') && <Modal_Ask
            setModal={setModal}
            modal={modal}
        />}

        {/* 비번확인 + 삭제 */}
        {modal == 'pw_delete' && <Modal_Pw_Del
            setModal={setModal}
            modal={modal}
            reviewObj={reviewObj}
        />}

        {/* 비번확인 + 수정 */}
            {modal == 'pw_update' && <Modal_Pw_Update
            setModal={setModal}
            modal={modal}
            reviewObj={reviewObj}
            openIsEditing={openIsEditing}
        />}

        {isEditing === true && <ReviewEditForm currentReview={reviewObj} closeIsEditing={closeIsEditing}></ReviewEditForm>}
    </>
  );
}
export default ReviewTest;
// modal