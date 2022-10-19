import styled, {css} from "styled-components";

const inner = css`
    max-width: 1200px;
    margin: 0 auto;
`;

const IndexStyle = styled.div`
    margin-top: 64px;
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
                width: 224px;
                height: 32px;
                margin-top: 60px;
                background: ${({ theme }) => theme.colors.main};
                border-radius: 32px;
                color: #fff;
                transition: all .3s;

                &:hover{
                    background: #59D19E;
                }
            }
        }
    }

    .questions{
        padding: 120px 0;
        h2{
            font-size: 48px;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.main};
        }
        .imgBox{
            height: 435px;
            margin-top: 80px;
            background: url('/images/questionsBg.png') no-repeat center;
            background-size: contain;
        }
    }

    section.sec{
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
            width: 800px;
            margin: 100px auto 0 auto;

            p{
                color: ${({ theme }) => theme.colors.grey2};
            }

            
            .graphBox{
                position: relative;
                width: 100%;
                margin-top: 8px;
                z-index: 20;
                
                &.graph3Box{
                    margin-bottom: 40px;
                }


                p{
                    position: absolute;
                    bottom: -20px;
                    color: #30C586;
                    font-weight: 500;
                }
                p:first-of-type{left: 34px;} 
                p:last-of-type{right: -7px;} 
            }
            .label{
                margin-top: 16px;
                dl{
                    ${({ theme }) => theme.common.flexCenter};
                    justify-content: flex-end;
                    dt{
                        width: 28px;
                        height: 10px;
                        background: rgba(245, 80, 115, 0.8);
                    }
                    dd{
                        margin-left: 8px;
                        font-weight: 300;
                        font-size: 14px;
                        color: ${({ theme }) => theme.colors.grey1};
                    }

                    &+dl{
                        margin-top: 8px;
                    }
                }

                &.graph2{
                    dl:nth-child(1) dt{background: #F55073;}
                    dl:nth-child(2) dt{background: #5BB8FB;}
                }
                &.graph3{
                    dl:nth-child(1) dt{background: rgba(245, 80, 115, 0.8);}
                    dl:nth-child(2) dt{background: #5BB8FB;}
                }
            }

            // 배경
            .graphCon{
                position: relative;
                height: 400px;
            }

            .bg{
                position: absolute;
                top: 19px;
                left: 28px;
                width: 757px;
                height: 360px;
                background: #fff;
                z-index: 10;
            }
            .posi{
                position: absolute;
                top: 0;
                left: 0;
            }
        }

        &.bg{
            background: ${({ theme }) => theme.colors.mainLight2};;
        }
    }
`;
export default IndexStyle;


