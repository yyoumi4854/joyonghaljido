import React from 'react';

// styled
import Title from '../../styles/titleStyles';
import RankingContent from '../../styles/rankingStyles';
import ReviewAll from '../../styles/reviewAllStyles';

// react-icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";


const Ranking2 = () => {
  let arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,11,1,1,1,1,1,1]

  return (
    <RankingContent>
        <ul className='tab'>
            <li>소음민원 순위</li>
            <li>탭1</li>
        </ul>

        {/* 소음민원 */}
        <Title>
          <div className='title'>
            <h3>소음민원 <span>순위</span></h3>
          </div>

          <div>
            글자순 수치
          </div>
        </Title>

        {/* 제목 + 리뷰버튼 */}
        {/* <Title>
          <div className='title'>
            <button className='back'>
              <AiOutlineArrowLeft/>
            </button>
            <h3>동대문구 답신리 2동 <span>리뷰</span></h3>
          </div>

          <div>
            <ReviewAll>
              <button>
                <AiFillWechat/>
              </button>
              <span>999</span>
            </ReviewAll>
          </div>
        </Title> */}

        {/* 핀선택시 제목 + 장소 */}
        {/* <Title alignItem='flexStart'>
          <div className='title'>
            <button className='back'>
              <AiOutlineArrowLeft/>
            </button>
            <div>
              <h3>소음민원 <span>순위</span></h3>
              <h4>스타벅스 앞</h4>
            </div>
          </div>
        </Title> */}

        <ul className='ranking'>
            {
                arr.map(x=>{
                    return(
                        <li>
                            <p>강남구</p>
                            <span>민원수 1111111개</span>
                        </li>
                    )
                })
            }
        </ul>
    </RankingContent>
  );
};

export default Ranking2;