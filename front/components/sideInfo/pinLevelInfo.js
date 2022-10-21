// styled
import SideInfoContent from './sideInfoStyles';

const PinLevelInfo = () => {
  return (
    <SideInfoContent>
      <div className='pinLevel'>
        <dl>
          <dt>빨강</dt>
          <dd>70초과</dd>
        </dl>
        <dl>
          <dt>주황</dt>
          <dd>65초과 70이하</dd>
        </dl>
        <dl>
          <dt>노랑</dt>
          <dd>60초과 65이하</dd>
        </dl>
        <dl>
          <dt>초록</dt>
          <dd>55초과 60이하</dd>
        </dl>
        <dl>
          <dt>파랑</dt>
          <dd>50초과 5이하</dd>
        </dl>
        <dl>
          <dt>보라</dt>
          <dd>50이하</dd>
        </dl>
      </div>
    </SideInfoContent>
  );
};

export default PinLevelInfo;