import styled from 'styled-components'

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  padding: 24px 0;
  width: 448px;
  height: 196px;
  background: #fff;
  border-radius: 4px;
  z-index: 999;

  h3{
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSizes.titleSubFs};

      &.del{
        margin-top: 16px;
      }
  }

  .inputBox{
    margin-top: 16px;
    & > *{ 
      display: block;
      text-align: center;
    }
    input{
      width: 240px;
      padding: 4px 8px;
      font-family: 'Noto Sans KR', sans-serif;
      border: 1px solid ${({ theme }) => theme.colors.grey1};
      border-radius: 2px;
      font-size: 16px;
      text-align: left;
    }
  
    input::placeholder, textarea::placeholder {
        color: ${({ theme }) => theme.colors.grey1};
        opacity: 1; /* Firefox */
    }
    input:-ms-input-placeholder, textarea:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${({ theme }) => theme.colors.grey1};
    }
    input::-ms-input-placeholder, textarea::-ms-input-placeholder { /* Microsoft Edge */
        color: ${({ theme }) => theme.colors.grey1};
    }
  
    .wrong{
      margin-top: 4px;
      height: 14px;
      font-size: ${({ theme }) => theme.fontSizes.smallFs};
      color: ${({ theme }) => theme.colors.red};
    }

    .timeText{
      margin-top: 16px;
      font-size: ${({ theme }) => theme.fontSizes.smallFs};
      color: ${({ theme }) => theme.colors.grey2};
      line-height: 1.25;
    }
  }


  .btns{
    position: absolute;
    left: 50%;
    bottom: 24px;
    transform: translateX(-50%);
    button:nth-child(2){margin-left: 20px;}
  }
`;

export default ModalContent;