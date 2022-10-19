
const getAvg = (v1, v2, v3) => {

    let maxValue = Math.max(v1,v2,v3)
    let setArr = new Set([v1, v2, v3])
    let res = undefined
    
    // case1 : 모두 같은 값
    if(setArr.size == 1){
        res = 2
        console.log('case1', res)
    }
    
    // case2 : 두 값이 같음 => max가 평균
    let cnt = 0
    if(setArr.size == 2){
        if(maxValue == v1) {cnt++;}
        if(maxValue == v2) {cnt++;}
        if(maxValue == v3) {cnt++;}
        
        // 큰 값 둘 => 중간이 평균
        if(cnt==2){res = 2}
        
        // 작은 값 둘 => max가 평균
        else{
            if(maxValue == v1){ res = 0}
            if(maxValue == v2){ res = 1}
            if(maxValue == v3){ res = 2}
        }  
        console.log('case2', res)
    }
    
    // case3 : 각 값이 다름 => max가 기준
    if(setArr.size == 3){
        
        if(maxValue == v1){ res = 0}
        if(maxValue == v2){ res = 1}
        if(maxValue == v3){ res = 2}
        console.log('case3', res)
    }
    console.log('평균 인덱스', res)
    return res
  }

export default getAvg