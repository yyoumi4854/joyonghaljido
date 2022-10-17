import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import FormContent from "./reviewAddForm.style";
import { SmallBtn } from '../../styles/btnStyles';

import geoId from './geoid.json';

const ReviewAddForm = ({ currentState,  toggleIsWriting }) => {
    // review content
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
            toggleIsWriting;
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
            toggleIsWriting;
        }
    };

    return (
        <FormContent ref={modalRef} onChange={ handleReviewChange }>
            <div className="formCon">
                <form onSubmit={ handleAddSubmit }>
                    <h3>소음 리뷰 <span>작성하기</span></h3>
                    <div className="content">
                        <p className="title">지역 선택을 선택해주세요.</p>
                        <div className="selectBox">
                            <select name="guId" onChange={ handleGuChange }>
                                <option value="">구를 선택해주세요.</option>
                                {
                                    geoId.map(gu => {
                                        return <option key={gu._id} value={gu._id}>{gu.name}</option>
                                    })
                                }
                            </select>
                            <select name="dongId" id="" disabled={ !review.guId }>
                                <option value="">동을 선택해주세요.</option>
                                {
                                    dongList.map(dong => {
                                        return <option key={dong._id} value={dong._id}>{dong.name}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className="content">
                        <p className="title">소음에 대한 상세 설명을 작성해주세요.</p>
                        <div className="inputBox">
                            <input
                                type="text"
                                placeholder="제목을 입력해 주세요."
                                name="title"
                                value={review.title}
                            />

                            <textarea 
                                name="description"
                                value={review.description}
                                placeholder="내용을 입력해주세요."
                            ></textarea>
                        </div>
                    </div>
                    <br></br>


                    <div className="content">
                        <p className="title">비밀번호를 입력해 주세요.</p>
                        <input
                            type="text"
                            placeholder="비밀번호를 입력해주세요."
                            name="password"
                            value={review.password}
                        />
                    </div>
                    <br></br>

                    <div className="content">
                        <p className="title">내가 느낀 소음은 어느 정도였나요?</p>

                        <ul className="radioBox"> 
                            <li>
                                <input id="bad" type="radio" name="noiseLevel" value='1' checked={ noiseLevel === "1" } onClick={ handleNoiseLevelClick }/>
                                <label for='bad'>나쁨</label>
                                <p>나쁨</p>
                            </li>
                            <li>
                                <input id="soso" type="radio" name="noiseLevel" value='2' checked={ noiseLevel === "2" } onClick={ handleNoiseLevelClick }/>
                                <label for='soso'>보통</label>
                                <p>보통</p>
                            </li>
                            <li>
                                <input id="good" type="radio" name="noiseLevel" value='3' checked={ noiseLevel === "3" } onClick={ handleNoiseLevelClick }/>
                                <label for="good">좋음</label>
                                <p>좋음</p>
                            </li>
                        </ul>
                    </div>

                    <div className="btnBox content">
                        <SmallBtn onClick={ toggleIsWriting }>취소</SmallBtn>
                        <SmallBtn type="submit" check='yes'>확인</SmallBtn>
                    </div>
                </form>
            </div>
        </FormContent>
    )
}

export default ReviewAddForm;
