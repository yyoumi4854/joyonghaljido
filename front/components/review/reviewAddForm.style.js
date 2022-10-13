import styled from "styled-components";

const ColorDiv1 = styled.div`
    background-color:red;
    width:30px;
    height:30px;
    float:left;
`
const ColorDiv2 = styled.div`
    background-color:yellow;
    width:30px;
    height:30px;
    float:left;
`
const ColorDiv3 = styled.div`
    background-color:green;
    width:30px;
    height:30px;
    float:left;
`
const FloatClear = styled.div`
    clear:both;
`

const FormContainer = styled.div`
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 15px;

    background-color:whitesmoke;
    border: solid 1px black;
` 

export { 
    ColorDiv1,
    ColorDiv2,
    ColorDiv3,
    FloatClear,
    FormContainer
}