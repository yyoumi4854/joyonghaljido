import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
// import {
//     ColorDiv1,
//     ColorDiv2,
//     ColorDiv3,
//     FloatClear,
//     FormContainer,
// } from "./reviewAddForm.style.js";
import FormContent from "./reviewAddForm.style";
import {SmallBtn} from '../../styles/btnStyles';

const ReviewAddForm = ({ setIsWriting, handler }) => {
    // review content
    const [guId, setGuId] = useState('');
    const [dongId, setDongId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [password, setPassword] = useState('');
    const [noiseLevel, setNoiseLevel] = useState('');

    const [guList, setGuList] = useState([]);
    const [dongList, setDongList] = useState([]);

    const [review, SetReview] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5001/location/gus")
            .then((res) => {
                setGuList(res.data);
            })
    }, []);

    // 구
    const handleGuChange = async (e) => {
        const selectedGuId = e.target.value;

        setGuId(selectedGuId);

        // 선택한 구 ID 이용해 해당 구에 속한 동 리스트 불러오기
        await axios.get(`http://localhost:5001/location/gus/${selectedGuId}/dongs`)
            .then((res) => {
                setDongList(res.data.dongs);
            });
    }

    // 동
    const handleDongChange = (e) => {
        const dongId = e.target.value;
        setDongId(dongId);
    }

    const handleTitleChange = (e) => { setTitle(e.target.value) }
    const handleDescriptionChange = (e) => { setDescription(e.target.value) }
    const handlePasswordChange = (e) => { setPassword(e.target.value) }
    // const handleNoiseLevelChange = (e) => { setNoiseLevel(e.target.id) }
    const handleNoiseLevelChange = (e) => { setNoiseLevel(e.target.value) }

    const handleAddSubmit = async (e) => {
        e.preventDefault();

        const newReview = {
            guId: guId,
            dongId: dongId,
            title: title,
            description: description,
            password: password,
            noiseLevel: noiseLevel,
        };
        SetReview(newReview);

        // 등록 버튼 눌렀을 때 이벤트 (api 연결)
        // POST & GET
        // try {
        //     await axios.post("http://localhost:5001/reviews", JSON.stringify(review));
        // } catch (e) {
        //     console.log("POST 요청이 실패했습니다.", e);
        //     console.log(review);
        // }
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
        <FormContent ref={modalRef}>
            <div className="formCon">
                <form onSubmit={handleAddSubmit}>
                    <h3>소음 리뷰 <span>작성하기</span></h3>
                    <div className="content">
                        <p className="title">지역 선택을 선택해주세요.</p>
                        <div className="selectBox">
                            <select name="gu" onChange={handleGuChange}>
                                <option value="">구를 선택해주세요.</option>
                                {
                                    guList.map(gu => {
                                        return <option key={gu._id} value={gu._id}>{gu.name}</option>
                                    })
                                }
                            </select>
                            <select name="dong" id="" disabled={!guId} onChange={handleDongChange}>
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
                                onChange={handleTitleChange}/>
                            {/* <input
                                type="text"
                                placeholder="내용"
                                name="description"
                                value={review.description}
                                onChange={handleDescriptionChange}/> */}
                            <textarea 
                                name="description"
                                value={review.description}
                                placeholder="내용을 입력해주세요."
                                onChange={handleDescriptionChange}
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
                            onChange={handlePasswordChange}/>
                    </div>
                    <br></br>

                    <div className="content">
                        <p className="title">내가 느낀 소음은 어느 정도였나요?</p>

                        <ul className="radioBox"> 
                            <li>
                                <input id="bad" type="radio" name='state' value='1' onClick={handleNoiseLevelChange}/>
                                <label for='bad'>나쁨</label>
                                <p>나쁨</p>
                            </li>
                            <li>
                                <input id="soso" type="radio" name='state' value='2' onClick={handleNoiseLevelChange}/>
                                <label for='soso'>보통</label>
                                <p>보통</p>
                            </li>
                            <li>
                                <input id="good" type="radio" name='state' value='3' onClick={handleNoiseLevelChange}/>
                                <label for="good">좋음</label>
                                <p>좋음</p>
                            </li>
                        </ul>

                        {/* <div></div>
                        <div id='1' onClick={handleNoiseLevelChange}></div>
                        <div id='2' onClick={handleNoiseLevelChange}></div>
                        <div id='3' onClick={handleNoiseLevelChange}></div>
                        <div></div> */}
                    </div>

                    <div className="btnBox content">
                        <SmallBtn onClick={handler}>취소</SmallBtn>
                        <SmallBtn type="submit" check='yes'>확인</SmallBtn>
                        {/* <input type="button" id="off" value="취소" onClick={handler}/>
                        <input type="submit" value="제출"></input> */}
                    </div>
                </form>
            </div>
        </FormContent>
    )
}

export default ReviewAddForm;