import { SmallBtn } from '../../styles/btnStyles';
import {useState} from 'react';

import styled from 'styled-components'
import Modal_Deny_Layouot from './Modal_Deny.style';

const Modal_Deny = ({setDenyWindow, timeLeft}) => {

    const Guide = styled.div`
        padding-top:30px;
        font-size:14px;
        color:gray;
    `

    return (
        <Modal_Deny_Layouot >
            <div className="modal">
            <h3>작성할 수 없습니다.</h3>
            <Guide>
                다시 작성할 수 있는 시간<br></br>
                {timeLeft}
            </Guide>
            <br></br>
            <SmallBtn type='submit' check='yes' onClick={()=>{setDenyWindow(false);}}>확인</SmallBtn>
            </div>
        </Modal_Deny_Layouot>
    );
}

export default Modal_Deny;

