import { SmallBtn } from '../../../styles/btnStyles';
import {useState} from 'react';

import styled from 'styled-components'
import ModalContent from './modalStyles/modalStyles';
import DarkArea from './modalStyles/outerModalStyle1';

const Modal_Ban = ({setModal}) => {

  let innerScreen = 0
  let outerScreen = 0
  const outerCheck = () => {
    if(innerScreen + outerScreen == 1) setModal('none')
    innerScreen = 0; outerScreen = 0;
  }
  const innerCheck = () => {
    innerScreen = 0; outerScreen = 0;
  }

  return (
    <>
      <DarkArea onClick={()=>{outerScreen++; outerCheck();}}></DarkArea >
      <ModalContent onClick={()=>{innerScreen++; innerCheck();}}>
      <h3>작성할 수 없습니다.</h3>
      <br></br>
      <br></br>
      <p className='timeText'>
          20초마다 리뷰를 작성할 수 있습니다.<br />
      </p>
      <div className='btns'>
      <SmallBtn type='submit' check='yes' onClick={()=>{setModal('none');}}>확인</SmallBtn>
      </div>
      </ModalContent>
    </>
  );
}

export default Modal_Ban;

