import styled from "styled-components";

const MapContent = styled.div`
  position: relative;

  .locationText{
    position: fixed;
    top: 162px; // 기본82
    left: 50%;
    transform: translateY(-50%);
    font-size: ${({ theme }) => theme.fontSizes.titleFs};
    font-weight: 700;

    span{
      transition: .2s;
      cursor: pointer;

      &:nth-child(1){
        color: ${({ theme }) => theme.colors.grey2};
      }

      &:hover{
        color: ${({ theme }) => theme.colors.main};
      }
    }

    svg{
      width: auto;
      height: 36px;
      vertical-align: top;
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