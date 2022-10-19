import { SmallBtn } from '../../../styles/btnStyles';
import { useState, useEffect } from 'react';

// import ReviewEditForm from '../reviewEditForm';
import axios from 'axios';

// styled
import DarkArea from '../darkAreaStyles';
import ModalContent from './modalStyles';

const Modal_Pw = ({ setModal, reviewObj, openIsEditing}) => {

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
      fail()
    }
  }

  // 빨간색 입력창 (비번 입력 실패)
  const fail = () => {
    const pwInput = document.getElementById('pwInput')
    pwInput.style.border='1px solid #E35753';
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
      <ModalContent onClick={() => { innerScreen++; innerCheck(); }}>
        <h3>비밀번호를 입력해 주세요.</h3>

        <div className='inputBox'>
          <input
            type="password"
            id="pwInput"
            name="name"
            placeholder='글 작성시 사용한 비밀번호'
            onChange={(e) => { setInputValue(e.target.value); onChangeHandler() }} required
          />

          {showWrong && <span className='wrong'>비밀번호가 틀렸습니다</span>}
          {/* {!showWrong && <p className='space'></p>} */}
        </div>
        

        <div className='btns'>
          <SmallBtn onClick={() => { setModal('none'); }}>취소</SmallBtn>
          <SmallBtn
            type='submit'
            check='yes'
            onClick={submitPW}>확인
          </SmallBtn>
        </div>
      </ModalContent>
    </>
  );
}

export default Modal_Pw;