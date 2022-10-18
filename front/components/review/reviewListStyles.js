import styled, { css } from "styled-components";

const noiseLevel1 = css`
  background: url('/images/noiseBad.svg') no-repeat center;
  background-size: contain; 
`;

const noiseLevel2 = css`
  background: url('/images/noiseSoso.svg') no-repeat center;
  background-size: contain; 
`;

const noiseLevel3 = css`
  background: url('/images/noiseGood.svg') no-repeat center;
  background-size: contain; 
`;

const ReviewListContent = styled.div`
  .noiseAvgCon{
    ${({ theme }) => theme.common.flexCenter};
    justify-content: center;
    padding: 20px 0;
    background: ${({ theme }) => theme.colors.mainLight2};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey1};

    span[class^='noiseLevel']{
      width: 48px;
      height: 48px;
      text-indent: -9999px;
    }

    p{
      line-height: 1.25;
    }

    .noiseLevel1{
      ${noiseLevel1}
      &+p span{
        color: ${({ theme }) => theme.colors.red};
      }
    }
    .noiseLevel2{
      ${noiseLevel2}
      &+p span{
        color: ${({ theme }) => theme.colors.yellow};
      }
    }
    .noiseLevel3{
      ${noiseLevel3}
      &+p span{
        color: ${({ theme }) => theme.colors.main};
      }
    }

    p{
      margin-left: 20px;
      font-size: ${({ theme }) => theme.fontSizes.bigFs};
      span{
        font-weight: 700;
      }
    }
  }

  .noiseTab{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey1};

    li{
      padding: 12px 0;
      text-align: center;

      span{
        width: 32px;
        height: 32px;
        ${noiseLevel3}    
        text-indent: -9999px;
        cursor: pointer;
      }
      p{margin-top: 4px;}

      &:nth-child(2) span{
        ${noiseLevel2}
      }
      &:nth-child(3) span{
        ${noiseLevel1}
      }

      &.active p{
        font-weight: 500;
        color: ${({ theme }) => theme.colors.main};
      }
      &:nth-child(2).active p{
        color: ${({ theme }) => theme.colors.yellow};
      }
      &:nth-child(3).active p{
        color: ${({ theme }) => theme.colors.red};
      }
    }
  }

  .reviewList{
    ${({ theme }) => theme.common.flexCenter};
    flex-direction: column;

    height: calc(100vh - 64px - 89px - 68px - 77px - 64px - 48px);
    padding: 0 24px;
    overflow: auto;

    ul{
      width: 100%;
      li{
        display: grid;
        grid-template-columns: 32px 1fr;
        position: relative;
        padding: 16px 0;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};

        .level{
          width: 32px;
          height: 32px;
          text-indent: -9999px;
        }

        .noiseLevel3{
          span{
            ${noiseLevel3}
          }
        }
        .noiseLevel2{
          span{
            ${noiseLevel2}
          }
        }
        .noiseLevel1{
          span{
            ${noiseLevel1}
          }
        }

        .reviewTextCon{
          margin-left: 12px;
          .textTop{
            ${({ theme }) => theme.common.flexCenter};
            p{
              font-weight: 700;
              font-size: 18px;
            }
            span{
              margin-left: 8px;
              font-weight: 300;
              font-size: 14px;
              color: ${({ theme }) => theme.colors.grey1};
            }
          }

          .textBottom{
            position: relative;
            p{
              margin-top: 8px;
              color: ${({ theme }) => theme.colors.grey2};
              line-height: 1.25;
              overflow: hidden;

              button{
                font-size: 16px;
                font-weight: 700;
                color: ${({ theme }) => theme.colors.grey1};
                background: #fff;
              }
            }
          }

          .dongTag{
            margin-top: 8px;
            padding: 4px 12px;
            font-size: 14px;
            color: ${({ theme }) => theme.colors.main};
            background: ${({ theme }) => theme.colors.mainLight2};
            border-radius: 24px;
          }
        }

        .editBtn{
          position: absolute;
          top: 12px;
          right: -14px;
          svg{
            width: 32px;
            height: auto;
            color: ${({ theme }) => theme.colors.grey1};
          }
        }
      }
    }
  }

  .reviewAddBtn{
    margin-top: 12px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.main};
    transition: .3s;
    svg{vertical-align: text-top;}
  }
  `;
export default ReviewListContent;

