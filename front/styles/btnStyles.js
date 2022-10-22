import styled from "styled-components";

// 수정, 삭제, 확인, 취소
const SmallBtn = styled.button`
  width: 100px;
  height: 40px;
  background: ${({ check }) => check === 'yes' ? '#30C586' : '#F5F5F5'};
  color: ${({ check }) => check !== 'yes' || '#fff'};
  border-radius: 4px;
`;

// 소음 리뷰 쓰러가기
const ReviewBtn = styled.div`
  padding: 12px 24px;
  button{
    width: 100%;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.main};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.main};
    transition: all .3s;

    &:hover{
      background: ${({ theme }) => theme.colors.grey4};
      border: 1px solid ${({ theme }) => theme.colors.grey4};
    }
  }
`;

export { SmallBtn, ReviewBtn };