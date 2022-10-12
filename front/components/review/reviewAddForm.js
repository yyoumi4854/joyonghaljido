import React, { useState, useEffect} from "react";
import { 
    ColorDiv1,
    ColorDiv2,
    ColorDiv3,
    FloatClear,
    FormContainer,
} from "./reviewAddForm.style.js";

import dummy from '../../dummy/reviews.json';

const ReviewAddForm = () => {

    // review content
    const [gu, setGu] = useState('');
    const [dong, setDong] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [password, setPassword] = useState('');
    const [noiseLevel, setNoiseLevel] = useState('');

    const [review, SetReview] = useState([]);

    // 구
    const handleGuChange = (e) => {
        const guValue = e.target.value;
        setGu(guValue);
    }

    // 동
    const handleDongChange = (e) => {
        const dongValue = e.target.value;
        setDong(dongValue);
    }

    const handleTitleChange = (e) => {setTitle(e.target.value)}
    const handleContentChange = (e) => {setContent(e.target.value)}
    const handlePasswordChange = (e) => {setPassword(e.target.value)}
    const handleNoiseLevelChange = (e) => {setNoiseLevel(e.target.id)}

    const handleAddSubmit = (e) => {
        // DUMMY : 
        e.preventDefault();
        const newReview = {
            gu: guSelect,
            dong: dongSelect,
            title: title,
            content: content,
            password: password,
            noiseLevel: noiseLevel,
        };
        SetReview([...review, newReview]);

        // REAL : 등록 버튼 눌렀을 때 이벤트 (api 연결)
        // POST
        // GET 
    }

    

    return (
        <>
            <FormContainer>
                {/* onSubmit={ handleAddSubmit } */}
                <form onSubmit={ handleAddSubmit }>  
                    <div>
                        <select name="gu" id="" onChange={ handleGuChange }>
                            <option value="">구를 선택해주세요.</option>
                            {
                                dummy.Gu.map(gu => {
                                    return <option key={gu._id} value={gu.value} name={gu.name}>{gu.name}</option>
                                })
                            }
                        </select>
                        <select name="dong" id="" disabled={ !gu } onChange={ handleDongChange }>
                            <option value="">동을 선택해주세요.</option>
                            {
                                dummy.Dong.map(dong => {
                                    if (gu === dong.guName) {
                                        return <option key={dong._id} value={dong.value}>{dong.value}</option>
                                    }
                                })
                            }
                        </select><br></br><br></br>                             
                    </div>
                    <div>
                        <label>소음에 대한 상세 설명을 작성해 주세요</label><br></br>
                        <input
                            type="text"
                            placeholder="제목"
                            name="title"
                            value=''
                            onChange={handleTitleChange}></input>                
                        <input
                            type="text"
                            placeholder="내용"
                            name="description"
                            value=''
                            onChange={ handleContentChange}></input>
                    </div>
                    <br></br>


                    <div>
                        <label>비밀번호를 입력해 주세요.</label><br></br>
                        <input
                            type="text"
                            placeholder="비밀번호"
                            name="password"
                            value=''
                            onChange={ handlePasswordChange }></input>
                    </div>
                    <br></br>

                    <div>
                        <label>내가 느낀 소음은 어느 정도였나요?</label>

                        <div></div>
                        <ColorDiv1 id='1' onClick={handleNoiseLevelChange}></ColorDiv1>
                        <ColorDiv2 id='2' onClick={handleNoiseLevelChange}></ColorDiv2>
                        <ColorDiv3 id='3' onClick={handleNoiseLevelChange}></ColorDiv3>
                        <FloatClear></FloatClear>
                    </div>


                    
                    <div>
                        
                        <input type="button" value="취소"></input>
                        <input type="submit" value="제출"></input>
                    </div>
                </form>
                <button onClick={()=>{alert(noiseLevel)}}>현재값</button>
            </FormContainer>
        </>
    )
}

export default ReviewAddForm;