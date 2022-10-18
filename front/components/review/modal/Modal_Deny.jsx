import { SmallBtn } from '../../../styles/btnStyles';
import {useState} from 'react';

// import styled from 'styled-components'
// import Modal_Deny_Layouot from './Modal_Deny.style';

// styled
// import DarkArea from '../darkAreaStyles';
import ModalContent from './modalStyles';

const Modal_Deny = ({setDenyWindow, timeLeft}) => {
    return (
        <ModalContent>
            <h3>작성할 수 없습니다.</h3>
            <p className='timeText'>
                다시 작성할 수 있는 시간<br />
                {timeLeft}
            </p>
            <div className='btns'>
                <SmallBtn type='submit' check='yes' onClick={()=>{setDenyWindow(false);}}>확인</SmallBtn>
            </div>
        </ModalContent>
    );
}

export default Modal_Deny;