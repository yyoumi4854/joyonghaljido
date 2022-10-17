import styled from 'styled-components'

const Modal_PW_Layout = styled.div`

    .modal {
        z-index:9;
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
        z-index:999;

        h3{
            font-weight:700;
        }
        input{
            padding:5px;
            width:248px;
            height:36px;
        }
        input::placeholder {
            font-weight: bold;
            font-size:14px;
            opacity: .5;
        }
        .wrong{
            font-size:14px;
            color:red;
            margin:10px;
        }
        .space{
            height:14px;
            margin:10px;
        }
    }
`

export default Modal_PW_Layout;