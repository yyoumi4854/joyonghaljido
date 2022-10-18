import styled from "styled-components";
import { useState, useEffect } from 'react';

const TripleDotsModalStyle = styled.div`
    position: absolute;
    top: -1px;
    right: 0;
    button{
        ${({ theme }) => theme.common.flexCenter};
        flex-direction: column;
        padding: 8px 12px;
        background-color: ${({ theme }) => theme.colors.grey4};
        border: 1px solid ${({ theme }) => theme.colors.grey3};
        color: ${({ theme }) => theme.colors.grey2};

        :hover{
            color: ${({ theme }) => theme.colors.main};
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