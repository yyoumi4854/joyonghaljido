import ReviewAddForm from "./reviewAddForm";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReviewList } from "./reviewPage.style.js";
import geoId from "../../../data/geoid.json";

const ReviewPage = ({ currentState }) => {
  const [isWriting, setIsWriting] = useState(false);
  const [reviewList, setReviewList] = useState([]);

  if (currentState.currentView === "gu") {
    const guName = currentState.clickedName;
    const gu = geoId.filter((element) => element.name === guName)[0];
    const guId = gu._id;

    useEffect(() => {
      axios.get(`http://localhost:5001/reviews?guId=${guId}`).then((res) => {
        console.log(res.data);
        setReviewList(res.data);
      });
    }, []);
  } else if (currentState.currentView === "dong") {
    const dongName = currentState.clickedName;
    const dongList = geoId.find((element) =>
      element.dongs.find((dong) => dong.name === dongName)
    ).dongs;
    const dongId = dongList.filter((el) => el.name === dongName)[0]._id;

    useEffect(() => {
      axios
        .get(`http://localhost:5001/reviews?dongId=${dongId}`)
        .then((res) => {
          console.log(res.data);
          setReviewList(res.data);
        });
    }, []);
  }

  const handler = (e) => {
    if (e.target.id == "on") {
      setIsWriting(true);
    }
    if (e.target.id == "off") {
      setIsWriting(false);
    }
  };

  return (
    <>
      <button id="on" onClick={handler}>
        글 작성
      </button>
      {reviewList.map((review) => (
        <ReviewList key={review._id}>
          {review.noiseLevel}
          {review.title}
          {review.description}
          {review.dong}동<button>수정</button>
          <button>삭제</button>
          <br></br>
        </ReviewList>
      ))}
      {isWriting == true && (
        <ReviewAddForm
          setIsWriting={setIsWriting}
          handler={handler}
        ></ReviewAddForm>
      )}
    </>
  );
};

export default ReviewPage;
