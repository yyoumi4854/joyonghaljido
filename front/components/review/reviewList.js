import nameId from '../../Id_book/nameId.json'
import { useState } from 'react'

// styled
import ReviewListContent from './reviewListStyles';
import TripleDotsModal from './tripleDotsModal';

// react-icons
import { AiOutlineMore } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const ReviewList = ({ list, limit, toggleEllipsis, onClickMore, setModal, setReviewObj, setIsWriting, isWriting, setMore, dongList }) => {
  console.log('review list render');
  // 작동이 되다말다해서 포기
  const [controlList, setControlList] = useState([...list]);
  const [noiseTabActive, setNoiseTabActive] = useState([0, 0, 0]);

  const handlerNoiseTabClick = (e) => {
    const targetId = parseInt(e.target.id);
    const newList = [...list].filter(v => v.noiseLevel === targetId);
    setControlList(newList);

    const newNoiseTabActive = new Array(3).fill(0);
    newNoiseTabActive[targetId - 1] = 1;
    setNoiseTabActive(newNoiseTabActive);
  }

  // 평균 소음 구하기 반올림 값으로 구함
  const noiseText = { 1: '나쁨', 2: '보통', 3: '좋음' }
  let noiseAvg = 0;
  if (list.length > 0) {
    const noiseSum = list.map(v => v.noiseLevel).reduce((prev, cur) => prev + cur) / list.length;
    noiseAvg = Math.round(noiseSum);
  }

  const [editBtns, setEditBtns] = useState(new Array(list.length).fill(0));

  return (
    <ReviewListContent>
      <div className='noiseAvgCon'>
        <span className={`noiseLevel${noiseAvg}`}>noiseLevel3</span>
        <p>
          소음 리뷰 평균 소음은<br />
          <span>{noiseText[noiseAvg]}</span>입니다.
        </p>
      </div>

      <ul className='noiseTab'>
        {/* 클릭할때마다 li에 active가 붙는걸로 -> active가 붙을때마다 아이콘 밑 글씨가 굵어지고 색상이 바뀜 */}
        {/* 여기도 백엔드에서 개수를 보내줘야함. 페이지네이션 사용하기 때문에 프론트단에서 처리 불가능 */}
        <li className={noiseTabActive[2] && 'active'}>
          <span id='3' onClick={handlerNoiseTabClick}>좋음</span>
          <p>{list && list.filter(v => v.noiseLevel === 3).length}</p>
        </li>
        <li className={noiseTabActive[1] && 'active'}>
          <span id='2' onClick={handlerNoiseTabClick}>보통</span>
          <p>{list && list.filter(v => v.noiseLevel === 2).length}</p>
        </li>
        <li className={noiseTabActive[0] && 'active'}>
          <span id='1' onClick={handlerNoiseTabClick}>나쁨</span>
          <p>{list && list.filter(v => v.noiseLevel === 1).length}</p>
        </li>
      </ul>

      <div className='reviewList'>
        <ul>
          {
            list && list.map((x, i) => {
              return (
                <li key={x._id}>
                  <div className={`noiseLevel${x.noiseLevel}`}>
                    <span className='level'>{`noiseLevel${x.noiseLevel}`}</span>
                  </div>

                  <div className='reviewTextCon'>
                    <div className='textTop'>
                      <p>{x.title}</p>
                      <span>{x.createdAt.slice(2, 10) + ',  ' + x.createdAt.slice(11, 16)}</span>{/* 날짜데이터넣기 */}
                    </div>
                    <div className='textBottom'>
                      <p>
                        {toggleEllipsis(x.description, limit).string}
                        {toggleEllipsis(x.description, limit).isShowMore && <button onClick={onClickMore(x.description)}>...더보기</button>}
                      </p>
                    </div>
                    <span className='dongTag'>{dongList.find(v => v._id === x.dongId).name}</span>{/* 동일때는 안보이기 */}
                  </div>

                  <button className='editBtn' onClick={()=>{
                    let newList = new Array(list.length).fill(0);
                    newList[i] = 1;
                    setEditBtns([...newList]);
                  }}><AiOutlineMore /></button>

                  {
                    editBtns[i] ? 
                    <TripleDotsModal
                      setModal={setModal}
                      x={x}
                      setReviewObj={setReviewObj} />
                    : null
                  }

                </li>
              )
            })
          }
        </ul>

        <button className='reviewAddBtn' onClick={() => { setMore(prev => prev + 1) }}>소음 리뷰 10개 더보기 <BiChevronDown /></button>
      </div>
    </ReviewListContent>
  );
};

export default ReviewList;