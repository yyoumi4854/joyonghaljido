# 조용할지도 프론트엔드

## 환경

### 라이브러리

- 프레임워크<br>
  `next` `12.3.1`

- 데이터 가시화<br>
  `chart.js` `3.9.1`<br>
  `d3-fetch` `3.0.1`<br>
  `d3-scale` `4.0.2`<br>

- 지도 구현<br>
  `react-simple-maps` `3.0.0` <br>
  `react-tooltip` `5.3.6`

- 스타일 툴<br>
  `styled-components` `4.4.2`<br>
  `styled-reset` `4.4.2`<br>
  `react-icon` `1.0.0`<br>
  `react-icons` `4.4.0`

## 파일 구조 설명

```
📦front
 ┣ 📂data
 ┃ ┗ 📂map
 ┃ ┃ ┣ 📜mapColor.js
 ┃ ┃ ┣ 📜pins.js
 ┃ ┃ ┣ 📜seoul.json
 ┃ ┃ ┣ 📜valueData.js
 ┃ ┃ ┣ 📜noiseInfo.js
 ┃ ┃ ┗ 📜zoom.json
 ┣ 📂public
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📂pins
 ┃ ┗ 📂styles
 ┃ ┃ ┣ 📜app.css
 ┃ ┃ ┣ 📜btnStyles.js
 ┃ ┃ ┣ 📜footerStyles.js
 ┃ ┃ ┣ 📜globalStyles.js
 ┃ ┃ ┣ 📜findLayoutStyles.js
 ┃ ┃ ┣ 📜pinSelect.style.js
 ┃ ┃ ┣ 📜indexStyles.js
 ┃ ┃ ┣ 📜reviewAllStyles.js
 ┃ ┃ ┣ 📜titleStyles.js
 ┃ ┃ ┗ 📜theme.js
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📜header.js
 ┃ ┃ ┃ ┗ 📜headerStyles.js
 ┃ ┃ ┣ 📂map
 ┃ ┃ ┃ ┣ 📜map.js
 ┃ ┃ ┃ ┗ 📜mapStyles.js
 ┃ ┃ ┣ 📂pinInfo
 ┃ ┃ ┃ ┣ 📜G4_PinGraph.js
 ┃ ┃ ┃ ┣ 📜noiseInfo.js
 ┃ ┃ ┃ ┣ 📜pinInfo.js
 ┃ ┃ ┃ ┣ 📜pinSelect.js
 ┃ ┃ ┃ ┗ 📜pinSelect.style.js
 ┃ ┃ ┣ 📂ranking
 ┃ ┃ ┃ ┣ 📜rankData.js
 ┃ ┃ ┃ ┣ 📜ranking.js
 ┃ ┃ ┃ ┗ 📜rankingStyles.js
 ┃ ┃ ┣ 📂stats
 ┃ ┃ ┃ ┣ 📜G1_YearbyGu.js
 ┃ ┃ ┃ ┣ 📜G2_Seoul_VS_Else.js
 ┃ ┃ ┃ ┗ 📜G3_EachGu.js
 ┃ ┃ ┣ 📂review
 ┃ ┃ ┃ ┣ 📂modal
 ┃ ┃ ┃ ┃ ┣ 📜outerModal1.style.js
 ┃ ┃ ┃ ┃ ┣ 📜Modal_Ask.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Modal_Ask.style.js
 ┃ ┃ ┃ ┃ ┣ 📜Modal_Deny.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Modal_Deny.style.js
 ┃ ┃ ┃ ┃ ┣ 📜Modal_Pw.style.js
 ┃ ┃ ┃ ┃ ┣ 📜Modal_Pw_Del.jsx
 ┃ ┃ ┃ ┃ ┗ 📜Modal_Pw_Update.jsx
 ┃ ┃ ┃ ┣ 📜outerModal1Styles.js
 ┃ ┃ ┃ ┣ 📜review.js
 ┃ ┃ ┃ ┣ 📜reviewAddForm.js
 ┃ ┃ ┃ ┣ 📜reviewAddForm.style.js
 ┃ ┃ ┃ ┣ 📜reviewEditForm.js
 ┃ ┃ ┃ ┣ 📜reviewList.js
 ┃ ┃ ┃ ┣ 📜reviewListStyles.js
 ┃ ┃ ┃ ┣ 📜reviewNone.js
 ┃ ┃ ┃ ┣ 📜reviewNoneStyles.js
 ┃ ┃ ┃ ┗ 📜tripleDotsModal.js
 ┃ ┃ ┣ 📂sideInfo
 ┃ ┃ ┃ ┣ 📜pinMarkerInfo.js
 ┃ ┃ ┃ ┣ 📜rankingInfo.js
 ┃ ┃ ┃ ┗ 📜sideInfoStyles.js
 ┃ ┗ 📂pages
 ┃ ┃ ┣ 📜find.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜teamInfo.js
 ┃ ┃ ┣ 📜_app.js
 ┃ ┃ ┗ 📜_document.js
 ┗ 📜README.md
```

front 폴더 내 `src`, `data`, `public`

## src

### components

각 기능을 담당하는 컴포넌트를 담고 있습니다.

- **header**<br>
  \- 헤더를 구성하는 컴포넌트입니다.
- **map**<br>
  \- 지도 부분을 나타내는 컴포넌트입니다.
- **pininfo**<br>
  \- 핀을 클릭했을 때 보여 주는 소음 정보 컴포넌트입니다.<br>
  \- 정보 종류: 소음 측정치, 소음의 영향, 시간대별 그래프
- **ranking**<br>
  \- 서울시 지역구 별 소음 및 민원 정보를 순위 별로 보여 주는 컴포넌트입니다.
- **stats**<br>
  \- 메인 페이지에 나타내는 그래프 컴포넌트입니다.
- **review**<br>
  \- 동네별 리뷰 CRUD 컴포넌트입니다.
- **sideInfo**<br>
  \- 지도, 핀, 마커에 대한 부가 설명을 나타내는 컴포넌트입니다.

### pages

라우팅을 하는 컴포넌트를 담고 있습니다.

- **index.js**<br>
  \- 메인 페이지를 구성합니다.
- **find.js**<br>
  \- 동네 찾기 페이지를 구성합니다.
- **teamInfo.js**<br>
  \- 팀 소개 페이지를 구성합니다.

## data

지도에 핀과 마커를 표시하기 위한 좌표 값 등이 정의되어 있습니다.

## public

서비스에 사용된 이미지와 css 파일을 정의하고 있습니다.
