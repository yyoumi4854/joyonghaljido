import { SmallBtn } from '../../../styles/btnStyles';
import styled from 'styled-components'
// import DarkArea   from './DarkArea.style';
import Modal_Ask_Layout  from './Modal_Ask.style';
import React, { useState, useRef, useEffect } from "react";

const DarkArea  = styled.div`
  position: fixed;
  width: 1000vw;
  height: 1000vh;
  background: rgba(0, 0, 0, 0.1);
  left:-50%;
  top:-50%;
  z-index:5;
`

const Modal_Ask = ({setModal, modal}) => {
  
  const deleteReview = () => {setModal('pw_delete')}
  const cancelSelect = () => {setModal('none');}


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
        <Modal_Ask_Layout onClick={()=>{innerScreen++; innerCheck();}}>
        <div className="modal">
          <h3>정말 삭제하시겠습니까?</h3>
          <br></br>
          <SmallBtn onClick={()=>{cancelSelect()}}>취소</SmallBtn>
          <span> &nbsp; &nbsp; </span>
          <SmallBtn type='submit' check='yes' onClick={()=>{deleteReview()}}>확인</SmallBtn>
        </div>
      </Modal_Ask_Layout>
    </>
  );
}

export default Modal_Ask;