import styled from "styled-components";

const ReviewNoneContent = styled.div`

  .noneCon{
    ${({ theme }) => theme.common.flexCenter};
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: calc(100vh - 64px - 68px - 64px - 48px);

    svg{
      width: 80px;
      height: auto;
      color: #E4E5E9;
    }

    p{
      margin-top: 20px;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.grey2};
    }
  }
`;

export default ReviewNoneContent;
