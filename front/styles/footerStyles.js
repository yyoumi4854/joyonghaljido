import styled from "styled-components";

const FooterStyle= styled.footer`
  height: 48px;
  background: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.smallFs};
  color: #fff;
  text-align: center;
  line-height: 48px;
`;

export default FooterStyle;