import axios from 'axios';

const getReviewByLv = async (currentState, more, lv, setList, reviewType) => {
    
    const serverUrl = 'http://kdt-ai5-team04.elicecoding.com'

    // 구 리뷰
    if (currentState.currentView === 'gu' && reviewType=='lv') {
      try {
        // 첫 10개
        await axios.get(`${serverUrl}/reviews?guId=${currentState.guId}&noiseLevel=${lv}`)
          .then(v => {
            setList(v.data)
          });
        // 다음~
        for (let i = 1; i <= more; i++) {
            await axios.get(`${serverUrl}/reviews?guId=${currentState.guId}&noiseLevel=${lv}&skip=${i}`)
                .then(v => (setList((prev) => {
                return [...prev, ...v.data]
            })));
        }
      }
      catch { console.log('구 리뷰(레벨별) 로딩 실패!'); }
    }
    // 동 리뷰
    else if (currentState.currentView === 'dong' && reviewType=='lv') {
      try {
        // 첫 10개
        await axios.get(`${serverUrl}/reviews?dongId=${currentState.clickSpotId}&noiseLevel=${lv}`)
          .then(v => (setList(v.data)));
        // 이후
        for (let i = 1; i <= more; i++) {
          await axios.get(`${serverUrl}/reviews?dongId=${currentState.clickSpotId}&noiseLevel=${lv}&skip=${i}`)
            .then(v => (setList((prev) => {
              return [...prev, ...v.data]
            })));
        }
      }
      catch { console.log('동 리뷰(레벨별) 로딩 실패!'); }
    }
  }

export default getReviewByLv