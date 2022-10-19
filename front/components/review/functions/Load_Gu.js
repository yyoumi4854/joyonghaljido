import axios from 'axios';
import getAvg from '../functions/getAvg'

const Load_Gu = async (
    currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx) => {

    console.log('Load_Gu')
    // 1. 리뷰 개수 구하기
    try{
        await axios.get(`http://localhost:5001/reviews/count?guId=${currentState.guId}`)
        .then(v=>{
            const all = v.data.reviewCount[0].totalReview
            const arr = v.data.noiseLevelCount
            let lv1, lv2, lv3 = [0, 0, 0]
            arr.forEach(ele => {
                if(ele._id == 1){lv1 = ele.total}
                if(ele._id == 2){lv2 = ele.total}
                if(ele._id == 3){lv3 = ele.total}
            });
            setReviewCnt(()=>[all, lv1, lv2, lv3])
            console.log(lv1, lv2, lv3)
        })
    }
    catch{
        console.log('구 리뷰 수 파악 불가')
    }

    // 2. 평균 소음 인덱스 계산
    const v1 = reviewCnt[1]
    const v2 = reviewCnt[2]
    const v3 = reviewCnt[3]
    await setAvgIdx(getAvg(v1, v2, v3))

    // 3. 리뷰 목록 구하기
    // 3-1 구 목록 구하기
    if (currentState.currentView === 'gu') {
        try {
            await axios.get(`http://localhost:5001/reviews?guId=${currentState.guId}`)
            .then(v => (setList(v.data)));

            for (let i = 1; i <= more; i++) {
            await axios.get(`http://localhost:5001/reviews?guId=${currentState.guId}&skip=${i}`)
                .then(v => (setList((prev) => {
                return [...prev, ...v.data]
                })));
            }
        }
        catch { console.log('구 리뷰 로딩 실패!'); }
    }
    // 3-1 동 목록 구하기
    else if (currentState.currentView === 'dong') {
        try {
            await axios.get(`http://localhost:5001/reviews?dongId=${currentState.clickSpotId}`)
            .then(v => (setList(v.data)));
            for (let i = 1; i <= more; i++) {
            await axios.get(`http://localhost:5001/reviews?dongId=${currentState.clickSpotId}&skip=${i}`)
                .then(v => (setList((prev) => {
                return [...prev, ...v.data]
                })));
            }
        }
        catch { console.log('동 리뷰 로딩 실패!'); }
        console.log('firstLoad 종료')
    }
}

export default Load_Gu