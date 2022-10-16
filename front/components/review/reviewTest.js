import React from 'react';

// styled
import ReviewTestContent from './reviewTestStyles';
import Title from '../titleStyles';
import nameId from '../../Id_book/nameId.json'

// react-icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as Api from '../../api'; // API 활용하세용

const ReviewTest = ({ currentState }) => {
  const noise = {
    1: 'good',
    2: 'soso',
    3: 'bad',
  }
  const [list, setList] = useState([]);
  useEffect(() => {
    //구 리뷰 출력
    if (currentState.currentView === 'gu') {
      try {
        axios.get(`http://localhost:5001/reviews?guId=${currentState.guId}`).then(v => (setList(v.data)));
      }
      catch {
        console.log('구 리뷰 불러오기 실패!');
      }
    }
    //동 리뷰 출력
    else if (currentState.currentView === 'dong') {
      try {
        axios.get(`http://localhost:5001/reviews?dongId=${currentState.dongId}`).then(v => (setList(v.data)));
      }
      catch {
        console.log('동 리뷰 불러오기 실패!');
      }
    }
  }
    , []);
  useEffect(() => {
    console.log(list);
  }, [list])



  // let arr = [
  //   { level: 'good', text: '아주 좋습니다.' },
  //   { level: 'soso', text: '별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다.별로입니다..' },
  //   { level: 'bad', text: '시끄러워요.시끄러워요.시끄러워요.' },
  // ]

  const [limit, setLimit] = useState(71);
  const toggleEllipsis = (str, limit) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit
    }
  };

  const onClickMore = (str) => () => {
    setLimit(str.length);
  };

  return (
    <ReviewTestContent>
      <Title>
        <div className='title'>
          <button className='back'>
            <AiOutlineArrowLeft />
          </button>
          <h3>{currentState.guName} {currentState.clickSpotId && currentState.clickedName} <span>리뷰</span></h3>
        </div>

        <div>
          <div className='reviewAll'>
            <button>
              <AiFillWechat />
            </button>
            {/* 한번에 모든 게시글을 불러오지 않기때문에 모든 모든 게시글 개수를 불러오는 api 설정 필요 */}
            <span>{list && list.length}</span>
          </div>
        </div>
      </Title>

      <ul className='noiseTab'>
        {/* 클릭할때마다 li에 active가 붙는걸로 -> active가 붙을때마다 아이콘 밑 글씨가 굵어지고 색상이 바뀜 */}
        {/* 여기도 백엔드에서 개수를 보내줘야함. 페이지네이션 사용하기 때문에 프론트단에서 처리 불가능 */}
        <li className='active'>
          <span>좋음</span>
          <p>{list && list.filter(v => v.noiseLevel === 1).length}</p>
        </li>
        <li>
          <span>보통</span>
          <p>{list && list.filter(v => v.noiseLevel === 2).length}</p>
        </li>
        <li>
          <span>나쁨</span>
          <p>{list && list.filter(v => v.noiseLevel === 3).length}</p>
        </li>
      </ul>

      <div className='reviewList'>
        <ul>
          {
            list && list.map((x) => {
              return (
                <li>
                  <div className={noise[x.noiseLevel]}>{/* 리뷰의 소음레벨에따라 "good, soso, bad" className에 채워지기 */}
                    <span className='level'>{noise[x.noiseLevel]}</span>{/* 여기에 good, soso, bad 내용넣기 */}
                  </div>

                  <div className='reviewTextCon'>
                    <div className='textTop'>
                      <p>{x.title}</p>
                      <span>{x.createdAt}</span>{/* 날짜데이터넣기 */}
                    </div>
                    <div className='textBottom'>
                      <p>
                        {toggleEllipsis(x.description, limit).string}
                        {toggleEllipsis(x.description, limit).isShowMore && <button onClick={onClickMore(x.description)}>...더보기</button>}
                      </p>
                    </div>
                    <span className='dongTag'>{nameId.find(v => v._id === x.dongId).name}</span>
                  </div>

                  <button className='editBtn'><AiOutlineMore /></button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </ReviewTestContent>
  );
}
export default ReviewTest;