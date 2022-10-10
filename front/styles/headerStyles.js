import styled from "styled-components";

const HeaderStyle= styled.header`
  height: 64px;
  border-bottom: 1px solid ${({theme}) => theme.colors.grey1};
  
  div {
    ${({ theme }) => theme.common.flexCenter};
    justify-content: space-between;
    height: 100%;
    padding: 0 1.5rem;

    nav {
      font-size: ${({ theme }) => theme.fontSizes.bigFs};
      span + span{
        padding-left: 1rem;
        color: ${({ theme }) => theme.colors.main};
        font-weight: 700;
      }
    }
  }
`;

export default HeaderStyle;