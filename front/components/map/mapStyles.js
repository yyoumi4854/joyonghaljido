import styled from "styled-components";

const MapContent = styled.div`
  position: relative;
  .locationPath{
    display: flex;
    flex-direction: column;
    justify-content : center;
    align-items: center;

    position: absolute;
    top : 20px;
    right : 20px;
    padding : 30px;
    background-color : rgba(255,255,255,0.7);
    border : 1px ${({ theme }) => theme.colors.grey3} solid;

    .down{
      color: ${({ theme }) => theme.colors.main};
      padding : 10px 0px;
    }
    .path{
      &:hover{
        color: ${({ theme }) => theme.colors.main};
      }
    }
    span{
      cursor: pointer;
      font-size: 20px;
      color : ${({ theme }) => theme.colors.grey2};
      &:last-child{
        font-size: 24px;
        font-weight : 700;
        color: black;
      }
    }
  }
  .locationText{
    position: absolute;
    display : inline;
    top: 60px; // 기본82
    left : 0;
    right : 0;
    // width : 100%;

    text-align : center;
    font-size: ${({ theme }) => theme.fontSizes.titleFs};
    font-weight: 700;

    svg{
      width: auto;
      height: 36px;
      vertical-align: top;
      padding : 0 10px;
      color: ${({ theme }) => theme.colors.mainLight1};
    }
  }

  .mapCon{
    width: 100%;
    height: calc(100vh - 64px);
    background: ${({ theme }) => theme.colors.grey4};
  }
`;

export default MapContent;