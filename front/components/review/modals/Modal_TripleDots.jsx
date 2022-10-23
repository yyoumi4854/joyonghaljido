import styled from "styled-components";
import OuterModal from './modalStyles/outerModalStyle2';

const TripleDotsModalStyle = styled.div`
  z-index:1000;
    position: absolute;
    top: -1px;
    right: -24px;
    button{
        ${({ theme }) => theme.common.flexCenter};
        flex-direction: column;
        padding: 8px 12px;
        background-color: ${({ theme }) => theme.colors.grey4};
        border: 1px solid ${({ theme }) => theme.colors.grey3};
        color: ${({ theme }) => theme.colors.grey2};

        :hover{
            color: ${({ theme }) => theme.colors.main};
        }
    
    .ud_btn{
        z-index:5;
    }
`;

const TripleDotsModal = ({ setModal,x,setReviewObj, setTripleDotModal}) => {

  let innerScreen = 0
  let outerScreen = 0
  const outerCheck = () => {
    if(innerScreen + outerScreen == 1) setTripleDotModal(false)
    innerScreen = 0; outerScreen = 0;
  }
  const innerCheck = () => {
    innerScreen = 0; outerScreen = 0;
  }
  
  const putBtnClicked = () => {
    setModal("pw_update");
    setTripleDotModal(false)
    setReviewObj(()=>x);
  }
  const delBtnClicked = () => {
    setModal("chk");
    setTripleDotModal(false)
    setReviewObj(()=>x);
  }
  return (
    <>
      <OuterModal onClick={() => { outerScreen++; outerCheck(); }}></OuterModal >
      <TripleDotsModalStyle onClick={() => { innerScreen++; innerCheck(); }}>
        <button className='ud_btn' onClick={() => { putBtnClicked() }}>수정</button>
        <button className='ud_btn' onClick={() => { delBtnClicked() }}>삭제</button>
      </TripleDotsModalStyle>
    </>
  );
}

export default TripleDotsModal;