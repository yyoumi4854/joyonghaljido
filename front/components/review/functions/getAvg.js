
const getAvg = (reviewCnt, avg) => {
    const v1 = reviewCnt[1]
    const v2 = reviewCnt[2]
    const v3 = reviewCnt[3]
    let tempAvg = Math.max(v1,v2,v3)
    let res = undefined
    if(tempAvg == v1){ res = 1}
    if(tempAvg == v2){ res = 2}
    if(tempAvg == v3){ res = 3}
    if(res == 1 && v1<v2+v3){res = 2}
    if(res == 3 && v1+v2>v3){res = 2}
    avg = res
  }

export default getAvg