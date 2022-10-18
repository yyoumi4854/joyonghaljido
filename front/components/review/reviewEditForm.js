import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import FormContent from "./reviewAddForm.style";
import { SmallBtn } from '../../styles/btnStyles';

import geoId from './geoid.json';

const ReviewEditForm = ({ currentReview, closeIsEditing, setListChanged }) => {
    const [review, setReview] = useState({
        guId: currentReview.guId,
        dongId: currentReview.dongId,
        title: currentReview.title,
        description: currentReview.description,
        password: currentReview.password,
        noiseLevel: currentReview.noiseLevel,
    });

    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setReview((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const reviewId = currentReview._id;
        try {
            await axios.put(`http://localhost:5001/reviews/${reviewId}`, review);
            closeIsEditing();
            setListChanged(prev=>!prev)
        } catch (e) {
            console.log("수정 오류", e);
        }
    }

    // modal off (when get out of modal)
    const modalRef = useRef();
    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    });
    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeIsEditing();
        }
    };
    
    return (
        <FormContent ref={ modalRef } onChange={ handleReviewChange }>
            <div className="formCon">
                <form onSubmit={ handleUpdateSubmit }>
                    <h3>소음 리뷰 <span>수정하기</span></h3>
                    <div className="content">
                        <p className="title">지역 선택을 선택해주세요.</p>
                        <div className="selectBox">
                            <select name="guId" disabled={ review.guId }>
                                <option value={review.guId}>{geoId.find(geo => geo._id === currentReview.guId).name}</option>
                            </select>
                            <select name="dongId" id="" disabled={ review.dongId }>
                                <option value={review.dongId}>{geoId.find(geo => geo._id === currentReview.guId).dongs.find(dong => dong._id === currentReview.dongId).name}</option>
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
                            type="password"
                            name="password"
                            value={review.password}
                            disabled
                        />
                    </div>
                    <br></br>

                    <div className="content">
                        <p className="title">내가 느낀 소음은 어느 정도였나요?</p>

                        <ul className="radioBox"> 
                            <li className="good">
                                <input id="good" type="radio" name="noiseLevel" value='3' checked={ currentReview.noiseLevel === "3" } />
                                <label for="good">좋음</label>
                                <p>좋음</p>
                            </li>
                            <li className="soso">
                                <input id="soso" type="radio" name="noiseLevel" value='2' checked={ currentReview.noiseLevel === "2" } />
                                <label for='soso'>보통</label>
                                <p>보통</p>
                            </li>
                            <li className="bad">
                                <input id="bad" type="radio" name="noiseLevel" value='1' checked={ currentReview.noiseLevel === "1" } />
                                <label for='bad'>나쁨</label>
                                <p>나쁨</p>
                            </li>
                        </ul>
                    </div>

                    <div className="btnBox content">
                        <SmallBtn onClick={ closeIsEditing }>취소</SmallBtn>
                        <SmallBtn type="submit" check='yes'>확인</SmallBtn>
                    </div>
                </form>
            </div>
        </FormContent>
    )

}

export default ReviewEditForm;
