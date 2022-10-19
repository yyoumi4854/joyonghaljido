import { useState, useEffect } from 'react';
import Modal_Pw_Del from './modal/Modal_Pw_Del'
import Modal_Pw_Update from './modal/Modal_Pw_Update'
import Modal_Ban from './modal/Modal_Ban'
import Modal_Ask from './modal/Modal_Ask'

// functions
import getReview from './functions/getReview'
import getReviewNum from './functions/getReviewNum'
import getAvg from './functions/getAvg'
import firstLoad from './functions/firstLoad'
import getReviewByLv from './functions/getReviewByLv'
import whenListChanged from './functions/whenListChanged'
import filterClicked from './functions/filterClicked.js'
import allReviewClicked from './functions/allReviewClicked.js'
import getMorePages from './functions/getMorePages.js'

// import nameId from '../../Id_book/nameId.json'
import axios from 'axios';
import ReviewList from './reviewList';
import ReviewNone from './reviewNone';
import ReviewEditForm from './reviewEditForm';
import ReviewAddForm from './reviewAddForm'

// styled
import Title from '../titleStyles';
import { SmallBtn, ReviewBtn } from '../../styles/btnStyles';

// react-icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";

//map
import seoulMap from '../../data/map/seoul.json';

const Review = ({ currentState, setCurrentState, setModal, modal }) => {
  
  // 값 조정 관련
  const [list, setList] = useState([]);
  const [reviewCnt, setReviewCnt] = useState([0,0,0,0]);  // [all, lv1, lv2, lv3]
  const [reviewObj, setReviewObj] = useState(undefined)
  const [avgIdx, setAvgIdx] = useState(undefined);
  const [more, setMore] = useState(0)
  const [limit, setLimit] = useState(71);
  const [lv, setLv] = useState(-1);
  
  // 토글 관련
  const [isEditing, setIsEditing] = useState(false);
  const [listChanged, setListChanged] = useState(false); // toggle
  const [reviewType, setReviewType] = useState('default'); // or lv
  const [typeChanged, setTypeChanged] = useState(false);
  const [isWriting, setIsWriting] = useState(false)
  const openIsEditing  = () => { setIsEditing(true);}
  const closeIsEditing = () => { setIsEditing(false);}

  // ***** [GET 상황] ***** //
  // 1. 구, 동 클릭 (리뷰 최초 로딩) : 
  //   리뷰수 + 리뷰목록 + 평균 소음 인덱스 구하기
  useEffect(() => {
    setMore(0);
    setReviewType('default');
    firstLoad( 
        currentState, 
        more, setList,
        setReviewCnt, 
        reviewCnt, 
        setAvgIdx,
        )
  }, [currentState.guId, currentState.clickSpotId])
  
  // 2. 타입 변경 시 : 
  useEffect(() => {
    setMore(0)
    if(reviewType=='default'){
        allReviewClicked(
            currentState, 
            more, setList, 
            setReviewCnt, 
            reviewCnt, 
            setAvgIdx)
    }
    if(reviewType=='filter'){
        filterClicked(
            currentState, 
            more, 
            setList, 
            setReviewCnt, 
            reviewCnt, 
            setAvgIdx, 
            lv)
    }
  }, [typeChanged])

  // 3. 더 불러오기(more) or 리뷰 CRD시 (listChanged) : 
  useEffect(() => {
    if(reviewType=='default'){
        allReviewClicked(
            currentState, 
            more, setList, 
            setReviewCnt, 
            reviewCnt, 
            setAvgIdx)
    }
    if(reviewType=='filter'){
        filterClicked(
            currentState, 
            more, 
            setList, 
            setReviewCnt, 
            reviewCnt, 
            setAvgIdx, 
            lv)
    }
  }, [more, listChanged]) // ---- 타입 유지 안되고 터지고 있음





  
  //***** [더보기] *****//
  const toggleEllipsis = (str, limit) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit
    }
  };
  const onClickMore = (str) => () => {
    setLimit(str.length);
  };
  //***** [뒤로가기] *****//
  const back = (currentState, setCurrentState) => {
    if (currentState.currentView === 'gu') {
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
    }
    if (currentState.currentView === 'dong' || currentState.currentView === 'info') {
      const gu = currentState.guName;
      setCurrentState({
        ...currentState,
        currentView: 'gu',
        clickSpotId: '',
        clickedName: gu,
      })
    }
  }

  return (
    <>
      <Title>
        <div className='title'>
          <button className='back' onClick={() => { back(currentState, setCurrentState); }}>
            <AiOutlineArrowLeft />
          </button>
          <h3>{currentState.guName} {currentState.clickSpotId && currentState.clickedName} <span>리뷰</span></h3>
        </div>

        <div>
          <div className='reviewAll'>
            <button>
              <AiFillWechat onClick={()=>{setReviewType('default'); setTypeChanged(prev=>!prev)}}/>
            </button>
            {/* 한번에 모든 게시글을 불러오지 않기 때문에 모든 모든 게시글 개수를 불러오는 api 설정 필요 */}
            <span>{reviewCnt[0]}</span> 
            
          </div>
        </div>
      </Title>
      
      {(reviewCnt[0] == 0)
        ?
        <ReviewNone
          setIsWriting={setIsWriting}
        />
        :
        <ReviewList
          list={list}
          limit={limit}
          toggleEllipsis={toggleEllipsis}
          onClickMore={onClickMore}
          setModal={setModal}
          setReviewObj={setReviewObj}
          setIsWriting={setIsWriting}
          isWriting={isWriting}
          setMore={setMore}
          currentState={currentState}
          more={more}
          setList={setList}
          reviewType={reviewType}
          setReviewType={setReviewType}
          reviewCnt={reviewCnt}
          avgIdx={avgIdx}
          typeChanged={typeChanged}
          setTypeChanged={setTypeChanged}
          lv={lv}
          setLv={setLv}
        />
      }
      <ReviewBtn>
        <button onClick={()=>{setIsWriting(true)}}>소음 리뷰 쓰러가기</button>
      </ReviewBtn>

      {/* 작성불가 안내 */}
      {(modal == 'ban') && <Modal_Ban
        setModal={setModal}
      />}

      {/* 삭제 확인 */}
      {(modal == 'chk') && <Modal_Ask
        setModal={setModal}
      />}

      {/* 비번확인 AND 삭제 */}
      {modal == 'pw_delete' && <Modal_Pw_Del
        setModal={setModal}
        reviewObj={reviewObj}
        setListChanged={setListChanged}
      />}

      {/* 비번확인 FOR 수정 */}
      {modal == 'pw_update' && <Modal_Pw_Update
        setModal={setModal}
        reviewObj={reviewObj}
        openIsEditing={openIsEditing}
      />}

      {/* 수정 폼 */}
      {isEditing && <ReviewEditForm
        currentReview={reviewObj}
        closeIsEditing={closeIsEditing}
        setListChanged={setListChanged}
      />}

      {/* 입력 폼 */}
      {isWriting && <ReviewAddForm
        setIsWriting={setIsWriting}
        setListChanged={setListChanged}
        currentState={currentState}
        setModal={setModal}
      />}
    </>
  );
}
export default Review;