import React, { useState } from "react";

const ReviewAddForm = () => {
    const [form, setForm] = useState({
        gu: "",
        dong: "",
        title: "",
        description: "",
        password: "",
        noiseLevel: "",
    });

    const [selected, setSeleted] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSelect(e) {
        setForm((prev) => ({
            ...prev,

        }))
    }

    function handleNoiseLevel(e) {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // 등록 버튼 눌렀을 때의 이벤트 (api 연결)
        // POST 요청

        // & GET 요청
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label>지역을 선택해 주세요.</label>
                <select name="gu">
                    <option value="gu">구 선택</option>
                    <option value="lime">Lime</option>
                </select>
                <select name="dong">
                    <option value="dong">동 선택</option>
                    <option value="lime">Lime</option>
                </select>                             
            </div>
            <div>
                <label>소음에 대한 상세 설명을 작성해 주세요.</label>
                <input
                    type="text"
                    placeholder="제목"
                    name="title"
                    value={ form.title }
                    onChange={ handleChange }></input>                
                <input
                    type="text"
                    placeholder="내용"
                    name="description"
                    value={ form.description }
                    onChange={ handleChange }></input>
            </div>
            <div>
                <label>비밀번호를 입력해 주세요.</label>
                <input
                    type="text"
                    placeholder="비밀번호"
                    name="password"
                    value={ form.password }
                    onChange={ handleChange }></input>
            </div>
            <div>
                <label>내가 느낀 소음은 어느 정도였나요?</label>
                <input
                    type="button"
                    name="bad"
                    value="1"
                    onClick={ handleNoiseLevel }></input>
                <input
                    type="button"
                    name="soso"
                    value="2"
                    onClick={ handleNoiseLevel }></input>
                <input
                    type="button"
                    name="good"
                    value="3"
                    onClick={ handleNoiseLevel }></input>
            </div>
            <input type="button" value="취소"></input>
            <input type="submit" value="제출"></input>
        </form>
    )
}

export default ReviewAddForm;