import styled from "styled-components";

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
        justify-content: space-between;
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
            width: 580px;
            height: 360px;
            margin-top: 12px;

            .carousel-indicators{
                bottom: 32px;
            }
        }

        .badge{
            padding : 5px 10px;
            margin : 0 5px;
            border-radius: 100px;
            background-color : #fff;
            color : #333;
            font-weight: 400;
        }
        .sub span{
            color : #fff;
            padding : 0 10px;
        }
        .sub a{
            color : white;
        }
    
    }
`;

export default TeamInfoLayout;