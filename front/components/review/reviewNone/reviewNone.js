// styled
import ReviewNoneContent from './reviewNoneStyles';

// react-icon
import { FaSurprise } from "react-icons/fa";

const ReviewNone = ({setIsWriting}) => {
  return (
    <ReviewNoneContent>
      <div className='noneCon'>
        <FaSurprise/>
        <p>등록된 소음 리뷰가 없습니다</p>
      </div>
    </ReviewNoneContent>
  );
};

export default ReviewNone;