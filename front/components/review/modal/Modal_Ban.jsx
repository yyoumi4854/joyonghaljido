import { SmallBtn } from '../../../styles/btnStyles';
import {useState} from 'react';

import styled from 'styled-components'
import Modal_Ban_Layouot from './Modal_Ban.style';
import ModalContent from './modalStyles';

const Modal_Ban = ({setDenyWindow, timeLeft}) => {

    // const Guide = styled.div`
    //     padding-top:30px;
    //     font-size:14px;
    //     color:gray;
    // `

    return (
      <ModalContent>
      <h3>작성할 수 없습니다.</h3>
      <p className='timeText'>
          다시 작성할 수 있는 시간<br />
          {timeLeft}
      </p>
      <div className='btns'>
      <SmallBtn type='submit' check='yes' onClick={()=>{setModal('none');}}>확인</SmallBtn>
      </div>
  </ModalContent>
    );
}

export default Modal_Ban;

