import ReviewAddForm from './reviewAddForm';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
    ReviewList
} from "./reviewPage.style.js";

const ReviewPage = ({ currentState }) => {

    const [isWriting, setIsWriting] = useState(false);
    const [reviewList, setReviewList] = useState([]);
    const [guId, setGuId] = useState();
    const [dongId, setDongId] = useState();

    if (currentState.currentView === 'gu') {
        const guName = currentState.clickedName;

        useEffect(() => {
            axios.get("http://localhost:5001/location/gus")
                .then((res) => {
                    const gus = res.data;
                    gus.forEach((el) => {
                        if (el.name === guName) {
                            setGuId(el._id);
                        }
                    })
                })
        }, [])

        useEffect(() => {
            axios.get(`http://localhost:5001/reviews?guId=${guId}`)
                .then((res) => {
                    console.log(res.data);
                    setReviewList(res.data);
                })
        }, [])        
    } else if (currentState.currentView === 'dong') {
        const dongName = currentState.clickedName;

        useEffect(() => {
            axios.get(`http://localhost:5001/location/gus/${guId}/dongs`)
                .then((res) => {
                    const dongs = res.data.dongs;
                    dongs.forEach((el) => {
                        if (el.name === dongName) {
                            setDongId(el._id);
                        }
                    })
                })
        }, [])

        useEffect(() => {
            axios.get(`http://localhost:5001/reviews?dongId=${dongId}`)
                .then((res) => {
                    console.log(res.data);
                    setReviewList(res.data);
                })
        }, [])
    }

    
    const handler = (e) => {
        if(e.target.id == 'on'){setIsWriting(true)}
        if(e.target.id == 'off'){setIsWriting(false)}
    }

    return (
        <>
            <button id='on' onClick={ handler }>글 작성</button>
            {reviewList.map(review => (
                <ReviewList key={ review._id }>
                    { review.noiseLevel }
                    { review.title }
                    { review.description }
                    { review.dong }동
                    <button>수정</button>
                    <button>삭제</button>
                    <br></br>                    
                </ReviewList>
            ))}
            {isWriting==true && <ReviewAddForm setIsWriting={ setIsWriting } handler={ handler }></ReviewAddForm>}
        </>
    );
}

export default ReviewPage;