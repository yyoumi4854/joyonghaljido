import styled from "styled-components";

const FindLayout = styled.div`
  display: grid;
  grid-template-columns: 441px 1fr;
  overflow: hidden;

  .view{
    display: grid;
    grid-template-rows: 1fr 48px;
    border-right: 1px solid ${({ theme }) => theme.colors.grey1};
  }

  .map{
    background: ${({ theme }) => theme.colors.grey4};
  }
`;

export default FindLayout;