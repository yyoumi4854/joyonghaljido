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

const PinSelectLayout = styled.div`
    .pinInfoCon{
        height: calc(100vh - 64px - 100px - 48px);
        overflow: auto;

        h5.title{
            font-weight: 700;
            font-size: 18px;
            color: ${({ theme }) => theme.colors.main};
        }

        & > div{
            padding: 20px 24px;
            border-bottom: 1px solid ${({ theme }) => theme.colors.grey1};
        }

        // 어느 정도 소음
        .textCon{
            .title{margin-bottom: 16px;}
            
            .textBox{
                ${({ theme }) => theme.common.flexCenter};

                div[class^='pin']{
                    span{
                        width: 50px;
                        height: 60px;
                        text-indent: -9999px;
                    }

                    p{
                        margin-top: 4px;
                        font-weight: 700;
                        text-align: center;
                    }

                    &.pin1{
                        span{
                            ${pin1}
                        }
                        p{color: ${({ theme }) => theme.colors.purple};}
                    }
                    &.pin2{
                        span{
                            ${pin2}
                        }
                        p{color: ${({ theme }) => theme.colors.blue};}
                    }
                    &.pin3{
                        span{
                            ${pin3}
                        }
                        p{color: ${({ theme }) => theme.colors.green};}
                    }
                    &.pin4{
                        span{
                            ${pin4}
                        }
                        p{color: ${({ theme }) => theme.colors.yellow};}
                    }
                    &.pin5{
                        span{
                            ${pin5}
                        }
                        p{color: ${({ theme }) => theme.colors.orange};}
                    }
                    &.pin6{
                        span{
                            ${pin6}
                        }
                        p{color: ${({ theme }) => theme.colors.red};}
                    }
                }

                .infoBox{
                    margin-left: 20px;
            
                    dl{
                        dt{font-weight: 500;}
                        dd{
                            margin-top: 8px;
                            color: ${({ theme }) => theme.colors.grey2};
                            font-weight: 300;
                        }

                        &+dl{margin-top: 16px}
                    }
                }
            }
        }

        // 시간별 소음 그래프
        .graphCon{
            .graphBox{
            }

            div[class^='graphPin']{
                margin-top: 8px;
                dl{
                    ${({ theme }) => theme.common.flexCenter};
                    justify-content: flex-end;
                    dt{
                        width: 28px;
                        height: 10px;
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

                &.graphPin1 dl dt{background: ${({ theme }) => theme.colors.purple};}
                &.graphPin2 dl dt{background: ${({ theme }) => theme.colors.blue};}
                &.graphPin3 dl dt{background: ${({ theme }) => theme.colors.green};}
                &.graphPin4 dl dt{background: ${({ theme }) => theme.colors.yellow};}
                &.graphPin5 dl dt{background: ${({ theme }) => theme.colors.orange};}
                &.graphPin6 dl dt{background: ${({ theme }) => theme.colors.red};}
            }
        }
`;

export default PinSelectLayout;
