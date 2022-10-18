import styled, { css } from "styled-components";

const TeamInfoLayout = styled.div`
    margin-top: 64px;
    width : 100vw;
    .title-1{
        font-size : 60px;
        font-weight : 700;
        color : #30C586;
        margin-bottom : 50px;
    }
    .title-2{
        font-size : 40px;
        font-weight : 700;
        color : #30C586;
    }
    .title-2:nth-child(2){
        padding : 40px 0;
    }
    .title-3{
        font-size : 32px;
        font-weight : 700;
        color : #30C586;
    }
    .text{
        font-size : 20px;
        font-weight : 600;
        padding : 20px 0;
        color : ${({ theme }) => theme.colors.grey2};
    }
    .teamText{
        font-size : 40px;
        font-weight : 600;
        color : ${({ theme }) => theme.colors.grey2};
    }
    .sec{
        width : 100vw;
        padding : 30px 150px;
    }
    .sec:first-child{
        padding : 100px 0;
    }
    .sec:nth-child(2){
        padding-top : 100px;
    }
    .sec:last-child{
        padding-bottom : 100px;
    }
    .center{
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : center; 
    }
    .left{
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : start;
    }
    .right{
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : end; 
    }
    .bg{
        background-color : ${({ theme }) => theme.colors.mainLight2}
    }
    .badge{
        padding : 5px 10px;
        margin : 0 5px;
        border-radius: 100px;
        background-color : white;
        color : grey;
    }
    .sub span{
        color : white;
        padding : 0 10px;
    }
    .sub a{
        color : white;
    }
`;

export default TeamInfoLayout;