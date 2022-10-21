import styled from "styled-components";

const MapContent = styled.div`
  position: relative;

  .title{
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 700;
    font-size: 28px;
  }

  .locationPath{
    ${({ theme }) => theme.common.flexCenter}
    p{
      color: ${({ theme }) => theme.colors.grey2};
      cursor: pointer;

      &:last-child{
        color: #333;
      }

      &:hover{
        color: ${({ theme }) => theme.colors.main};
      }
    }
    svg{
      color: ${({ theme }) => theme.colors.mainLight1};
      margin: 0 8px;
    }
  }

  .mapCon{
    width: 100%;
    height: calc(100vh - 64px);
    background: ${({ theme }) => theme.colors.grey4};
  }
`;

export default MapContent;