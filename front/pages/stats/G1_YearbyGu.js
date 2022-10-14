// import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  // BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  // PointElement,
  // LineElement,
  Title,
  Tooltip,
  Legend
);

const G1_YearbyGu = () => {
  const year = [2005,	2006,	2007,	2008,	2009,	2010,	2011,	2012,	2013,	2014,	2015,	2016,	2017,	2018,	2019,	2020];
  const noise = [12770,	12213,	13196,	16496,	15922,	23396,	21745,	20166,	27558,	31275,	41286,	52557,	55743,	52173,	52868,	60386];
  
  const options = {
    plugins: {
      legend: { // 범례 스타일링
        display: false,
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
        grid: {
          display: false,
        },
        ticks: {
          color: '#C4C4C4',
        }
      },

      y: {
        grid: {
          color: '#E4E5E9',
        },
        ticks: {
          color: '#C4C4C4',
        }
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