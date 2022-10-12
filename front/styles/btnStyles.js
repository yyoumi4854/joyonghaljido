import styled from "styled-components";

// 수정, 삭제, 확인, 취소
const SmallBtn = styled.button`
  width: 100px;
  height: 40px;
  background: ${({check}) => check === 'yes' ? '#30C586' : '#F5F5F5'};
  color: ${({check}) => check !== 'yes' || '#fff'};
  border-radius: 4px;
`;

// 소음 리뷰 쓰러가기, 소음 리뷰 10개 더보기
const LongBtn = styled.button`
  width: 100%;
  height: 40px;
  background: ${({check}) => check === 'more' ? '#F5F5F5' : '#fff'};
  border: 2px solid ${({check}) => check === 'more' || '#30C586'};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.main};

`;

export {SmallBtn, LongBtn};