import styled from 'styled-components'

const Modal_Deny_Layouot = styled.div`
  .modal {
    z-index:999;
    position: fixed;
    left : calc(50% - 224px);
    top :  calc(50% - 96px);
    background-color: #fefefe;
    margin: 0 auto;
    text-align:center;
    width : 448px;
    height : 192px;
    padding: 20px;
    padding-left:10px;
    border: 1px solid #888;
    h3{
        font-weight:700;
    }
  }
`

export default Modal_Deny_Layouot;