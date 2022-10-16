import styled from "styled-components";

const MapContent = styled.div`
  position: relative;

  .locationText{
    position: absolute;
    top: 142px; // 기본82
    width : 100%;
    text-align : center;
    font-size: ${({ theme }) => theme.fontSizes.titleFs};
    font-weight: 700;

    span{
      cursor: pointer;
      color : ${({ theme }) => theme.colors.grey2};
      &:last-child{
        color: black;
      }

      &:hover{
        color: ${({ theme }) => theme.colors.main};
      }
    }

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