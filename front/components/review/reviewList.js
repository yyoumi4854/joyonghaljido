import React from 'react';
import {useState} from 'react';
import nameId from '../../Id_book/nameId.json'
import ReviewAddForm from './reviewAddForm'

// styled
import ReviewListContent from './reviewListStyles';
import {SmallBtn, ReviewBtn} from '../../styles/btnStyles';
import TripleDotsModal from './tripleDotsModal';

// react-icons
import { AiOutlineMore } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";


const ReviewList = ({list, limit, toggleEllipsis, onClickMore, setModal, modal}) => {

    // (...) 클릭 시 수정, 삭제가 나타나도록 구현할 예정
    // 지금은 그냥 수정, 삭제가 그냥 보임
    // const [IfDotsClicked, setIfDotsClicked] = useState(false)
    const [isWriting, setIsWriting] = useState(false)

  return (
    <ReviewListContent>
      <div className='noiseAvgCon'>
        {/* 리뷰 평균에 따라 className, 내용에 `noiseLevel${x.noiseLevel}`채워지기 "3:good, 2:soso:, 1:bad" */}
        <span className='noiseLevel2'>noiseLevel3</span>
        <p>
        소음 리뷰 평균 소음은<br />
        <span>보통</span>입니다.{/* 내용바꿔치기 */}
        </p>
      </div>

      <ul className='noiseTab'>
        {/* 클릭할때마다 li에 active가 붙는걸로 -> active가 붙을때마다 아이콘 밑 글씨가 굵어지고 색상이 바뀜 */}
        {/* 여기도 백엔드에서 개수를 보내줘야함. 페이지네이션 사용하기 때문에 프론트단에서 처리 불가능 */}
        <li className='active'>
          <span>좋음</span>
          <p>{list && list.filter(v => v.noiseLevel === 3).length}</p>
        </li>
        <li>
          <span>보통</span>
          <p>{list && list.filter(v => v.noiseLevel === 2).length}</p>
        </li>
        <li>
          <span>나쁨</span>
          <p>{list && list.filter(v => v.noiseLevel === 1).length}</p>
        </li>
      </ul>

      <div className='reviewList'>
        <ul>
          {
            list && list.map((x) => {
              return (
                <li>
                  <div className={`noiseLevel${x.noiseLevel}`}>{/* 리뷰 소음레벨 : "3:good, 2:soso:, 1:bad" className에 채워지기 */}
                    <span className='level'>{`noiseLevel${x.noiseLevel}`}</span>{/* 여기에 3:good, 2:soso, 1:bad 내용넣기 */}
                  </div>

                  <div className='reviewTextCon'>
                    <div className='textTop'>
                      <p>{x.title}</p>
                      <span>{x.createdAt.slice(2, 10) + ',  ' + x.createdAt.slice(11, 16)}</span>{/* 날짜데이터넣기 */}
                      
                      <TripleDotsModal 
                      setModal={setModal} 
                      modal={modal}
                      reviewObj={x}/>

                    </div>
                    <div className='textBottom'>
                      <p>
                        {toggleEllipsis(x.description, limit).string}
                        {toggleEllipsis(x.description, limit).isShowMore && <button onClick={onClickMore(x.description)}>...더보기</button>}
                      </p>
                    </div>
                    <span className='dongTag'>{nameId.find(v => v._id === x.dongId).name}</span>{/* 동일때는 안보이기 */}
                  </div>

                  <button className='editBtn'><AiOutlineMore /></button>
                </li>
              )
            })
          }
        </ul>

        <button className='reviewAddBtn'>소음 리뷰 10개 더보기 <BiChevronDown/></button>{/* 남은 리뷰가 10개 미만일 경우 -> 소음 리뷰 5개 더보기*/}
      </div>

      {isWriting && <ReviewAddForm 
        setIsWriting={setIsWriting} 
        // currentState={undefined} 
        // toggleIsWriting={undefined} 
        // setModal={undefined} 
        // modal={undefined}
        />}
      <ReviewBtn>
        <button onClick={()=>{setIsWriting(true)}}>소음 리뷰 쓰러가기</button>

      </ReviewBtn>

        </ReviewListContent>
  );
};



export default ReviewList;