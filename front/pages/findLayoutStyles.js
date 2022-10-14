import styled from "styled-components";

const FindLayout = styled.div`
  display: grid;
  grid-template-columns: 441px 1fr;
  margin-top: 64px;
  overflow: hidden;

  .view{
    display: grid;
    grid-template-rows: 1fr 48px;
    border-right: 1px solid ${({ theme }) => theme.colors.grey1};
  }

  .map{
    background: ${({ theme }) => theme.colors.grey4};
  }

  .dark {
    position: fixed;
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto; 
    background-color: rgb(0, 0, 0); 
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export default FindLayout;