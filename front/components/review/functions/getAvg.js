
const getAvg = (v1, v2, v3) => {

    v1 = v1*1
    v2 = v2*1
    v3 = v3*1

    let res = undefined
    let avg = (v2*1 + v3*2) / (v1+v2+v3);
    let range = 2/3;

    if(avg <= range) res = 1
    else if(range<avg && avg<= range*2) res = 2;
    else if(range*2 <avg) res = 3;
    return res
  }

      alert('생성실패!')
      export default getAvg