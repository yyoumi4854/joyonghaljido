import styled from "styled-components";

const PinSelectLayout = styled.div`

*{
    position: relative;
    width: 384px;
}
hr{ border:solid lightgrey 0.5px;}

.section1{
    padding-top:15px;
    padding-bottom:15px;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    h2{
        font-size: 24px;
        font-weight:bold;
        margin-bottom:10px;
    }
    .Lside{
        width:40px;
        height
        background-color: aliceblue;
        padding-left:10px;
        h2{font-size: 24px;}
    }
    .Rside{
        width:344px;
        line-height:25px;
        h4{
            color : #30C586;
            font-size: 16px;
            line-height: 16px
        }

    }
}

.section2{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    height:168px;
    padding-top:10px;
    .bold{
        font-weight:bold;
    }

    h3{
        color : #30C586;
        font-size: 18px;
        line-height: 18px;
        font-weight: 700;
        left:10px;
    }
    .Lside{
        width:70px;
        height
        background-color: aliceblue;
        padding-left:10px;
        .average{left:14px;}
    }
    .Rside{
        padding-left:10px;
        width:314px;
        line-height:25px;
        .gray{
            color:gray
        }
    }
}

.section3{
    h3{
        color : #30C586;
        font-size: 18px;
        line-height: 18px;
        font-weight: 700;
        left:10px;
    }
}

.toReview{
    margin-top:20px;
    margin-bottom:20px;
    margin-left:24px;
    width:336px;
    border:solid 3px #30C586;
    color : #30C586;
    
}
`;

export default PinSelectLayout;
