import styled from "styled-components";

const FormContent = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin-top: -64px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;

    .formCon{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 448px;
        padding: 24px;
        background: #fff;
        border-radius: 4px;

        h3{
            font-weight: 700;
            font-size: ${({ theme }) => theme.fontSizes.titleSubFs};
            span{
                color: ${({ theme }) => theme.colors.main};
            }
        }

        .title{
            font-weight: 500;
            font-size: ${({ theme }) => theme.fontSizes.bigFs};
            margin-bottom: 8px;
        }

        .content{
            padding-top: 40px;
        }

        select, input, textarea{
            width: 100%;
            padding: 4px 8px;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 16px;
            border: 1px solid ${({ theme }) => theme.colors.grey1};
            border-radius: 2px;
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



        .selectBox{
            ${({ theme }) => theme.common.flexCenter}
            select + select{
                margin-left: 8px;
            }
        }

        .inputBox{
            textarea{
                margin-top: 4px;
                height: 160px;
                resize: none;
            }
        }
        
        .radioBox{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;

            li{
                ${({ theme }) => theme.common.flexCenter}
                flex-direction: column;

                label{
                    width: 48px;
                    height: 48px;
                    background: url('/images/noiseBad.svg') no-repeat center;
                    cursor: pointer;
                    text-indent: -9999px;
                }

                input[type=radio]{display: none;}
                p{margin-top: 8px;}

                &:nth-child(2) label{background: url('/images/noiseSoso.svg') no-repeat center;}
                &:nth-child(3) label{background: url('/images/noiseGood.svg') no-repeat center;}

                input[type=radio]:checked + label + p{
                    font-weight: 500;
                    color: ${({ theme }) => theme.colors.red};
                }
                &:nth-child(2) input[type=radio]:checked + label + p{color: ${({ theme }) => theme.colors.yellow};}
                &:nth-child(3) input[type=radio]:checked + label + p{color: ${({ theme }) => theme.colors.main};}
            }
        }

        .btnBox{
            ${({ theme }) => theme.common.flexCenter}
            justify-content: center;
            button+button{
                margin-left: 8px;
            }
        }
    }
`;

export default FormContent;

// const ColorDiv1 = styled.div`
//     background-color:red;
//     width:30px;
//     height:30px;
//     float:left;
// `
// const ColorDiv2 = styled.div`
//     background-color:yellow;
//     width:30px;
//     height:30px;
//     float:left;
// `
// const ColorDiv3 = styled.div`
//     background-color:green;
//     width:30px;
//     height:30px;
//     float:left;
// `
// const FloatClear = styled.div`
//     clear:both;
// `

// const FormContainer = styled.div`
//     z-index: 999;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);

//     padding: 15px;

//     background-color:whitesmoke;
//     border: solid 1px black;
// ` 

// export { 
//     ColorDiv1,
//     ColorDiv2,
//     ColorDiv3,
//     FloatClear,
//     FormContainer
// }