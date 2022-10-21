import axios from 'axios';
import getAvg from './getAvg'

const filtering = async (currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx, lv) => {
    
    let lv1, lv2, lv3 = [0, 0, 0]

    // 1. 리뷰 개수 구하기
    if (currentState.currentView === 'gu') {

        try{
            await axios.get(`http://localhost:5001/reviews/count?guId=${currentState.guId}`)
            .then(v=>{
                const all = v.data.reviewCount[0].totalReview
                const arr = v.data.noiseLevelCount
                arr.forEach(ele => {
                    if(ele._id == 1){lv1 = ele.total}
                    if(ele._id == 2){lv2 = ele.total}
                    if(ele._id == 3){lv3 = ele.total}
                });
                setReviewCnt(()=>[all, lv1, lv2, lv3])
            })
        }
        catch{
            console.log('구 리뷰 수 파악 불가')
        }
    }
    else if (currentState.currentView === 'dong') {
        try {
            await axios.get(`http://localhost:5001/reviews/count?dongId=${currentState.clickSpotId}`)
            .then(v=>{
                const all = v.data.reviewCount[0].totalReview
                const arr = v.data.noiseLevelCount
                arr.forEach(ele => {
                    if(ele._id == 1){lv1 = ele.total}
                    if(ele._id == 2){lv2 = ele.total}
                    if(ele._id == 3){lv3 = ele.total}
                });
                setReviewCnt(()=>[all, lv1, lv2, lv3])
            })
        }
        catch{
            console.log('동 리뷰 수 파악 불가')
        }
    }
    
    // 2. 평균 소음 인덱스 계산
    setAvgIdx(getAvg(lv1, lv2, lv3))

    // 3. 리뷰 목록 구하기
    // 구 리뷰
    if (currentState.currentView === 'gu') {
        try {
          // 첫 10개
          await axios.get(`http://localhost:5001/reviews?guId=${currentState.guId}&noiseLevel=${lv}`)
            .then(v => {
              console.log(v.data)
              setList(v.data)
            });
          // 다음~
          for (let i = 1; i <= more; i++) {
              await axios.get(`http://localhost:5001/reviews?guId=${currentState.guId}&noiseLevel=${lv}&skip=${i}`)
                  .then(v => (setList((prev) => [...v.data, ...prev])));
          }
        }
        catch { console.log('구 리뷰(레벨별) 로딩 실패!'); }
      }
      // 동 리뷰
      else if (currentState.currentView === 'dong') {
        try {
          // 첫 10개
          await axios.get(`http://localhost:5001/reviews?dongId=${currentState.clickSpotId}&noiseLevel=${lv}`)
            .then(v => (setList(v.data)));
          // 이후
          for (let i = 1; i <= more; i++) {
            await axios.get(`http://localhost:5001/reviews?dongId=${currentState.clickSpotId}&noiseLevel=${lv}&skip=${i}`)
              .then(v => (setList((prev) => [...v.data, ...prev])));
          }
        }
        catch { console.log('동 리뷰(레벨별) 로딩 실패!'); }
      }

}


export default filtering







