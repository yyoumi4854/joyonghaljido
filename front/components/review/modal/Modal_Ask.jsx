import React, { useState, useRef, useEffect } from "react";

// styled
import DarkArea from "../darkAreaStyles";
import ModalContent from "./modalStyles";
import { SmallBtn } from '../../../styles/btnStyles';

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
      <ModalContent onClick={()=>{innerScreen++; innerCheck();}}>
          <h3 className="del">정말 삭제하시겠습니까?</h3>
          
          <div className="btns">
            <SmallBtn onClick={()=>{cancelSelect()}}>취소</SmallBtn>
            <SmallBtn type='submit' check='yes' onClick={()=>{deleteReview()}}>확인</SmallBtn>
          </div>
      </ModalContent>
    </>
  );
}

export default Modal_Ask;