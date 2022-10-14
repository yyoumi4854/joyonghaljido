import styled from "styled-components";

const ReviewAll= styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;

  button{
    svg{
      width: 40px;
      height: 32px;
      color: ${({ theme }) => theme.colors.main};
    }
  }
  span {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export default ReviewAll;
