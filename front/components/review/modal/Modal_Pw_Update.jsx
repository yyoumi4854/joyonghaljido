import { SmallBtn } from '../../../styles/btnStyles';
import { useState, useEffect } from 'react';

import ReviewEditForm from '../reviewEditForm';
import Modal_PW_Layout from './Modal_Pw.style';
import DarkArea from './DarkArea.style';
import axios from 'axios';

const Modal_Pw = ({ setModal, modal, reviewObj, openIsEditing }) => {

  const [showWrong, setShowWrong] = useState(false);
  const [inputValue, setInputValue] = useState('');

  let innerScreen = 0
  let outerScreen = 0
  const outerCheck = () => {
    if (innerScreen + outerScreen == 1) setModal('none')
    innerScreen = 0; outerScreen = 0;
  }
  const innerCheck = () => {
    innerScreen = 0; outerScreen = 0;
  }

  // 비밀번호 입력
  const submitPW = async (e) => {
    e.preventDefault();

    const reviewId = reviewObj._id;
    console.log(inputValue);

    try {
      await axios.post(`http://localhost:5001/reviews/${reviewId}`, { password: inputValue+'' })
        .then((res) => {
          if(res.data === true) {
            setModal('none');
            openIsEditing();
          }
        })
    } catch (e) {
      console.log(e);
    }
  }

  // 빨간색 입력창 (비번 입력 실패)
  const fail = () => {
    const pwInput = document.getElementById('pwInput')
    pwInput.style.border = 'solid red 1px';
    setShowWrong(true);
  }
  // 검정색 입력창 (원래대로 복구)
  const onChangeHandler = () => {
    const pwInput = document.getElementById('pwInput')
    pwInput.style.border = 'solid black 1px';
    setShowWrong(false);
  }

  return (
    <>
      <DarkArea onClick={() => { outerScreen++; outerCheck(); }}></DarkArea >
      <Modal_PW_Layout onClick={() => { innerScreen++; innerCheck(); }}>
        <div className="modal">
          <h3>비밀번호를 입력해 주세요.</h3>
          <br></br>
          <input
            type="password"
            id="pwInput"
            name="name"
            placeholder='글 작성에 사용한 비밀번호'
            onChange={(e) => { setInputValue(e.target.value); onChangeHandler() }} required
          />
          {showWrong && <p className='wrong'>비밀번호가 틀렸습니다</p>}
          {!showWrong && <p className='space'></p>}
          <SmallBtn onClick={() => { setModal('none'); }}>취소</SmallBtn>
          <span> &nbsp; &nbsp; </span>
          <SmallBtn
            type='submit'
            check='yes'
            onClick={submitPW}>확인
          </SmallBtn>
        </div>
      </Modal_PW_Layout>
    </>
  );
}

export default Modal_Pw;