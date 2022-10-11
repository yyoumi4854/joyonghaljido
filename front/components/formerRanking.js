import {useState} from 'react'
import styled from "styled-components";

const Ranking = () => {

    const [대분류, set대분류] = useState(0) 
    const [단어정렬, set단어정렬] = useState(1) 
    const [수치정렬, set수치정렬] = useState(1) 
    const [소분류,   set소분류] = useState('수치값') 

    const BTN_가나다_O = styled.button`color:red;`;
    const BTN_가나다_X = styled.button`color:black;`;
    const BTN_수치값_O = styled.button`color:red;`;
    const BTN_수치값_X = styled.button`color:black;`;

    // 1. 민원(건) - 2020년 자료
    let MW_OBJ = [
        {name:'종로구', MW:2016},
        {name:'중구', MW:1060},
        {name:'용산구', MW:1625},
        {name:'성동구', MW:1860},
        {name:'광진구', MW:1943},
        {name:'동대문구', MW:2446},
        {name:'중랑구', MW:1787},
        {name:'성북구', MW:1783},
        {name:'강북구', MW:2204},
        {name:'도봉구', MW:1289},
        {name:'노원구', MW:1006},
        {name:'은평구', MW:3060},
        {name:'서대문구', MW:2147},
        {name:'마포구', MW:3307},
        {name:'양천구', MW:1223},
        {name:'강서구', MW:1348},
        {name:'구로구', MW:1935},
        {name:'금천구', MW:1876},
        {name:'영등포구', MW:3264},
        {name:'동작구', MW:2534},
        {name:'관악구', MW:2542},
        {name:'서초구', MW:4187},
        {name:'강남구', MW:7518},
        {name:'송파구', MW:2099},
        {name:'강동구', MW:4327}
    ]

    let MW_ASC_OBJ1 = MW_OBJ.slice().sort((a,b) => (a.MW - b.MW));
    let MW_DSC_OBJ1 = MW_OBJ.slice().sort((a,b) => (b.MW - a.MW));
    let MW_ASC_OBJ2 = MW_OBJ.slice().sort((a,b) => {if(a.name>b.name) return 1; if(a.name<b.name) return -1; return 0;});
    let MW_DSC_OBJ2 = MW_OBJ.slice().sort((a,b) => {if(a.name<b.name) return 1; if(a.name>b.name) return -1; return 0;});

    let MW = []
    let MW_ASC1 = []
    let MW_ASC2 = []
    let MW_DSC1 = []
    let MW_DSC2 = []
    MW_OBJ.forEach((obj,idx)     => {MW.push(<div key={idx}>{obj['name']} : {obj['MW']}건</div>)});
    MW_ASC_OBJ1.forEach((obj,idx) => {MW_ASC1.push(<div key={idx}>{obj['name']} : {obj['MW']}건</div>)});
    MW_ASC_OBJ2.forEach((obj,idx) => {MW_ASC2.push(<div key={idx}>{obj['name']} : {obj['MW']}건</div>)});
    MW_DSC_OBJ1.forEach((obj,idx) => {MW_DSC1.push(<div key={idx}>{obj['name']} : {obj['MW']}건</div>)});
    MW_DSC_OBJ2.forEach((obj,idx) => {MW_DSC2.push(<div key={idx}>{obj['name']} : {obj['MW']}건</div>)});

    // 2. 소음(데시벨)
    let DB_OBJ = [
        {name:'광진구', DB: 0},
        {name:'강남구', DB: 57.42},
        {name:'강동구', DB: 66.15},
        {name:'강북구', DB: 57.99},
        {name:'강서구', DB: 67.66},
        {name:'관악구', DB: 66.46},
        {name:'구로구', DB: 62.83},
        {name:'금천구', DB: 65.47},
        {name:'노원구', DB: 53.29},
        {name:'도봉구', DB: 0},
        {name:'동대문구', DB: 59.19},
        {name:'동작구', DB: 65.48},
        {name:'마포구', DB: 60.71},
        {name:'서대문구', DB: 68.97},
        {name:'서초구', DB: 55.37},
        {name:'성동구', DB: 65.24},
        {name:'성북구', DB: 57.45},
        {name:'송파구', DB: 63.09},
        {name:'양천구', DB: 54.93},
        {name:'영등포구', DB: 61.87},
        {name:'용산구', DB: 64.32},
        {name:'은평구', DB: 60.64},
        {name:'종로구', DB: 58.66},
        {name:'중구', DB: 62.67},
        {name:'중랑구', DB: 61.8},
    ]
      
    let DB_ASC_OBJ1 = DB_OBJ.slice().sort((a,b) => (a.DB - b.DB));
    let DB_DSC_OBJ1 = DB_OBJ.slice().sort((a,b) => (b.DB - a.DB));
    let DB_ASC_OBJ2 = DB_OBJ.slice().sort((a,b) => {if(a.name>b.name) return 1; if(a.name<b.name) return -1; return 0;});
    let DB_DSC_OBJ2 = DB_OBJ.slice().sort((a,b) => {if(a.name<b.name) return 1; if(a.name>b.name) return -1; return 0;});

    let DB = []
    let DB_ASC1 = []
    let DB_ASC2 = []
    let DB_DSC1 = []
    let DB_DSC2 = []
    DB_OBJ.forEach((obj,idx)     => {DB.push(<div key={idx}>{obj['name']} : {obj['DB']}DB</div>)});
    DB_ASC_OBJ1.forEach((obj,idx) => {DB_ASC1.push(<div key={idx}>{obj['name']} : {obj['DB']}DB</div>)});
    DB_ASC_OBJ2.forEach((obj,idx) => {DB_ASC2.push(<div key={idx}>{obj['name']} : {obj['DB']}DB</div>)});
    DB_DSC_OBJ1.forEach((obj,idx) => {DB_DSC1.push(<div key={idx}>{obj['name']} : {obj['DB']}DB</div>)});
    DB_DSC_OBJ2.forEach((obj,idx) => {DB_DSC2.push(<div key={idx}>{obj['name']} : {obj['DB']}DB</div>)});

    return (
        <>
            {대분류 
                ? <><button onClick={()=>set대분류(0)}>민원</button></>
                : <><button onClick={()=>set대분류(1)}>소음</button></>
            }
            <br></br>
            정렬 : &nbsp;
            {소분류 == '가나다'
                ?
                    (
                        수치정렬==1 
                        ?   
                            (
                                단어정렬==1 
                                ?   // 가나다선택 + 수치값ASC:1 + 가나다ASC:1 
                                <>
                                    <BTN_가나다_O onClick={()=>{set소분류('가나다'); set단어정렬(0); }}>가나다↑</BTN_가나다_O>
                                    <BTN_수치값_X onClick={()=>{set소분류('수치값'); }}>수치값↑</BTN_수치값_X>
                                </>
                                :   // 가나다선택 + 수치값ASC:1 + 가나다ASC:0 
                                <>
                                    <BTN_가나다_O onClick={()=>{set소분류('가나다'); set단어정렬(1); }}>가나다↓</BTN_가나다_O>
                                    <BTN_수치값_X onClick={()=>{set소분류('수치값'); }}>수치값↑</BTN_수치값_X>
                                </>
                            )
                        :   
                            (
                                단어정렬==1 
                                ?   // 가나다선택 + 수치값ASC:0 + 가나다ASC:1 
                                <>
                                    <BTN_가나다_O onClick={()=>{set소분류('가나다'); set단어정렬(0); }}>가나다↑</BTN_가나다_O>
                                    <BTN_수치값_X onClick={()=>{set소분류('수치값'); }}>수치값↓</BTN_수치값_X>                                
                                </>
                                :   // 가나다선택 + 수치값ASC:0 + 가나다ASC:0
                                <>
                                    <BTN_가나다_O onClick={()=>{set소분류('가나다'); set단어정렬(1); }}>가나다↓</BTN_가나다_O>
                                    <BTN_수치값_X onClick={()=>{set소분류('수치값'); }}>수치값↓</BTN_수치값_X>    
                                </>
                            ) 
                    )
                :   
                    (
                        수치정렬==1 
                        ?   
                            (
                                단어정렬==1 
                                ?   // 수치값선택 + 수치값ASC:1 + 가나다ASC:1 
                                <>
                                    <BTN_가나다_X onClick={()=>{set소분류('가나다'); }}>가나다↑</BTN_가나다_X>
                                    <BTN_수치값_O onClick={()=>{set소분류('수치값'); set수치정렬(0); }}>수치값↑</BTN_수치값_O>                 
                                </>
                                :   // 수치값선택 + 수치값ASC:1 + 가나다ASC:0 
                                <>
                                    <BTN_가나다_X onClick={()=>{set소분류('가나다');}}>가나다↓</BTN_가나다_X>
                                    <BTN_수치값_O onClick={()=>{set소분류('수치값'); set수치정렬(0); }}>수치값↑</BTN_수치값_O>      
                                </>
                            )
                        :   
                            (
                                단어정렬==1 
                                ?   // 수치값선택 + 수치값ASC:0 + 가나다ASC:1 
                                <>
                                    <BTN_가나다_X onClick={()=>{set소분류('가나다'); }}>가나다↑</BTN_가나다_X>
                                    <BTN_수치값_O onClick={()=>{set소분류('수치값'); set수치정렬(1); }}>수치값↓</BTN_수치값_O>      
                                </>
                                :   // 수치값선택 + 수치값ASC:0 + 가나다ASC:0
                                <>
                                    <BTN_가나다_X onClick={()=>{set소분류('가나다'); }}>가나다↓</BTN_가나다_X>
                                    <BTN_수치값_O onClick={()=>{set소분류('수치값'); set수치정렬(1); }}>수치값↓</BTN_수치값_O>      
                                </>
                            ) 
                    )
            }
            <br></br><br></br>
            <hr></hr>
            <br></br>
            {/* 민원 + 가나다 + 오름차순 */}
            {(대분류 && 소분류=='가나다' &&  단어정렬) ? MW_ASC2: ''}

            {/* 민원 + 가나다 + 내림차순 */}
            {(대분류 && 소분류=='가나다' && !단어정렬) ? MW_DSC2 : ''}

            {/* 민원 + 수치값 + 오름차순 */}
            {(대분류 && 소분류=='수치값' &&  수치정렬) ? MW_ASC1 : ''}

            {/* 민원 + 수치값 + 내림차순 */}
            {(대분류 && 소분류=='수치값' && !수치정렬) ? MW_DSC1 : ''}


            {/* 소음 + 가나다 + 오름차순  */}
            {(!대분류 && 소분류=='가나다' &&  단어정렬) ? DB_ASC2: ''}

            {/* 소음 + 가나다 + 내림차순  */}
            {(!대분류 && 소분류=='가나다' && !단어정렬) ? DB_DSC2: ''}

            {/* 소음 + 수치값 + 오름차순  */}
            {(!대분류 && 소분류=='수치값' &&  수치정렬) ? DB_ASC1 : ''}

            {/* 소음 + 수치값 + 내림차순  */}
            {(!대분류 && 소분류=='수치값' && !수치정렬) ? DB_DSC1 : '' }
        </>
    );
}

export default Ranking;