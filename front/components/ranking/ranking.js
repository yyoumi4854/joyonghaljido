import {useState} from 'react'
import { 
    Container, 
    Category_box, 
    Category_click,
    Category_basic,
    OrderContainer,
    OrderBoxL,
    OrderBoxR,
    OrderButton0,
    OrderButton1,
    GU_list,
    GU_name,
    GU_info,
    Gu_footer,
    GU_container,
} from "./ranking.style.js";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Ranking = () => {

    const [대분류, set대분류] = useState('소음') // 소음 vs 민원
    const [소분류, set소분류] = useState('by수치') // by수치 vs by단어
    const [수치정렬, set수치정렬] = useState('오름') // 오름 vs 내림 (by수치)
    const [단어정렬, set단어정렬] = useState('오름') // 오름 vs 내림 (by단어)
    const [선택버튼, set선택버튼] = useState('수치오름') // 수치오름, 수치내림, 단어오름, 단어내림

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

    MW_OBJ.forEach((obj,idx)     => {MW.push(    
        <GU_list key={idx}>
            <GU_name>{obj['name']}</GU_name>
            <GU_info>민원 수 {obj['MW']}건</GU_info>
        </GU_list>)});
    MW_ASC_OBJ1.forEach((obj,idx) => {MW_ASC1.push(    
        <GU_list key={idx}>
            <GU_name>{obj['name']}</GU_name>
            <GU_info>민원 수 {obj['MW']}건</GU_info>
        </GU_list>)});
    MW_ASC_OBJ2.forEach((obj,idx) => {MW_ASC2.push(    
        <GU_list key={idx}>
            <GU_name>{obj['name']}</GU_name>
            <GU_info>민원 수 {obj['MW']}건</GU_info>
        </GU_list>)});
    MW_DSC_OBJ1.forEach((obj,idx) => {MW_DSC1.push(    
        <GU_list key={idx}>
            <GU_name>{obj['name']}</GU_name>
            <GU_info>민원 수 {obj['MW']}건</GU_info>
        </GU_list>)});
    MW_DSC_OBJ2.forEach((obj,idx) => {MW_DSC2.push(    
        <GU_list key={idx}>
            <GU_name>{obj['name']}</GU_name>
            <GU_info>민원 수 {obj['MW']}건</GU_info>
        </GU_list>)});
    


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
    DB_OBJ.forEach((obj,idx)     => {DB.push(
        <GU_list key={idx}>
            <GU_name>{obj['name']}</GU_name> 
            <GU_info>{obj['DB']}(dB)</GU_info>
        </GU_list>)});
    DB_ASC_OBJ1.forEach((obj,idx) => {DB_ASC1.push(
        <GU_list key={idx}>
            <GU_name>{obj['name']}</GU_name> 
            <GU_info>{obj['DB']}(dB)</GU_info>
        </GU_list>)});
    DB_ASC_OBJ2.forEach((obj,idx) => {DB_ASC2.push(
        <GU_list key={idx}>
            <GU_name>{obj['name']}</GU_name> 
            <GU_info>{obj['DB']}(dB)</GU_info>
        </GU_list>)});
    DB_DSC_OBJ1.forEach((obj,idx) => {DB_DSC1.push(
        <GU_list key={idx}>
            <GU_name>{obj['name']}</GU_name> 
            <GU_info>{obj['DB']}(dB)</GU_info>
        </GU_list>)});
    DB_DSC_OBJ2.forEach((obj,idx) => {DB_DSC2.push(
        <GU_list key={idx}>
            <GU_name>{obj['name']}</GU_name> 
            <GU_info>{obj['DB']}(dB)</GU_info>
        </GU_list>)});

    return (
        <>            
            <Container>
                <Category_box>
                    {대분류=='소음' && <>
                        <Category_click onClick={()=>{set대분류('소음')}}> 소음(DB) </Category_click>
                        <Category_basic onClick={()=>{set대분류('민원')}}> 민원(건) </Category_basic>
                    </>}

                    {대분류=='민원' && <>
                        <Category_basic onClick={()=>{set대분류('소음')}}> 소음(DB) </Category_basic>
                        <Category_click onClick={()=>{set대분류('민원')}}> 민원(건) </Category_click>
                    </>}
                </Category_box>
                <OrderContainer>
                    <OrderBoxL>
                        {대분류=='소음' && '소음'}
                        {대분류=='민원' && '민원'}
                    </OrderBoxL>
                    
                    <OrderBoxR>
                        {선택버튼 == '수치오름' && 
                            <>
                                수치 글자순 <br></br>
                                <OrderButton1 onClick={()=>{set소분류('by수치'); set수치정렬('오름'); set선택버튼('수치오름');}}><IoIosArrowUp/></OrderButton1>
                                <OrderButton0 onClick={()=>{set소분류('by수치'); set수치정렬('내림'); set선택버튼('수치내림');}}><IoIosArrowDown/></OrderButton0> &nbsp; &nbsp;
                                <OrderButton0 onClick={()=>{set소분류('by단어'); set단어정렬('오름'); set선택버튼('단어오름');}}><IoIosArrowUp/></OrderButton0>
                                <OrderButton0 onClick={()=>{set소분류('by단어'); set단어정렬('내림'); set선택버튼('단어내림');}}><IoIosArrowDown/></OrderButton0>
                            </>
                        }
                        {선택버튼 == '수치내림' && 
                            <>
                                수치 글자순 <br></br>
                                <OrderButton0 onClick={()=>{set소분류('by수치'); set수치정렬('오름'); set선택버튼('수치오름');}}><IoIosArrowUp/></OrderButton0>
                                <OrderButton1 onClick={()=>{set소분류('by수치'); set수치정렬('내림'); set선택버튼('수치내림');}}><IoIosArrowDown/></OrderButton1> &nbsp; &nbsp;
                                <OrderButton0 onClick={()=>{set소분류('by단어'); set단어정렬('오름'); set선택버튼('단어오름');}}><IoIosArrowUp/></OrderButton0>
                                <OrderButton0 onClick={()=>{set소분류('by단어'); set단어정렬('내림'); set선택버튼('단어내림');}}><IoIosArrowDown/></OrderButton0>
                            </>
                        }
                        {선택버튼 == '단어오름' && 
                            <>
                                수치 글자순 <br></br>
                                <OrderButton0 onClick={()=>{set소분류('by수치'); set수치정렬('오름'); set선택버튼('수치오름');}}><IoIosArrowUp/></OrderButton0>
                                <OrderButton0 onClick={()=>{set소분류('by수치'); set수치정렬('내림'); set선택버튼('수치내림');}}><IoIosArrowDown/></OrderButton0> &nbsp; &nbsp;
                                <OrderButton1 onClick={()=>{set소분류('by단어'); set단어정렬('오름'); set선택버튼('단어오름');}}><IoIosArrowUp/></OrderButton1>
                                <OrderButton0 onClick={()=>{set소분류('by단어'); set단어정렬('내림'); set선택버튼('단어내림');}}><IoIosArrowDown/></OrderButton0>
                            </>
                        }
                        {선택버튼 == '단어내림' && 
                            <>
                                수치 글자순 <br></br>
                                <OrderButton0 onClick={()=>{set소분류('by수치'); set수치정렬('오름'); set선택버튼('수치오름');}}><IoIosArrowUp/></OrderButton0>
                                <OrderButton0 onClick={()=>{set소분류('by수치'); set수치정렬('내림'); set선택버튼('수치내림');}}><IoIosArrowDown/></OrderButton0> &nbsp; &nbsp;
                                <OrderButton0 onClick={()=>{set소분류('by단어'); set단어정렬('오름'); set선택버튼('단어오름');}}><IoIosArrowUp/></OrderButton0>
                                <OrderButton1 onClick={()=>{set소분류('by단어'); set단어정렬('내림'); set선택버튼('단어내림');}}><IoIosArrowDown/></OrderButton1>
                            </>
                        }
                    </OrderBoxR>
                </OrderContainer>
                <hr></hr>
                
                <GU_container>
                    {(대분류=='민원' && 소분류=='by단어' && 단어정렬=='오름') ? MW_ASC2 : ''}
                    {(대분류=='민원' && 소분류=='by단어' && 단어정렬=='내림') ? MW_DSC2 : ''}
                    {(대분류=='민원' && 소분류=='by수치' && 수치정렬=='오름') ? MW_ASC1 : ''}
                    {(대분류=='민원' && 소분류=='by수치' && 수치정렬=='내림') ? MW_DSC1 : ''}
                    {(대분류=='소음' && 소분류=='by단어' && 단어정렬=='오름') ? DB_ASC2 : ''}
                    {(대분류=='소음' && 소분류=='by단어' && 단어정렬=='내림') ? DB_DSC2 : ''}
                    {(대분류=='소음' && 소분류=='by수치' && 수치정렬=='오름') ? DB_ASC1 : ''}
                    {(대분류=='소음' && 소분류=='by수치' && 수치정렬=='내림') ? DB_DSC1 : ''}
                </GU_container>
                <Gu_footer>조용할지도</Gu_footer>
            </Container>
        </>
    );
}
export default Ranking;