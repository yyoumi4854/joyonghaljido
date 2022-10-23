import { useState, useEffect } from 'react';
import Modal_Pw_Del from './modals/Modal_Pw_Del'
import Modal_Pw_Update from './modals/Modal_Pw_Update'
import Modal_Ban from './modals/Modal_Ban'
import Modal_Ask from './modals/Modal_Ask'

import Load_Filtered from './functions/Load_Filtered.js'
import Load_AllReview from './functions/Load_AllReview.js'
import Load_Dong from './functions/Load_BasicDong.js'
import Load_Gu from './functions/Load_BasicGu'

// import nameId from '../../Id_book/nameId.json'
import axios from 'axios';
import ReviewList from './reviewList/reviewList';
import ReviewNone from './reviewNone/reviewNone';
import ReviewEditForm from './modals/reviewEditForm';
import ReviewAddForm from './modals/reviewAddForm'

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
  const [editDongInfo, setEditDongInfo] = useState(undefined);
  const [lv, setLv] = useState(-1);
  
  // 토글 관련
  const [isEditing, setIsEditing] = useState(false);
  const [dongList, setDongList] = useState([]);
  const [reviewType, setReviewType] = useState('default'); // or lv
  const [basic, setBasic] = useState(true);
  const [isWriting, setIsWriting] = useState(false)
  const [dongListChanged, setDongListChanged] = useState(false)

  const openIsEditing  = () => { setIsEditing(true);}
  const closeIsEditing = () => { setIsEditing(false);}

    // ***** [GET] ***** //
    // 0. 구에 따른 동 목록 받기
    const getDongsByGuId = async () => {
        alert(`${process.env.SERVER_URL}`)
        
        try{
            await axios.get(`http://localhost:5001/location/gus/${currentState.guId}/dongs`)
            
            .then((res) => {
                setDongList(res.data.dongs);
                setDongListChanged(true)
            });
        }
        catch{
            console.log('get Review 실패')
        }
    }
    
    // 1. 기본 : 리뷰수 + 리뷰목록 + 평균 소음 인덱스 구하기
    useEffect(() => {
        getDongsByGuId()
        setMore(prev=>0);
        if(basic == true){
            // 1-1. 구 리뷰 [개수,평균,목록] 구함
            if(currentState.currentView == 'gu'){
                Load_Gu( 
                    currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx,
                )
            }
            // 1-2. 동 리뷰 [개수,평균,목록] 구함
            if(currentState.currentView == 'dong'){
                Load_Dong(
                    currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx
                ) 
            }
            setBasic(false)
        }
    }, [currentState.currentView, 
        currentState.guId, 
        currentState.clickSpotId])


    useEffect(() => {
        getDongsByGuId()
        if(basic == false){
            // 필터된 구동 리뷰 정보 구함
            if(reviewType == 'filter' ){
                Load_Filtered(currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx, lv)
            }
            // more 반영한 반영 GET 실행 (디폴트 함수 실행)
            if(reviewType == 'default'){
                Load_AllReview(currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx)
            }
        }
    }, [reviewType, basic, more, currentState.clickSpotId])
    

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
              <AiFillWechat onClick={()=>{
                setReviewType('default')
                setMore(0)
                Load_AllReview(currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx)
              }}/>
            </button>
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
          setModal={setModal}
          setReviewObj={setReviewObj}
          setMore={setMore}
          currentState={currentState}
          more={more}
          setList={setList}
          reviewType={reviewType}
          setReviewType={setReviewType}
          reviewCnt={reviewCnt}
          avgIdx={avgIdx}
          setLv={setLv}
          dongList={dongList}
          dongListChanged={dongListChanged}
          setReviewCnt={setReviewCnt} setAvgIdx={setAvgIdx} setBasic={setBasic} 
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
        reviewType={reviewType}
        currentState={currentState}
        more={more}
        setList={setList}
        setReviewCnt={setReviewCnt}
        reviewCnt={reviewCnt}
        setAvgIdx={setAvgIdx}
        lv={lv}
      />}

      {/* 비번확인 FOR 수정 */}
      {modal == 'pw_update' && <Modal_Pw_Update
        setModal={setModal}
        reviewObj={reviewObj}
        openIsEditing={openIsEditing}
        setEditDongInfo={setEditDongInfo}
      />}

      {/* 수정 폼 */}
      {isEditing && <ReviewEditForm
        currentReview={reviewObj}
        closeIsEditing={closeIsEditing}
        editDongInfo={editDongInfo}
        reviewType={reviewType}
        currentState={currentState}
        more={more}
        setList={setList}
        setReviewCnt={setReviewCnt}
        reviewCnt={reviewCnt}
        setAvgIdx={setAvgIdx}
        lv={lv}
      />}

      {/* 입력 폼 */}
      {isWriting && <ReviewAddForm
        setIsWriting={setIsWriting}
        currentState={currentState}
        setModal={setModal}
        reviewType={reviewType}
        more={more}
        setList={setList}
        setReviewCnt={setReviewCnt}
        reviewCnt={reviewCnt}
        setAvgIdx={setAvgIdx}
        lv={lv}
      />}
    </>
  );
}
export default Review;