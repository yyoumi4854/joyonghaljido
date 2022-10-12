import ReviewAddForm from './reviewAddForm';
import React, { useState, useEffect} from "react";
import { 
    ReviewList
} from "./reviewPage.style.js";

const ReviewPage = () => {

    const [isWriting, setIsWriting] = useState('off');
    
    const handler = (e) => {
        if(e.target.id == 'on'){setIsWriting(()=>'on')}
        if(e.target.value == '취소'){setIsWriting(()=>'off')}
    }

    return (
        <>
            <button id='on' onClick={ handler }>글 작성</button>
            <button id='off' onClick={handler}>글 게시</button>

            <ReviewList>리뷰1</ReviewList>
            <ReviewList>리뷰2</ReviewList>
            <ReviewList>리뷰3</ReviewList>

            {isWriting=='on' && <ReviewAddForm handler={ handler }></ReviewAddForm>}
        </>
    );
}

export default ReviewPage;

// setIsWriting(()=>1)