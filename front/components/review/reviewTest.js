import React from 'react';

// styled
import ReviewTestContent from './reviewTestStyles';
import Title from '../titleStyles';

// react-icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";
import { useState } from 'react';

const ReviewTest = () => {
  let arr=[
    {level: 'good', text: '시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.지금은 지'},
    {level: 'soso', text: '시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.지금은 지금다시 만나러가요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.시끄러워요.지금은 지금다시 만나러가요.'},
    {level: 'bad', text: '시끄러워요.시끄러워요.시끄러워요.'},
  ]

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
            <AiOutlineArrowLeft/>
          </button>
          <h3>동대문구 답신리 2동 <span>리뷰</span></h3>
        </div>

        <div>
          <div className='reviewAll'>
            <button>
              <AiFillWechat/>
            </button>
            <span>999</span>
          </div>
        </div>
      </Title>

      <ul className='noiseTab'>
        {/* 클릭할때마다 li에 active가 붙는걸로 -> active가 붙을때마다 아이콘 밑 글씨가 굵어지고 색상이 바뀜 */}
        <li className='active'>
          <span>좋음</span>
          <p>111</p>
        </li>
        <li>
          <span>보통</span>
          <p>111</p>
        </li>
        <li>
          <span>나쁨</span>
          <p>111</p>
        </li>
      </ul>

      <div className='reviewList'>
        <ul>
          {
            arr.map((x)=>{
              return(
                <li>
                  <div className={x['level']}>{/* 리뷰의 소음레벨에따라 "good, soso, bad" className에 채워지기 */}
                    <span className='level'>{x['level']}</span>{/* 여기에 good, soso, bad 내용넣기 */}
                  </div>

                  <div className='reviewTextCon'>
                    <div className='textTop'>
                      <p>진짜 시끄러워요.</p>
                      <span>2022/10/06</span>{/* 날짜데이터넣기 */}
                    </div>
                    <div className='textBottom'>
                      <p>
                        {toggleEllipsis(x['text'], limit).string}
                        {toggleEllipsis(x['text'], limit).isShowMore && <button onClick={onClickMore(x['text'])}>...더보기</button>}
                      </p>
                    </div>
                    <span className='dongTag'>발산동</span>
                  </div>

                  <button className='editBtn'><AiOutlineMore/></button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </ReviewTestContent>
  );
};

export default ReviewTest;