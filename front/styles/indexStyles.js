import styled, {css} from "styled-components";

const inner = css`
    max-width: 1200px;
    margin: 0 auto;
`;

const IndexStyle = styled.div`
    text-align: center;

    .banner{
        height: 480px;
        background: ${({ theme }) => theme.colors.mainLight2};
        &>div{
            ${inner}
            height: 100%;
            background: url('/images/mainBg.jpg') no-repeat center;
            background-size: contain;

            .textCon{
                padding-top: 148px;
                p{
                    margin-bottom: 16px;
                    color: ${({ theme }) => theme.colors.main};
                    font-size: 20px;
                }
                h2{
                    font-size: ${({ theme }) => theme.fontSizes.titleFs};
                    font-weight: 700;
                    &.twoLines{line-height: 1.25;}
                }
            }

            button{
                width: 200px;
                height: 32px;
                margin-top: 60px;
                background: ${({ theme }) => theme.colors.main};
                border-radius: 32px;
                color: #fff;
            }
        }
    }

    section{
        padding: 120px 0;
        h2{
            font-size: 32px;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.main};
            &.twoLines{line-height: 1.25;}
        }

        .textBox{
            padding-top: 40px;
            line-height: 1.25;
            span{font-weight: 700;}
        }

        .graph{
            margin: 40px auto 0 auto;
            width: 1000px;
        }
        &.dayNight{
            background: ${({ theme }) => theme.colors.mainLight2};;
        }
    }

    .questions{
        h2{
            font-size: 48px;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.main};
        }
        .imgBox{
            height: 435px;
            margin-top: 80px;
            background: url('/images/2.png') no-repeat center;
            background-size: contain;
        }
    }
`;
export default IndexStyle;


