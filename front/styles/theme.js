const fontSizes = {
  titleFs: '36px',
  titleSubFs: '24px',
  bigFs: '18px',
  smallFs: '14px'
};

const colors = {
  main : '#30C586', // 프로필좋음
  mainLight1 : '#83DCB6',
  mainLight2 : '#EBFAF3',

  grey1: '#C4C4C4', // 메뉴선 레이아웃선, 티아틀라인
  grey2: '#999', // 회색글씨,
  grey3: '#E4E5E9', // 지도, 리뷰없음표정
  grey4: '#F5F5F5', // 지도배경, 회색버튼
  grey5: '#E9E8E8', // 순위리스트라인, 리뷰리스트라인

  red:  '#E35753',//프로필나쁨
  orange: '#E78732',
  yellow: '#F1D14D', //프로필보통
  green: '#57CB6A',
  blue: '#377ED2',
  purple: '#7352DE',
};

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
};

const theme = {
  fontSizes,
  colors,
  common,
};

export default theme;