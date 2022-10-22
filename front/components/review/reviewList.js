import nameId from '../../Id_book/nameId.json'
import { useState, useEffect} from 'react'

import filtering from './functions/filtering.js'
import allReviewClicked from './functions/allReviewClicked.js'

// styled
import ReviewListContent from './reviewListStyles';
import Modal_TripleDots from './modal/Modal_TripleDots';


// react-icons
import { AiOutlineMore } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import getMorePages from './functions/notUsing/getMorePages';

const ReviewList = ({ 
    list, setModal, setReviewObj, 
    setIsWriting, isWriting, setMore, dongList, currentState, more, setList, reviewType, setReviewCnt, setAvgIdx, avgIdx,
    reviewCnt, typeChanged, lv, setLv, dongListChanged, setReviewType, setBasic}) => {

    const [noiseTabActive, setNoiseTabActive] = useState([-1, 0, 0, 0]);
    const [tripleDotModal, setTripleDotModal] = useState(false);
    
    const noiseText = { 1: '나쁨', 2: '보통', 3: '좋음' }
    const [editBtns,   setEditBtns]   = useState(new Array(list.length).fill(0));
    const limit = 71
    
    // ***** [접기 열기] ***** //
    // 최초 마스킹
    let btnArrForMore = new Array(list.length).fill(false)
    for(let i=0; i<list.length; i++){
        if(list[i].description.length > limit){btnArrForMore[i] = true}
    }
    const [maskArrForMoreBtn, setMaskArrForMoreBtn] = useState(new Array(list.length).fill([...btnArrForMore]));
    const [maskArrForHideBtn, setMaskArrForHideBtn] = useState(new Array(list.length).fill(false));
    const [maskArrForTxt, setMaskArrForTxt] = useState(new Array(list.length).fill(false));

    // 리스트 변동 시
    useEffect(()=>{
        let btnArrForMore = new Array(list.length).fill(false)
        let txtArr = new Array(list.length).fill(false)
        for(let i=0; i<list.length; i++){
            if(list[i].description.length > limit){
                btnArrForMore[i] = true
                txtArr[i] = false
            }
        }
        setMaskArrForMoreBtn([...btnArrForMore])
        setMaskArrForTxt([...txtArr])
    }, [list])
    
    const onClickMore = (i) => {
        let btnArrForMore = maskArrForMoreBtn
        let btnArrForHide = maskArrForHideBtn
        let txtArr = maskArrForTxt

        btnArrForMore[i] = false
        btnArrForHide[i] = true
        txtArr[i] = true

        setMaskArrForMoreBtn([...btnArrForMore])
        setMaskArrForHideBtn([...btnArrForHide])
        setMaskArrForTxt([...txtArr])
    };

    const onClickHide = (i) => {
        let btnArrForMore = maskArrForMoreBtn
        let btnArrForHide = maskArrForHideBtn
        let txtArr = maskArrForTxt

        btnArrForMore[i] = true
        btnArrForHide[i] = false
        txtArr[i] = false

        setMaskArrForMoreBtn([...btnArrForMore])
        setMaskArrForHideBtn([...btnArrForHide])
        setMaskArrForTxt([...txtArr])
    };


    //***** [필터링] *****//
    const noiseTabHandler = (e) => {
        // 해당 레벨 CSS 활성화 

        setLv(prev=>e.target.id)
        let arr = [-1, 0, 0, 0]
        arr[e.target.id] = 1;
        const lvValue = e.target.id
        setBasic(false)
        setNoiseTabActive(arr);
        setReviewType(prev=>'filter')
        filtering(currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx, lvValue)
    }
    
    //***** [더 불러오기] *****//
    const getMoreClicked = () => {
        setMore(prev=>prev+1)
    }

  return (
    <ReviewListContent>
      <div className='noiseAvgCon'>
        <span className={`noiseLevel${avgIdx}`}>noiseLevel3</span>
        <p>
          소음 리뷰 평균 소음은<br/>
          <span>{noiseText[avgIdx]}</span>입니다.
        </p>
      </div> 

      <ul className='noiseTab'>
        <li className={(noiseTabActive[3] && reviewType=='filter') && 'active'}>
          <span id='3' onClick={noiseTabHandler}>좋음</span>
          <p>{reviewCnt[3] || 0}</p>
        </li>
        <li className={(noiseTabActive[2] && reviewType=='filter') && 'active'}>
          <span id='2' onClick={noiseTabHandler}>보통</span>
          <p>{reviewCnt[2] || 0}</p>
        </li>
        <li className={(noiseTabActive[1] && reviewType=='filter') && 'active'}>
          <span id='1' onClick={noiseTabHandler}>나쁨</span>
          <p>{reviewCnt[1] || 0}</p>
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
                        {/* 일반 텍스트 */}
                        { maskArrForTxt[i] && x.description}
                        {/* 장문 텍스트 */}
                        {!maskArrForTxt[i] && x.description.slice(0, limit)}
                        {/* 더보기 버튼 */}
                        { maskArrForMoreBtn[i] && <button onClick={()=>{onClickMore(i)}}>...더보기</button>}
                        {/* 숨기기 버튼 */}
                        { maskArrForHideBtn[i] && <button onClick={()=>{onClickHide(i)}}>...숨기기</button>}
                      </p>
                    </div>

                    {/* 동일때 태그 삭제 */}
                    { (dongListChanged == true && currentState.currentView === 'gu') &&
                    <span className='dongTag'>
                        {dongList.find(v => {
                        {
                            return v._id === x.dongId
                        }
                        }).name}
                    </span> }
                  </div>

                  <button className='editBtn' onClick={()=>{
                    setTripleDotModal(true)
                    let newList = new Array(list.length).fill(0);
                    newList[i] = 1;
                    setEditBtns([...newList]);
                  }}><AiOutlineMore /></button>

                  {
                    (editBtns[i] && tripleDotModal)? 
                    <Modal_TripleDots
                      setModal={setModal}
                      setTripleDotModal={setTripleDotModal}
                      x={x}
                      setReviewObj={setReviewObj} />
                    : null
                  }

                </li>
              )
            })
          }
        </ul>
        <button className='reviewAddBtn' onClick={() => {getMoreClicked()}}>
            소음 리뷰 10개 더보기
            <BiChevronDown />
        </button>
      </div>
    </ReviewListContent>
  );
};

export default ReviewList;

