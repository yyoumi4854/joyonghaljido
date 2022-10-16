import { SmallBtn } from '../../styles/btnStyles';
import styled from 'styled-components'
import Modal_Ask_Layout  from './Modal_Ask.style';


const Modal_Ask = ({setAskAgainWindow}) => {
  

  const deleteReview = () => {
    // 리뷰 삭제 코드 (API) ...








    alert('삭제되었습니다')
    setAskAgainWindow(false)
  }

  return (
    <Modal_Ask_Layout>
      <div className="modal">
        <h3>정말 삭제하시겠습니까?</h3>
        <br></br>
        <SmallBtn onClick={()=>{setAskAgainWindow(false);}}>취소</SmallBtn>
        <span> &nbsp; &nbsp; </span>
        <SmallBtn type='submit' check='yes' onClick={()=>{deleteReview()}}>확인</SmallBtn>
      </div>
    </Modal_Ask_Layout>
  );


}




export default Modal_Ask;