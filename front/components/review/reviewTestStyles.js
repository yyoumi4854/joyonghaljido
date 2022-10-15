import styled from "styled-components";

const ReviewTestContent = styled.div`
  .noiseTab{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey1};

    li{
      padding: 20px 0;
      text-align: center;

      span{
        width: 32px;
        height: 32px;
        background: url('/images/noiseGood.svg') no-repeat center;
        background-size: contain;        
        text-indent: -9999px;
        cursor: pointer;
      }
      p{margin-top: 4px;}

      &:nth-child(2) span{
        background: url('/images/noiseSoso.svg') no-repeat center;
        background-size: contain;
      }
      &:nth-child(3) span{
        background: url('/images/noiseBad.svg') no-repeat center;
        background-size: contain;
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
    padding: 0 24px;
    height: calc(100vh - 64px - 68px - 94px - 48px);
    overflow: auto;

    ul{
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
          background: url('/images/noiseGood.svg') no-repeat center;
          background-size: contain;

        }

        .good{
          span{
            background: url('/images/noiseGood.svg') no-repeat center;
            background-size: contain;
          }
        }
        .soso{
          span{
            background: url('/images/noiseSoso.svg') no-repeat center;
            background-size: contain;
          }
        }
        .bad{
          span{
            background: url('/images/noiseBad.svg') no-repeat center;
            background-size: contain;
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
`;
export default ReviewTestContent;

// label{
//   width: 48px;
//   height: 48px;
//   background: url('/images/noiseBad.svg') no-repeat center;
//   cursor: pointer;
//   text-indent: -9999px;
// }

// input[type=radio]{display: none;}
// p{margin-top: 8px;}

// &:nth-child(2) label{background: url('/images/noiseSoso.svg') no-repeat center;}
// &:nth-child(3) label{background: url('/images/noiseGood.svg') no-repeat center;}