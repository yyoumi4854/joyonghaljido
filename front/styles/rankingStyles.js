import styled from "styled-components";

const RankingContent = styled.div`
  ul.tab{
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    li{
      text-align: center;
      line-height: 60px;
      color: #fff;
      background: ${({ theme }) => theme.colors.mainLight1};
      cursor: pointer;
      
      &.active{background: ${({ theme }) => theme.colors.main}}
      &:nth-child(2){}
    }
  }

  .ranking{
    padding: 0 24px;
    height: calc(100vh - 64px - 60px - 68px - 48px);
    overflow: auto;

    li{
      ${({ theme }) => theme.common.flexCenter}
      justify-content: space-between;
      padding: 16px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};

      p{
        font-weight: 500;
        font-size: ${({ theme }) => theme.fontSizes.bigFs};
      }
      span{
        font-weight: 300;
        color: ${({ theme }) => theme.colors.grey2};
      }
    }
  }
`;
export default RankingContent;
