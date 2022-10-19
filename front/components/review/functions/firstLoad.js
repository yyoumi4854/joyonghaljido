import axios from 'axios';

const firstLoad = async (
    currentState, more, setList, setReviewCnt, reviewCnt, setAvgIdx) => {

    console.log('firstLoad')
    // 1. 리뷰 개수 구하기
    if (currentState.currentView === 'gu') {
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
            })
        }
        catch{
            console.log('구 리뷰 수 파악 불가')
        }
    }
    else if (currentState.currentView === 'dong') {
        try {
            await axios.get(`http://localhost:5001/reviews/count?guId=${currentState.clickSpotId}`)
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
            })
        }
        catch{
            console.log('동 리뷰 수 파악 불가')
        }
    }

    // 2. 평균 소음 인덱스 계산
    const v1 = reviewCnt[1]
    const v2 = reviewCnt[2]
    const v3 = reviewCnt[3]
    let tempAvg = Math.max(v1,v2,v3)
    console.log('tempAvg',tempAvg)
    let res = undefined
    if(tempAvg == v1){ res = 1}
    if(tempAvg == v3){ res = 3}
    if(tempAvg == v2){ res = 2}
    if(res == 1 && v1<v2+v3){res = 2}
    if(res == 3 && v1+v2>v3){res = 2}
    setAvgIdx(res)

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

export default firstLoad