# 🔕 당신에게 알맞은 조용한 동네를 찾아보세요!

<br/>

<img src="https://user-images.githubusercontent.com/85475577/196641841-5b755230-8325-4e40-a66d-d29b054b06e2.svg" alt="logo" width="40%" />    

<br/>

## 📄 개요

- 서비스명: 조용할지도
- 기획 기간: 2022.10.03 ~ 2022.10.07
- 개발 기간: 2022.10.07 ~ 2022.10.21
- 주제: 소음 공해
- 목표: 객관적 수치를 활용해 **서울시 소음공해 심각성 가시화** 및 **유저 간 실시간 소음 상황 공유의 장 제공**
- API 문서: [바로가기](https://docs.google.com/spreadsheets/d/1SAP_Yc2HSR3E3hdOgMTEE_jvnj4RDiVaQQbsuSi8bhg/edit#gid=0)
- 테스트 페이지: [바로가기](http://kdt-ai5-team04.elicecoding.com/)

<br/>

## 🫶 팀원 소개

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
- Github: [@yyoumi4854](https://github.com/yyoumi4854)

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

### [Front-End ](#)

### [Back-End](#)

<br />

## 🔎 주요기능

### 🏰 혹시 어제도 시끄러우셨나요?

<img src="https://user-images.githubusercontent.com/85475577/196637727-8fa5aa3e-50ca-46f6-b4c5-028c54ea75c4.png" alt="메인인사이트3" width="33%" /><img src="https://user-images.githubusercontent.com/85475577/196637718-f4bfcaff-d19b-46d1-9ab6-2f490d8bf0cf.png" alt="메인인사이트2" width="33%" /><img src="https://user-images.githubusercontent.com/85475577/196637711-3937fc30-20a7-4c95-abc5-f79f5fba63c9.png" alt="메인인사이트1" width="33%" />

- WHO, UNEA는 미세먼지 다음으로 건강을 위협하는 환경요인으로 **소음 공해**를 뽑았어요.
- 메인 화면에서는 소음 공해를, 특히 **서울특별시의 상황**을 그래프들로 보여줘서 그 심각성을 강조하고 있어요.

<br/>

### 🗺️ 소음 시각화 지도

![서울시지도화면](https://user-images.githubusercontent.com/85475577/196633061-b1a0b169-e68e-4e6e-9eb2-1a24078f6038.png)

#### 서울특별시 전체 지도를 통해 소음과 민원 발생량을 파악할 수 있어요.

- 데시벨과 민원 건수에 따라 **빨간색, 파란색** 지도로 표현돼요.
- **명도**에 따라 소음 및 민원 발생량을 한번에 파악할 수 있어요.
- 좌측 목록을 통해 **수치순, 글자순**으로 자치구별 소음 데시벨과 민원 건수를 확인해보세요!

<br/>

![구진입화면](https://user-images.githubusercontent.com/85475577/196633872-57b51adc-6878-4edb-8f9d-623e2f209ec4.png)

#### 궁금한 자치구를 클릭하면 해당 구의 지도를 확인할 수 있어요.

- 소음 정보를 알고 싶은 자치구를 클릭하면 **해당 구의 지도**가 나와요.
- 왼쪽 목록에서,
  1.  해당 자치구에 적힌 **전체 리뷰와 개수**를 확인할 수 있어요.
  2.  해당 구가 어느정도 시끄러운지 **평균 소음을 색깔 이모지**로 쉽게 확인 가능해요.
  3.  `🙂좋음 😐보통 🙁나쁨` 각 단계 별 소음리뷰도 **필터링**해서 확인할 수 있어요.

<br/>

![핀클릭시화면](https://user-images.githubusercontent.com/85475577/196635019-fb82eb80-daaa-42be-a649-79e45c712f70.png)

#### 📌 소음 정보를 알려주는 핀과 마커
- 📍 핀 : [국가에서 선정한 소음 측정지점](https://www.noiseinfo.or.kr/)을 바탕으로 소음 정보를 알기 쉽게 설명해 놓았어요.
  1. 소음 정도에 따라 귀여운 **이모지 색깔**이 달라서 어느 정도의 소음인지 파악할 수 있어요.
  2. 핀을 클릭하면,
     a. 해당 측정지점의 **평균 소음도**와 그 데시벨이 끼치는 **영향**을 확인 할 수 있어요.
     b. 시간대별 소음 수치를 보여주는 **그래프**로 어느 시간이 가장 시끄러운지 체크해보세요.
- 🟢 마커 : 해당 동의 사람들이 직접 들려주는 소음 리뷰를 볼 수 있어요.
  1. 주민들이 느낀 소음을 이모지로 나타내어 상단에 요약해 놓았어요.
  2. 누구나 소음 리뷰 등록이 가능해요. 내가 사는 지역의 소음 리뷰를 적어볼까요?

<br/>

### ✏️ 소음 정보를 공유하는 리뷰 게시판

**빠르고 간단하게 소음 리뷰를 작성**할 수 있도록 로그인이 필요하지 않은, **비밀번호**만을 이용한 익명 게시판을 만들어봤어요.

![리뷰작성화면](https://user-images.githubusercontent.com/85475577/196635811-5353d253-6be8-4585-a609-dbeaf323b59f.png)

#### 소음 리뷰 작성
- 리뷰를 작성하기 위해선 **비밀번호**를 입력해야해요.
- 무분별한 리뷰 포스팅을 막기 위해 **IP 계정 당 20초에 리뷰 1개**만 작성하도록 되어있어요.

#### 소음 리뷰 조회
- 조회 시 리뷰 게시물 **10개씩 조회**가 가능해요.
- 유저들이 평가한 소음 정도에 따라 리뷰를 **필터링**하여 조회할 수 있어요.

#### 소음 리뷰 수정, 삭제
- 리뷰를 수정하거나 삭제하려면 생성했을 때 만든 비밀번호를 입력해야 해요.

<br />

## 🏁 테스트 방법

---

1. 해당 프로젝트를 clone 합니다.

   ```
   git clone https://kdt-gitlab.elice.io/ai_track/class05/data_project/team04.git
   ```

2. 프로젝트 실행에 필요한 패키지를 설치합니다.

   ```
   cd front
   npm install

   cd back
   npm install
   ```


3. 몽고디비를 연결합니다.
MongoDB가 준비되어 있다는 가정 하에,
initData가 존재하고 해당 데이터를 어떤 컬렉션에 어떻게 넣어야 정상 동작하는지 적어주시면 될 것 같아요!

   ```
   1. back 폴더의 initData를 확인합니다.
   2. gus.json : 모든 자치구의 GeoJSON을 담고 있습니다.
     - `gus` 컬렉션을 생성해 임포트 합니다.
   3. dongs.json: 모든 행정동의 정보를 담고 있습니다.
     - `dongs` 컬렉션을 생성해 임포트 합니다.
   4. pins.json: 모든 측정지점(핀)의 정보를 담고 있습니다.
     - `pins` 컬렉션을 생성해 임포트 합니다.
   5. `reviews` 컬렉션을 생성하여 리뷰 CRUD를 확인합니다.
   ```

4. 프론트엔드와 백엔드를 실행합니다.

   ```
   cd front
   npm run dev
   
   cd back
   npm start
   ```
