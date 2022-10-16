import Modal_Pw from '../components/review/modal/Modal_Pw'
import Modal_Ask from '../components/review/modal/Modal_Ask'
import Modal_Deny from '../components/review/modal/Modal_Deny'
import styled from 'styled-components'
import {useState, useEffect} from 'react';

const TestPage = () => {

    const [pwWindow, setPwWindow] = useState(false)
    const [askAgainWindow, setAskAgainWindow] = useState(false)
    const [denyWindow, setDenyWindow] = useState(false)
    const [mode, setMode] = useState('default')
    const [timeLeft, setTimeLeft] = useState(0) 
    // ㄴ 임시 값 (글쓰기 관련 상위 컴포넌트에서 받았어야 할 값)
    
    useEffect(()=>{
        const outerModal = document.querySelector('.outerModal')
        if(pwWindow){outerModal.classList.add('dark');}
        else{outerModal.classList.remove('dark')}
    }, [pwWindow])

    useEffect(()=>{
        const outerModal = document.querySelector('.outerModal')
        if(askAgainWindow){outerModal.classList.add('dark')}
        else{outerModal.classList.remove('dark')}
    }, [askAgainWindow])

    useEffect(()=>{
        const outerModal = document.querySelector('.outerModal')
        if(denyWindow){outerModal.classList.add('dark')}
        else{outerModal.classList.remove('dark')}

    }, [denyWindow])

    const outerModalClicked = (e) => {
        // 모달은 아니지만 모달 포함하는 영역 클릭 시 다크모드 해제
        if(e.target.classList[0] == 'outerModal'){
            setPwWindow(false)
            setAskAgainWindow(false)
            setDenyWindow(false)
        }
    }

    return (
    <OuterPageLayout>
        <div className='outerModal' onClick={(e)=>{outerModalClicked(e)}}>
            
            <h1>---</h1>
            <h1>---</h1>
            <h1>---</h1>
            <br></br>
            <p className='pTag'>모달 테스트 페이지</p>
            <hr></hr>

            <p className='pTag'>비밀번호 입력이 필요한 창들</p>
            <button 
            className='modalButton' 
            onClick={()=>{setPwWindow(true); setMode('modify')}}>수정
            </button>

            <button 
            className='modalButton' 
            onClick={()=>{setPwWindow(true); setMode('delete')}}>삭제
            </button>
            
            {pwWindow && <Modal_Pw 
            setPwWindow={setPwWindow} 
            setAskAgainWindow={setAskAgainWindow}
            setMode={setMode}
            mode={mode}
            />}

            {askAgainWindow && <Modal_Ask 
            setAskAgainWindow={setAskAgainWindow}
            />}
            <hr></hr>

            <p className='pTag'>글쓰기 금지</p>
            <button className='modalButton' onClick={()=>{setDenyWindow(true)}}>글쓰기</button>
            {denyWindow && <Modal_Deny setDenyWindow={setDenyWindow} timeLeft={timeLeft}/>}
        </div>
    </OuterPageLayout>
  );
}

const OuterPageLayout = styled.div`
    .pTag{
        font-size:20px;
        line-height:25px;
        padding-left:10px;
    }

    .modalButton {
        border : solid black 1px;
        padding : 5px;
        margin: 10px;
    }

    .dark {
        position: fixed;
        z-index: 1; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%;
        overflow: auto; 
        background-color: rgb(0, 0, 0); 
        background-color: rgba(0, 0, 0, 0.4);
    }
`



export default TestPage;