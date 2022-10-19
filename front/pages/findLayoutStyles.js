import styled from "styled-components";

const FindLayout = styled.div`
  display: grid;
  grid-template-columns: 441px 1fr;
  margin-top: 64px;
  overflow: hidden;

  .view{
    border-right: 1px solid ${({ theme }) => theme.colors.grey1};
  }
`;

export default FindLayout;