# 🔕 당신에게 알맞은 조용한 동네를 찾아보세요!

![조용할지도](https://user-images.githubusercontent.com/85475577/196426012-a38c081e-f3ba-4c3c-908d-75a193088674.png)

<br/>

프론트엔드, 백엔드 각각 Readme 파일이 존재합니다.

<br/>

## 📄 개요

---

- 서비스명: 조용할지도
- 기획 기간: 2022.10.03 ~ 2022.10.07
- 개발 기간: 2022.10.07 ~ 2022.10.21
- 주제: 소음 공해
- 목표: 객관적 수치를 활용해 **서울시 소음공해 심각성 가시화** 및 **유저 간 실시간 소음 상황 공유의 장 제공**
- API 문서: [바로가기](https://docs.google.com/spreadsheets/d/1SAP_Yc2HSR3E3hdOgMTEE_jvnj4RDiVaQQbsuSi8bhg/edit#gid=0)
- 테스트 페이지: [바로가기](http://kdt-ai5-team04.elicecoding.com/)

<br/>

## 👨‍👩‍👧‍👦 팀원 소개

---

**박지연**

- Front-End
- katkrarrrr@gmail.com
- Github: [@yeoooon](https://github.com/yeoooon)

**연다은봄**

- Back-End
- robin.yeon@gmail.com
- Github: [@robinyeon](https://github.com/robinyeon)

**유민지**

- Front-End
- yyoumi4854@gmail.com
  -Github: [@yyoumi4854](https://github.com/yyoumi4854)

**윤시준**

- Front-End
- webcodur@gmail.com
- Github: [@webcodur](https://github.com/webcodur)

**채은빈**

- Back-End
- alrxltkfkd@gmail.com
- Github: [@VelyVelyn](https://github.com/VelyVelyn)

**최은오**

- Front-End
- pixel@kakao.com
- Github: [@EunoChoi](https://github.com/EunoChoi)

<br/>

## 기술 스택

---

### Front-End

<div>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" height="20px">
</div>
<br />

### Back-End

<div>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/mongoDB-47A248?style=flat-square&logo=mongoDB&logoColor=white"/>
</div>

<br />

### Server-Infra

<div>
<img src="https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white"/>
<img src="https://img.shields.io/badge/pm2-2B037A?style=flat-square&logo=pm2&logoColor=white"/>
</div>
<br />

## 🗂 프로젝트 구조

### [Front-End 리드미 체크]()

### [Back-End 리드미 체크]()

<br />

## 🔎 주요기능

---

### 🗺️ 소음 시각화 지도

- 서울특별시의 지역구 별 소음 정도를 소음수(LEQ), 민원수(개)에 따라 지도에서 색깔별로 한눈에 파악할 수 있어요.
- 소음 정보를 알고 싶은 지역구를 선택하면 해당 구의 소음 정도와 리뷰를 보여주는 핀과 마커가 나와요.  
  궁금한 지역의 핀과 마커를 클릭해 보세요!

### 📍 소음 정보를 알려주는 핀과 마커

- 핀 : 국가에서 측정한 소음 수치를 바탕으로 소음 정보를 알기 쉽게 설명해 놓았어요.
  1. 소음에 따라 달라지는 **귀여운 이모지**로 어느 정도의 소음인지 파악할 수 있어요.
  2. 시간대별 소음 수치를 보여주는 **그래프**로 어느 시간에 가장 소음이 적고 큰지 확인할 수 있어요.
- 마커 : 지역 주민들이 직접 들려주는 소음에 대한 생생한 리뷰를 볼 수 있어요.
  1. 주민들이 느낀 소음을 이모지로 나타내어 상단에 요약해 놓았어요.
  2. 누구나 소음 리뷰 등록이 가능해요. 내가 사는 지역의 소음 리뷰를 적어볼까요?

### 👨‍👩‍👧‍👦 소음 정보를 공유하는 리뷰 게시판

빠르고 간단하게 소음 리뷰를 작성할 수 있도록 로그인이 필요하지 않은  
비밀번호를 이용한 익명 게시판을 만들었어요.

- 소음 리뷰 작성
  1. 생성할 때 비밀번호를 입력해야해요.
  2. 무분별한 리뷰 포스팅을 막기 위해 IP 계정 당 20초에 리뷰 작성 1개만 가능하도록 되어있어요.
- 소음 리뷰 조회
  1. 조회 시 리뷰 게시물 10개씩 조회가 가능해요.
  2. 유저들이 평가한 소음 정도에 따라 리뷰를 필터링하여 조회할 수 있어요.
- 소음 리뷰 수정, 삭제  
  리뷰를 수정하거나 삭제하려면 생성했을 때 만든 비밀번호를 입력해야 해요.

<br />

## 🏁 테스트 방법

---

1. 해당 프로젝트를 clone 합니다.

   ```
   git clone https://kdt-gitlab.elice.io/ai_track/class05/data_project/team04.git
   ```

2. 프로젝트 실행에 필요한 패키지를 설치합니다.

   ```
   # npm 사용 시

   cd back
   npm install
   ```

   ```
   # yarn 사용 시

   cd back
   yarn
   ```

3. 몽고디비를 연결합니다.

   ```
   -- 몽고디비 아틀라스 사용 시 --

   1. 몽고디비 아틀라스 클라우드 데이터베이스 생성
   2. back 디렉토리의 .env 파일 편집
   3. MONGODB_URL 변수에 DB URL을 삽입
   ```

   ```
   -- 로컬에서 몽고디비 사용 시 --

   1. 몽고디비 설치
   2. back 디렉토리의 .env 파일 편집
   3. MONGODB_URL 변수에 mongodb://localhost:27017/ 삽입
   ```

4. 프론트엔드와 백엔드를 실행합니다.

   ```
   cd back
   npm start
   ```
