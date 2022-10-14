import styled from "styled-components";

const HeaderStyle= styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 999;
  height: 64px;
  background: #fff;
  border-bottom: 1px solid ${({theme}) => theme.colors.grey1};
  
  div {
    ${({ theme }) => theme.common.flexCenter};
    justify-content: space-between;
    height: 100%;
    padding: 0 1.5rem;

    h1 {cursor: pointer;}

    nav {
      span{
        cursor: pointer;
        & + span{
          padding-left: 1rem;
          color: ${({ theme }) => theme.colors.main};
          font-weight: 500;
        }
      }
    }
  }
`;

export default HeaderStyle;