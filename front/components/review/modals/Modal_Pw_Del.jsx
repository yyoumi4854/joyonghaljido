import { SmallBtn } from '../../../styles/btnStyles';
import { useState, useRef, useEffect } from "react";

import Load_Filtered from '../functions/Load_Filtered.js'
import Load_AllReview from '../functions/Load_AllReview.js'

import axios from 'axios';

// styled
import OuterModal from './modalStyles/outerModalStyle1';
import ModalContent from './modalStyles/modalStyles';

const Modal_Pw = ({setModal, reviewObj, reviewType, currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx, lv}) => {

  const [showWrong, setShowWrong] = useState(false)
  const [PW, setPW] = useState('')

  let innerScreen = 0
  let outerScreen = 0
  const outerCheck = () => {
    if(innerScreen + outerScreen == 1) setModal('none')
    innerScreen = 0; outerScreen = 0;
  }
  const innerCheck = () => {
    innerScreen = 0; outerScreen = 0;
  }

  async function del(endpoint, params = "") {
    return axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}${endpoint}/${params}`,  
      { data: { currentPassword: PW+'' } }, 
    );
  }
  
  
  


  const deleteReview = async() => {
    const reviewId = reviewObj._id;
    console.log(reviewId)
    
    try{ // DEL
      await del('/reviews', reviewId)
      console.log('삭제 성공')
      setModal('none')
      
      try{ // GET
        if(reviewType=='default'){
          Load_AllReview(
          currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx)
        }
        if(reviewType=='filter'){
          Load_Filtered(
          currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx, lv)
        }
      }
      catch{
        console.log('수정 이후 get 오류')
      }
    }
    catch{
      fail();
      console.log('삭제 실패')
    }
  }

  // 비밀번호 입력
  const submitPW = async () => {
    await deleteReview()
  }

  // 빨간색 입력창 (비번 입력 실패)
  const fail = () => {
    const pwInput = document.getElementById('pwInput')
    pwInput.style.border='1px solid #E35753';
    setShowWrong(true);
  }
  // 검정색 입력창 (새 기회 부여)
  const onChangeHandler = () => {
    const pwInput = document.getElementById('pwInput')
    pwInput.style.border='solid black 1px';
    setShowWrong(false);
  }
  
  return (
    <>
      <OuterModal onClick={()=>{outerScreen++; outerCheck();}}></OuterModal >
        <ModalContent onClick={()=>{innerScreen++; innerCheck();}}>
          <h3>비밀번호를 입력해 주세요.</h3>

          <div className='inputBox'>
            <input
              type="password" 
              id="pwInput" 
              name="name" 
              placeholder='글 작성시 사용한 비밀번호' 
              onChange={(e)=>{setPW(e.target.value); onChangeHandler()}} required
            />
            { showWrong && <p className='wrong'>비밀번호가 틀렸습니다</p>}
            {/* {!showWrong && <p className='space'></p>} */}
          </div>

          <div className='btns'>
            <SmallBtn onClick={()=>{setModal('none');}}>취소</SmallBtn>
            <SmallBtn 
              type='submit' 
              check='yes' 
              onClick={()=>{ submitPW();}}>확인
            </SmallBtn>
          </div>
      </ModalContent>
    </>
  );
}

export default Modal_Pw;