import nameId from '../../../Id_book/nameId.json'
import { useState, useEffect} from 'react'

import Load_Filtered from '../functions/Load_Filtered.js'
import Load_AllReview from '../functions/Load_AllReview.js'

// styled
import ReviewListContent from './reviewListStyles';
import Modal_TripleDots from '../modals/Modal_TripleDots';

// react-icons
import { AiOutlineMore } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const ReviewList = ({ 
    list, setModal, setReviewObj, setMore, dongList, currentState, more, setList, reviewType, setReviewCnt, setAvgIdx, avgIdx, reviewCnt, setLv, dongListChanged, setReviewType, setBasic}) => {

    const [noiseTabActive, setNoiseTabActive] = useState([-1, 0, 0, 0]);
    const [tripleDotModal, setTripleDotModal] = useState(false);
    
    const noiseText = { 1: '나쁨', 2: '보통', 3: '좋음' }
    const [editBtns,   setEditBtns]   = useState(new Array(list.length).fill(0));
    const limit = 71
    

    // ***** 1. [펼치기 접기] ***** //
    // 1-1 시작값 
    let btnArrForMore = new Array(list.length).fill(false)
    for(let i=0; i<list.length; i++){
        if(list[i].description.length > limit){btnArrForMore[i] = true}
    }
    const [maskArrForMoreBtn, setMaskArrForMoreBtn] = useState(new Array(list.length).fill([...btnArrForMore]));
    const [maskArrForHideBtn, setMaskArrForHideBtn] = useState(new Array(list.length).fill(false));
    const [maskArrForTxt, setMaskArrForTxt] = useState(new Array(list.length).fill(false));
    
    // 1-2 리스트 변경에 따른 재조정
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
    
    // 1-3 더보기 숨기기 클릭에 따른 재조정
    const openHide = (e,i) => {
        let btnArrForMore = maskArrForMoreBtn
        let btnArrForHide = maskArrForHideBtn
        let txtArr = maskArrForTxt

        if(e.target.id == 'more'){
            btnArrForMore[i] = false
            btnArrForHide[i] = true
            txtArr[i] = true
        }
        if(e.target.id == 'hide'){
            btnArrForMore[i] = true
            btnArrForHide[i] = false
            txtArr[i] = false
        }
        setMaskArrForMoreBtn([...btnArrForMore])
        setMaskArrForHideBtn([...btnArrForHide])
        setMaskArrForTxt([...txtArr])
    };



    //***** 2. [필터링] *****//
    const noiseTabHandler = (e) => {
        const level = e.target.id
        setLv(prev=>level)
        let arr = [-1, 0, 0, 0]
        arr[level] = 1;
        
        setBasic(false)
        setNoiseTabActive(arr);
        setReviewType(prev=>'filter')
        Load_Filtered(currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx, level)
    }
    
    //***** 3. [더 불러오기] *****//
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
          <span id='3' onClick={(e)=>{noiseTabHandler(e)}}>좋음</span>
          <p>{reviewCnt[3] || 0}</p>
        </li>
        <li className={(noiseTabActive[2] && reviewType=='filter') && 'active'}>
          <span id='2' onClick={(e)=>{noiseTabHandler(e)}}>보통</span>
          <p>{reviewCnt[2] || 0}</p>
        </li>
        <li className={(noiseTabActive[1] && reviewType=='filter') && 'active'}>
          <span id='1' onClick={(e)=>{noiseTabHandler(e)}}>나쁨</span>
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
                        { maskArrForTxt[i] && x.description}
                        {!maskArrForTxt[i] && x.description.slice(0, limit)}
                        { maskArrForMoreBtn[i] && <button id='open' onClick={(e)=>{openHide(e,i)}}>...더보기</button>}
                        { maskArrForHideBtn[i] && <button id='hide' onClick={(e)=>{openHide(e,i)}}>...숨기기</button>}
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

