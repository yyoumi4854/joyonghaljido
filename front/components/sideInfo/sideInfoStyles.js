import styled from "styled-components";

const SideInfoContent = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 2px;
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
`;

export default SideInfoContent;

  /* .info{
    
  } */