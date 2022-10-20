# 조용할지도 백엔드

📌 [**조용할지도 API 명세**](https://docs.google.com/spreadsheets/d/1SAP_Yc2HSR3E3hdOgMTEE_jvnj4RDiVaQQbsuSi8bhg/edit#gid=0)

<br/>

<br/>

## 용어 설명

![gu_pins_dongs](https://user-images.githubusercontent.com/85475577/196342058-bb89fd54-65c6-4aee-a871-76a0f6ceaa4a.png)

- 핀: [국가소음정보시스템](https://www.noiseinfo.or.kr/) 제공 서울특별시 내 150개 소음 측정지점  
  \- 표정 아이콘  
  \- 소음단계별 색상 상이

- 마커: 자치구 별 행정동  
  \- 초록색 점: 색상 하나로 통일

<br/>

## 환경

### 서버

`express` `4.18.1`  
`MongoDB` `5.0.13`

### 환경변수

```javascript
exports.PORT = Server port number (Default: 5001)
exports.MONGODB_URL = MongoDB URI
exports.SALT_ROUND = Password hashing salt count
```

<br/>

## 파일 구조 설명
```
📦back
 ┣ 📂initData
 ┣ 📂src
 ┃ ┣ 📂constants
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂db
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┣ 📜Dong.js
 ┃ ┃ ┃ ┣ 📜Gu.js
 ┃ ┃ ┃ ┣ 📜Pin.js
 ┃ ┃ ┃ ┗ 📜Review.js
 ┃ ┃ ┣ 📂schemas
 ┃ ┃ ┃ ┣ 📜dong.js
 ┃ ┃ ┃ ┣ 📜gu.js
 ┃ ┃ ┃ ┣ 📜pin.js
 ┃ ┃ ┃ ┗ 📜review.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂middlewares
 ┃ ┃ ┣ 📜errorMiddleware.js
 ┃ ┃ ┣ 📜ipLimitMiddleware.js
 ┃ ┃ ┗ 📜passwordMiddleware.js
 ┃ ┣ 📂routers
 ┃ ┃ ┣ 📜dongRouter.js
 ┃ ┃ ┣ 📜guRouter.js
 ┃ ┃ ┣ 📜locationRouter.js
 ┃ ┃ ┣ 📜pinRouter.js
 ┃ ┃ ┗ 📜reviewRouter.js
 ┃ ┗ 📂services
 ┃   ┣ 📜dongService.js
 ┃   ┣ 📜guService.js
 ┃   ┣ 📜locationService.js
 ┃   ┣ 📜pinService.js
 ┃   ┗ 📜reviewService.js
 ┗ 📜app.js

 
```

src 폴더 내 `routers`, `services`, `models`, `schemas`, `middlewares`, `constants`

### routers

request와 response가 처리됩니다.

- **reviewRouter**  
  \- 자치구 및 동 별 리뷰 CRUD  
  \- 비밀번호 체크: 리뷰 Update용
- **locationRouter**  
  \- 자치구별 이름 및 ObjectId 리스트  
  \- 자치구별 동과 핀 리스트
- **guRouter**  
  \- 자치구 별 GeoJSON
- **dongRouter**
- **pinRouter**

<br/>

### services

하나 이상의 model을 활용하여 로직을 구현합니다.

- **reviewService**
- **locationService**
- **guService**
- **dongService**
- **pinService**

<br/>

### db

#### models

MongoDB에 직접 접근하여 로직을 구현합니다.

- **Review**
- **Gu**
- **Dong**
- **Pin**

#### schemas

Mongoose 스키마를 정의합니다.

<br/>

### middlewares

- **errorMiddleware**  
  \-에러 처리 미들웨어
- **ipLimitMiddleware**  
  \- 리뷰 게시판 스팸 방지 미들웨어  
  \- IP 별 시간 당 게시글 1개 제한
- **passwordMiddleware**  
  \- 비밀번호 체크

<br/>

### constants

환경변수를 포함한 상수들을 정의합니다.
