
import axios from 'axios';

const getReviewNum = async (currentState, setReviewCnt) => {

    try{
        await axios.get(`http://localhost:5001/reviews/count?guId=${currentState.guId}`)
        .then(v=>{
            const all = v.data.reviewCount[0].totalReview
            const lv1 = v.data.noiseLevelCount[0].total
            const lv2 = v.data.noiseLevelCount[1].total
            const lv3 = v.data.noiseLevelCount[2].total
            setReviewCnt(()=>[all, lv1, lv2, lv3])
        })
    }
    catch{
        console.log('개수 파악 불가')
    }
  }

export default getReviewNum