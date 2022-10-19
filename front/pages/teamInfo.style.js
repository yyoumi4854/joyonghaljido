import styled, { css } from "styled-components";

const TeamInfoLayout = styled.div`
    height: calc(100vh - 64px - 48px);
    margin-top: 64px;
    background: ${({ theme }) => theme.colors.mainLight2};

    .inner{
        width: 1200px;
        margin: 0 auto;
    }

    h2{
        padding-top: 80px;
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.main};
    }

    .slideSec{
        ${({ theme }) => theme.common.flexCenter};
        margin-top: 60px;
        text-align: center;

        h3{
            font-size: 24px;
            font-weight: 700;
        }

        p.nameList{
            color: ${({ theme }) => theme.colors.grey2};
            margin-top: 12px;
        }
        

        .slideCon{
            width: 560px;
            height: 360px;
            margin-top: 12px;

            .carousel-indicators{
                bottom: 44px;
            }

            .slide{
                /* ${({ theme }) => theme.common.flexCenter};
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
                height: 100%; */
                padding: 24px;
                
                p:nth-child(1){font-size: 32px;}
                p:nth-child(2){
                    font-size: 24px;
                    margin-top: 20px;
                }

                div.tag{
                    margin-top: 20px;
                }
            }
        }
    
    }
    /* margin-top: 64px;

    .title-1{
        font-size : 60px;
        font-weight : 700;
        color : #30C586;
        margin-bottom : 50px;
    }
    .title-2{
        font-size : 40px;
        font-weight : 700;
        color : #30C586;
    }
    .title-2:nth-child(2){
        padding : 40px 0;
    }
    .title-3{
        font-size : 32px;
        font-weight : 700;
        color : #30C586;
    }
    .text{
        font-size : 20px;
        font-weight : 600;
        padding : 20px 0;
        color : ${({ theme }) => theme.colors.grey2};
    }
    .teamText{
        font-size : 40px;
        font-weight : 600;
        color : ${({ theme }) => theme.colors.grey2};
    }
    .sec{
        padding : 30px 150px;
    }
    .sec:first-child{
        padding : 100px 0;
    }
    .sec:nth-child(2){
        padding-top : 100px;
    }
    .sec:last-child{
        padding-bottom : 100px;
    }
    .center{
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : center; 
    }
    .left{
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : start;
    }
    .right{
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : end; 
    }
    .bg{
        background-color : ${({ theme }) => theme.colors.mainLight2}
    }
    .badge{
        padding : 5px 10px;
        margin : 0 5px;
        border-radius: 100px;
        background-color : white;
        color : grey;
    }
    .sub span{
        color : white;
        padding : 0 10px;
    }
    .sub a{
        color : white;
    } */
`;

export default TeamInfoLayout;