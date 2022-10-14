// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const labels = [2005,	2006,	2007,	2008,	2009,	2010,	2011,	2012,	2013,	2014,	2015,	2016,	2017,	2018,	2019,	2020]
// const noise = [12770,	12213,	13196,	16496,	15922,	23396,	21745,	20166,	27558,	31275,	41286,	52557,	55743,	52173,	52868,	60386]


// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top'
//     },
//     title: {
//       display: true,
//       text: '',
//     },
//   },
// };

// export const data = {
//   labels,
//   datasets: [
//     {
//       type:'bar',
//       label: '서울시 연도별 소음민원 발생량',
//       data: noise,
//       backgroundColor: '#F8859D',
//     },
//   ],
// };

// export default function G1_YearbyGu() {
//     return <Bar 
//       data={data}
//       options={options} 
//     />;
// }

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const G1_YearbyGu = () => {
  const year = [2005,	2006,	2007,	2008,	2009,	2010,	2011,	2012,	2013,	2014,	2015,	2016,	2017,	2018,	2019,	2020];
  const noise = [12770,	12213,	13196,	16496,	15922,	23396,	21745,	20166,	27558,	31275,	41286,	52557,	55743,	52173,	52868,	60386];
  
  const options = {
    plugins: {
      legend: { // 범례 스타일링
        position: 'bottom',
        labels:{
          usePointStyle: true, // false 직사각형, true 원
          padding: 10, // 범례 간 간격 지정, 상하x
          font: {
            family: "'Noto Sans KR', sans-serif",
            size: '14px',
          }
        }
      },

      tooltip:{ // 툴팁 스타일
        padding: 8,
        backgroundColor: '#F5F5F5', // 툴팁배경
        titleColor: '#333',
        bodyColor: '#333',
        bodyFont: {
          font: {
            family: "'Noto Sans KR', sans-serif",
          }
        }
      }
    },

    scales: { // x축과 y축 설정
      x: {
        grid: { // 축을 기준으로 그려지는 선(세로선) 설정
          display: false, // true하면 세로줄이 그려짐
        }
      },

      y: {
        grid: {
          // color: '#30C586',
        },
      },
    }
  }

  const data = {
    labels: year, // x축
    datasets: [
      {
        type:'bar', // 그래프타입
        label: '소음민원', // 레이블
        borderWidth: 1, // 테두리 두께
        backgroundColor: 'rgba(245, 80, 115, 0.8)',
        data: noise, // 그래프 높이
      }
    ]
  }

  return (
    <Bar data={data} options={options}/>
  );
};

export default G1_YearbyGu;