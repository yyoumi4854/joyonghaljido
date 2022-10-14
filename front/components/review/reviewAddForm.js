import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { 
    ColorDiv1,
    ColorDiv2,
    ColorDiv3,
    FloatClear,
    FormContainer,
} from "./reviewAddForm.style.js";

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
                console.log(guList);
            })
    }, []);

    // 구
    const handleGuChange = async (e) => {
        const selectedGuId = e.target.value;
        // const guName = e.target.value;

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
        // const dongName = e.target.value;
        setDongId(dongId);
    }

    const handleTitleChange = (e) => {setTitle(e.target.value)}
    const handleDescriptionChange = (e) => {setDescription(e.target.value)}
    const handlePasswordChange = (e) => {setPassword(e.target.value)}
    const handleNoiseLevelChange = (e) => {setNoiseLevel(e.target.id)}

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
        SetReview([...review, newReview]);

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
        <div ref={modalRef}>
            <FormContainer>
                <form onSubmit={ handleAddSubmit }>  
                    <div>
                        <select name="gu" id="" onChange={ handleGuChange }>
                            {/* <option value="">구를 선택해주세요.</option> */}
                            {
                                guList.map(gu => {
                                    return <option key={gu._id} value={gu._id}>{gu.name}</option>
                                })
                            }
                        </select>
                        <select name="dong" id="" disabled={ !guId } onChange={ handleDongChange }>
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
                            value={ review.title }
                            onChange={handleTitleChange}></input>                
                        <input
                            type="text"
                            placeholder="내용"
                            name="description"
                            value={ review.description }
                            onChange={ handleDescriptionChange}></input>
                    </div>
                    <br></br>


                    <div>
                        <label>비밀번호를 입력해 주세요.</label><br></br>
                        <input
                            type="text"
                            placeholder="비밀번호"
                            name="password"
                            value={ review.password }
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
                        
                        <input type="button" id="off" value="취소" onClick={ handler }></input>
                        <input type="submit" value="제출"></input>
                    </div>
                </form>
            </FormContainer>
        </div>
    )
}

export default ReviewAddForm;