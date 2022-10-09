import styled from "styled-components";

const HeaderStyle= styled.header`
  height: 64px;
  border-bottom: 1px solid red;
  background: ${({ theme }) => theme.colors.main};
  ${({ theme }) => theme.common.flexCenter};
`;

export default HeaderStyle;