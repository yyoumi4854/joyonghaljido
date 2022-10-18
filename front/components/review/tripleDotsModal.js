import styled from "styled-components";
import { useState, useEffect } from 'react';

const TripleDotsModalStyle = styled.div`
    position: absolute;
    left:330px;
    border:1px solid aliceblue ;
    background-color:whitesmoke;
    border-radius: 3px;
    button{
        :hover{
            color:green;
        }
    }
    .ud_btn{
        z-index:5;
    }
`;

const TripleDotsModal = ({ setModal,x,setReviewObj}) => {

    const putBtnClicked = () => {
        setModal("pw_update");
        setReviewObj(()=>x);
    }
    const delBtnClicked = () => {
        setModal("chk");
        setReviewObj(()=>x);
    }
    return (
        <TripleDotsModalStyle>
            <button className='ud_btn' onClick={() => { putBtnClicked() }}>수정</button>
            <button className='ud_btn' onClick={() => { delBtnClicked() }}>삭제</button>
        </TripleDotsModalStyle>
    );
}

export default TripleDotsModal;