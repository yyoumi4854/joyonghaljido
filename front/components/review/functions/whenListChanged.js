import axios from 'axios';

const whenListChanged = async (
    currentState, more, setList, reviewType, list) => {
    // currentState, more, setList, reviewType, list, setReviewCnt, reviewCnt, setAvgIdx, avgIdx) => {
        

    // 구 리뷰 GET
    if (currentState.currentView === 'gu' && reviewType=='default') {
    try {
        // 첫 10개
        await axios.get(`http://localhost:5001/reviews?guId=${currentState.guId}`)
        .then(v => (setList(v.data)));
        // 이후
        for (let i = 1; i <= more; i++) {
        await axios.get(`http://localhost:5001/reviews?guId=${currentState.guId}&skip=${i}`)
            .then(v => (setList((prev) => {
            return [...prev, ...v.data]
            })));
        }
    }
    catch { console.log('구 리뷰 로딩 실패!'); }
    }

    // 동 리뷰 GET
    else if (currentState.currentView === 'dong' && reviewType=='default') {
    try {
        // 첫 10개
        await axios.get(`http://localhost:5001/reviews?dongId=${currentState.clickSpotId}`)
        .then(v => (setList(v.data)));
        // 이후
        for (let i = 1; i <= more; i++) {
        await axios.get(`http://localhost:5001/reviews?dongId=${currentState.clickSpotId}&skip=${i}`)
            .then(v => (setList((prev) => {
            return [...prev, ...v.data]
            })));
        }
    }
    catch { console.log('동 리뷰 로딩 실패!'); }
    }
}

export default whenListChanged