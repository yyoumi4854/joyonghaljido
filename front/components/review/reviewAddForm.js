import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { 
    ColorDiv1,
    ColorDiv2,
    ColorDiv3,
    FloatClear,
    FormContainer,
} from "./reviewAddForm.style.js";
import geoId from '../../../data/geoid.json';

const ReviewAddForm = ({ setIsWriting, handler }) => {
    // review content
    // const [guId, setGuId] = useState('');
    // const [dongId, setDongId] = useState('');
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [password, setPassword] = useState('');
    const [noiseLevel, setNoiseLevel] = useState('');

    const [dongList, setDongList] = useState([]);

    const [review, setReview] = useState({
        guId: "",
        dongId: "",
        title: "",
        description: "",
        password: "",
        noiseLevel: "",
    });

    // 구 선택했을 때 속한 동 리스트 찾기
    const handleGuChange = async (e) => {
        const selectedGuId = e.target.value;

        const dongList = geoId.filter(element => element._id === selectedGuId);
        setDongList(dongList[0].dongs);
    }

    // const handleTitleChange = (e) => {setTitle(e.target.value)};
    // const handleDescriptionChange = (e) => {setDescription(e.target.value)};
    // const handlePasswordChange = (e) => {setPassword(e.target.value)};
    const handleNoiseLevelClick = (e) => {
        setNoiseLevel(e.target.value);
    };

    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setReview((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleAddSubmit = async (e) => {
        e.preventDefault();

        // 등록 버튼 눌렀을 때 이벤트 (api 연결)
        // POST & GET
        try {
            await axios.post("http://localhost:5001/reviews", review);
            setIsWriting(false);
        } catch (e) {
            console.log("POST 요청이 실패했습니다.", e);
        }
    }

    const modalRef = useRef();

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    });

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsWriting(false);
        }
    };

    return (
        <div ref={modalRef} onChange={ handleReviewChange }>
            <FormContainer>
                <form onSubmit={ handleAddSubmit }>  
                    <div>
                        <select name="guId" id="" onChange={ handleGuChange }>
                            {/* <option value="">구를 선택해주세요.</option> */}
                            {
                                geoId.map(gu => {
                                    return <option key={gu._id} value={gu._id}>{gu.name}</option>
                                })
                            }
                        </select>
                        <select name="dongId" id="" disabled={ !guId }>
                            {/* <option value="">동을 선택해주세요.</option> */}
                            {
                                dongList.map(dong => {
                                    return <option key={dong._id} value={dong._id}>{dong.name}</option>
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
                            value={ review.title }></input>                
                        <input
                            type="text"
                            placeholder="내용"
                            name="description"
                            value={ review.description }></input>
                    </div>
                    <br></br>


                    <div>
                        <label>비밀번호를 입력해 주세요.</label><br></br>
                        <input
                            type="text"
                            placeholder="비밀번호"
                            name="password"
                            value={ review.password }></input>
                    </div>
                    <br></br>

                    <div>
                        <label>내가 느낀 소음은 어느 정도였나요?</label>

                        <div>
                            <ColorDiv1></ColorDiv1>
                            <label>시끄러워요</label>
                            <input type="radio" value="1" name="noiseLevel" checked={ noiseLevel === "1" } onClick={ handleNoiseLevelClick }></input>    
                        </div>
                        <div>
                            <ColorDiv2></ColorDiv2>
                            <label>그저 그래요</label>
                            <input type="radio" value="2" name="noiseLevel" checked={ noiseLevel === "2" } onClick={ handleNoiseLevelClick }></input>
                        </div>
                        <div>
                            <ColorDiv3></ColorDiv3>
                            <label>조용해요</label>
                            <input type="radio" value="3" name="noiseLevel" checked={ noiseLevel === "3" } onClick={ handleNoiseLevelClick }></input>
                        </div>

                        <FloatClear></FloatClear>
                    </div>
                    <div>
                        
                        <input type="button" id="off" value="취소" onClick={ handler }></input>
                        <input type="submit" id="off" value="제출"></input>
                    </div>
                </form>
            </FormContainer>
        </div>
    )
}

export default ReviewAddForm;