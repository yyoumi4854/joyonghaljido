import styled, { css } from "styled-components";

const pin1 = css`
    background: url('/images/pins/purplePin.svg') no-repeat center;
    background-size: contain; 
`;

const pin2 = css`
    background: url('/images/pins/bluePin.svg') no-repeat center;
    background-size: contain; 
`;

const pin3 = css`
    background: url('/images/pins/greenPin.svg') no-repeat center;
    background-size: contain; 
`;

const pin4 = css`
    background: url('/images/pins/yellowPin.svg') no-repeat center;
    background-size: contain; 
`;

const pin5 = css`
    background: url('/images/pins/orangePin.svg') no-repeat center;
    background-size: contain; 
`;

const pin6 = css`
    background: url('/images/pins/redPin.svg') no-repeat center;
    background-size: contain; 
`;

const SideInfoContent = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 4px;
  z-index: 990; 

  .ranking{
    dl{
      ${({ theme }) => theme.common.flexCenter}

      dd{
        margin-left: 8px;
        width: 160px;
        height: 16px;
        background: linear-gradient(to right, rgba(245,80,115,0.1) 0%, rgba(245,80,115,1) 100%);
      }

      &+dl{
        margin-top: 16px;
        dd{
          background: linear-gradient(to right, rgba(91,184,251,0.1) 0%, rgba(91,184,251,1) 100%);
        }
      }

    }
  }

  .pinMarker{
    dl{
      dt{
        ${({ theme }) => theme.common.flexCenter}
        font-weight: 700;
        span{
          margin-left: 8px;
        }
      }
      
      dd{
        margin-top: 8px;
        span{
          display: block;
          position: relative;
          padding-left: 20px;
          &::before{
            content: '';
            position: absolute;
            left: 8px;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #333;
          }
          &+span{
            margin-top: 4px;
          }
        }
      }

      &:nth-child(1) dt{
        span{
          width: 179px;
          height: 28px;
          background: url('/images/pinList.png') no-repeat center;
          background-size: contain;
        }
      }

      &:nth-child(2) dt{
        span{
          width: 12px;
          height: 12px;
          background: ${({ theme }) => theme.colors.mainLight1};
          border-radius: 50%;
        }
      }

      &+dl{
        margin-top: 16px;
      }
    }
  }

  .pinLevel{
    dl{
      ${({ theme }) => theme.common.flexCenter}
      &+dl {margin-top: 16px;}

      dt{
        width: 32px;
        height: 32px;
        text-indent: -9999px;
        margin-right: 12px;
      }

      &:nth-child(1) dt{
        ${pin6}
      }
      &:nth-child(2) dt{
        ${pin5}
      }
      &:nth-child(3) dt{
        ${pin4}
      }
      &:nth-child(4) dt{
        ${pin3}
      }
      &:nth-child(5) dt{
        ${pin2}
      }
      &:nth-child(6) dt{
        ${pin1}
      }
    }
  }
`;

export default SideInfoContent;