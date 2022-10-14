import ReviewAddForm from './reviewAddForm';
import React, { useState, useEffect } from "react";
import { 
    ReviewList
} from "./reviewPage.style.js";

import dummy from "../../dummy/reviews.json";

const ReviewPage = () => {

    const [isWriting, setIsWriting] = useState(false);
    
    const handler = (e) => {
        if(e.target.id == 'on'){setIsWriting(true)}
        if(e.target.id == 'off'){setIsWriting(false)}
    }

    return (
        <>
            <button id='on' onClick={ handler }>글 작성</button>
            {dummy.reviews.map(review => (
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