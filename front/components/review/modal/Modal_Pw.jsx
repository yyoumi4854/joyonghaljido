import { SmallBtn } from '../../../styles/btnStyles';
import { useState } from 'react';

import Modal_PW_Layout   from './Modal_Pw.style';

const Modal_Pw = ({setPwWindow, setAskAgainWindow, setMode, mode}) => {

  const [showWrong, setShowWrong] = useState(false)
  const [inputValue, setInputValue] = useState('')
  
  const confirmClicked = () => {
    // 비밀번호 확인 코드 (API) ...







    // 비밀번호 입력 실패 (아래는 임시)
    const pwInput = document.getElementById('pwInput')
    if(inputValue.length<5){ 
      setShowWrong(true);
      pwInput.style.border='solid red 1px';
    }
    // 비밀번호 입력 성공
    else{ 
      setShowWrong(false)
      pwInput.style.border='solid black 1px';
      if(mode == 'modify'){
        // 리뷰 수정 코드 (API) ...
        






      }

      if(mode == 'delete'){
        setAskAgainWindow(true) 
      }
      setMode('default')
      setPwWindow(false);
    }
  }

  const onChangeHandler = () => {
    const pwInput = document.getElementById('pwInput')
    pwInput.style.border='solid black 1px';
    setShowWrong(false);
  }
  
  return (
    <Modal_PW_Layout >
      <div className="modal">
        <h3>비밀번호를 입력해 주세요.</h3>
        <br></br>
        <input 
          type="password" 
          id="pwInput" 
          name="name" 
          placeholder='글 작성에 사용한 비밀번호' 
          onChange={(e)=>{setInputValue(e.target.value); onChangeHandler()}} required
        />
        { showWrong && <p className='wrong'>비밀번호가 틀렸습니다</p>}
        {!showWrong && <p className='space'></p>}
        <SmallBtn onClick={()=>{setPwWindow(false);}}>취소</SmallBtn>
        <span> &nbsp; &nbsp; </span>
        <SmallBtn 
          type='submit' 
          check='yes' 
          onClick={()=>{confirmClicked();}}>확인
        </SmallBtn>
      </div>
    </Modal_PW_Layout>
  );
}

export default Modal_Pw;