import { SmallBtn } from '../../../styles/btnStyles';
import {useState} from 'react';

import styled from 'styled-components'
import Modal_Ban_Layouot from './Modal_Ban.style';

const Modal_Ban = ({setModal}) => {

    const Guide = styled.div`
        padding-top:30px;
        font-size:14px;
        color:gray;
    `

    return (
        <Modal_Ban_Layouot >
            <div className="modal">
            <h3>작성할 수 없습니다.</h3>
            <Guide>
                다시 작성할 수 있는 시간<br></br>
            </Guide>
            <br></br>
            <SmallBtn type='submit' check='yes' onClick={()=>{setModal('none');}}>확인</SmallBtn>
            </div>
        </Modal_Ban_Layouot>
    );
}

export default Modal_Ban;

// setModal={setModal}