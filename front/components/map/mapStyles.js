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
    /* background: red; */
  }

  .mapCon{
    width: 100%;
    height: calc(100vh - 64px);
    background: ${({ theme }) => theme.colors.grey4};
  }
`;

export default MapContent;