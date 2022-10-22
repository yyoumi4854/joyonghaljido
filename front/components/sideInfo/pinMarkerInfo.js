import React from 'react';

// styled
import SideInfoContent from './sideInfoStyles';

const PinMarkerInfo = () => {
  return (
    <SideInfoContent>
      <div className='pinMarker'>
        <dl>
          <dt>핀<span></span></dt>
          <dd>
            <span>서울특별시 소음 측정 지점을 나타냅니다.</span>
            <span>총 6단계의 소음단계가 있습니다.</span>
            <span>클릭 시 소음 정도와 시간별 소음 데이터를 볼 수 있습니다.</span>
          </dd>
        </dl>
        <dl>
          <dt>마커<span></span></dt>
          <dd>
            <span>서울특별시 동별 소음 리뷰를  나타냅니다.</span>
            <span>클릭 시 해당 동 주민들의 생생한 소음 리뷰를 볼 수 있습니다.</span>
          </dd>
        </dl>
      </div>
    </SideInfoContent>
  );
};

export default PinMarkerInfo;