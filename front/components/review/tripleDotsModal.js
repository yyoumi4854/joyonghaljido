import styled from "styled-components";
import { useState, useEffect } from 'react';
import Modal_Pw_Del from './modal/Modal_Pw_Del'
import Modal_Pw_Update from './modal/Modal_Pw_Update'
import Modal_Ask from './modal/Modal_Ask'

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

const TripleDotsModal = ({ setModal, modal, reviewObj }) => {

    const [timeLeft, setTimeLeft] = useState(0)
    const putBtnClicked = async () => {
        console.log(reviewObj);
        await setModal("pw_update")
    }
    const delBtnClicked = async () => {
        console.log(reviewObj);
        await setModal("chk")
    }

    return (
        <TripleDotsModalStyle>
            <button className='ud_btn' onClick={() => { putBtnClicked() }}>수정</button>
            <button className='ud_btn' onClick={() => { delBtnClicked() }}>삭제</button>

            {/* 비번확인 + 수정 */}
            {modal == 'pw_update' && <Modal_Pw_Update
                setModal={setModal}
                modal={modal}
                reviewObj={reviewObj}
            />}

            {/* 비번확인 + 삭제 */}
            {modal == 'pw_delete' && <Modal_Pw_Del
                setModal={setModal}
                modal={modal}
                reviewObj={reviewObj}
            />}

            {/* 삭제확인 */}
            {(modal == 'chk') && <Modal_Ask
                setModal={setModal}
                modal={modal}
            />}

        </TripleDotsModalStyle>
    );

}

export default TripleDotsModal;