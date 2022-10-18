import { useState, useEffect } from 'react';
import Modal_Pw_Del from './modal/Modal_Pw_Del'
import Modal_Pw_Update from './modal/Modal_Pw_Update'
import Modal_Ban from './modal/Modal_Ban'
import Modal_Ask from './modal/Modal_Ask'

// import nameId from '../../Id_book/nameId.json'
import axios from 'axios';

import ReviewList from './reviewList';
import ReviewNone from './reviewNone';
import ReviewEditForm from './reviewEditForm';
import ReviewAddForm from './reviewAddForm'

// styled
import Title from '../titleStyles';

// react-icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";

const Review = ({ currentState, setModal, modal }) => {

  const [list, setList] = useState([]);
  const [limit, setLimit] = useState(71);
  const [reviewObj, setReviewObj] = useState(undefined)
  const [isEditing, setIsEditing] = useState(false);

  const [listChanged, setListChanged] = useState(false);
  const [trueValue, setTrueValue] = useState(true);

  const [isWriting, setIsWriting] = useState(false)
  const [more, setMore] = useState(0)

  const openIsEditing = () => { setIsEditing(true); }
  const closeIsEditing = () => { setIsEditing(false); }

  useEffect(() => {
    setMore(0)
  }, [currentState.guId, currentState.dongId])

  useEffect(() => {
    getReview();
  }, [more, listChanged, currentState.guId, currentState.dongId])

  const getReview = async () => {
    console.log(currentState);
    // 구 리뷰
    if (currentState.currentView === 'gu') {
      try {
        // 첫 10개
        await axios.get(`http://localhost:5001/reviews?guId=${currentState.guId}`)
          .then(v => (setList(v.data)));
        // 이후
        for (let i = 1; i <= more; i++) {
          await axios.get(`http://localhost:5001/reviews?guId=${currentState.guId}&skip=${i}`)
            .then(v => (setList((prev) => {
              return [...prev, ...v.data]
            })));
        }
      }
      catch { console.log('구 리뷰 로딩 실패!'); }
    }
    // 동 리뷰
    else if (currentState.currentView === 'dong') {
      try {
        // 첫 10개
        await axios.get(`http://localhost:5001/reviews?dongId=${currentState.clickSpotId}`)
          .then(v => (setList(v.data)));
        // 이후
        for (let i = 1; i <= more; i++) {
          await axios.get(`http://localhost:5001/reviews?dongId=${currentState.clickSpotId}&skip=${i}`)
            .then(v => (setList((prev) => {
              return [...prev, ...v.data]
            })));
        }
      }
      catch { console.log('동 리뷰 로딩 실패!'); }
    }
  }

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
            {/* 한번에 모든 게시글을 불러오지 않기 때문에 모든 모든 게시글 개수를 불러오는 api 설정 필요 */}
            <span>{list && list.length}</span>
          </div>
        </div>
      </Title>

      {(trueValue && (list.length == 0))
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
        />
      }

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
      />}
    </>
  );
}
export default Review;
// modal