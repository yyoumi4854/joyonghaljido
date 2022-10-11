import styled from "styled-components";

const Container = styled.div`
    font-family: 'Noto Sans KR';
    width:384px;
    height:1054px;
    background-color: whitesmoke;
    color:black;
`
const Category_box = styled.div`
    display:flex;
    color:black;
`
const Category_click = styled.button`
    background-color: #30C586;
    border:solid #30C586;
    width:192px;
    height:68px;
    border:solid #30C586;
    color:white;
`
const Category_basic = styled.button`
    background-color: #83DCB6;
    width:192px;
    height:68px;
    border:solid #83DCB6;
    color:white;
`
const OrderContainer = styled.div`
    display: flex;
    color:black;
    border:none;
`
const OrderBox = styled.div`
    text-align:center;
    line-height:68px;
    width:192px;
    color:black;
    height:68px;
`
const OrderBoxL = styled.div`
    text-align:center;
    line-height:68px;
    width:192px;
    color:black;
    font-weight:700;
    height:68px;
`
const OrderBoxR = styled.div`
    text-align:center;
    width:192px;
`
const OrderButton0 = styled.button`
    color:black;
    background-color:white;
    border-color:white;
`
const OrderButton1 = styled.button`
    color:white;
    background-color: #30c586;
    border-color:white;
`
const GU_list = styled.div`

    box-sizing: border-box;
    width: 336px;
    height: 50px;
    line-height:50px;
    position:relative;
    background: #FFFFFF;
    border-bottom: 1px solid #E9E8E8;
    &:hover{  
        background-color : skyblue;
        color : blue
    }
`
const GU_name = styled.div`
    float:left;
    font-weight:bold;
`
const GU_info = styled.div`
    float:right;
    color:gray;
    padding-right:30px;
`
const GU_container = styled.button`
    height:869px;
    margin-left:24px;
    border:solid 1px white;
    background-color:white;
    
    // 스크롤 생성
    overflow-Y:scroll;
    overflow-X:hidden;

    // 스크롤 숨김-Edge
    -ms-overflow-style: none; 
    
    // 스크롤 숨김-Chrome
    scrollbar-width: none;
    &::-webkit-scrollbar{  
        display: none;
    }
`
const Gu_footer = styled.div`
    position:absolute;
    top:1100px;
    margin-left:24px;
    background-color:green;
    text-align:center;
    height:49px;
    width:340px;
    line-height:49px;
    color:white
`

export { 
    Container, 
    Category_box, 
    Category_click,  
    Category_basic,
    OrderContainer,
    OrderBox,
    OrderBoxL,
    OrderBoxR,
    OrderButton0,
    OrderButton1,
    GU_list,
    GU_container,
    GU_name,
    GU_info,
    Gu_footer
};

