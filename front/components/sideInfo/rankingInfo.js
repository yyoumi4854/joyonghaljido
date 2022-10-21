import React from 'react';

// styled
import SideInfoContent from './sideInfoStyles';

const RankingInfo = () => {
  return (
    <SideInfoContent>
      <div className='ranking'>
        <dl>
          <dt>소음 발생량</dt>
          <dd></dd>
        </dl>
        <dl>
          <dt>민원 발생량</dt>
          <dd></dd>
        </dl>
      </div>
    </SideInfoContent>
  );
};

export default RankingInfo;