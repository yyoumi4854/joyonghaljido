import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const G2_Seoul_VS_Else = () => {
  const 서울 = [68, 68, 68, 69, 68, 68, 68, 68, 68, 69];
  const 평균 = [62.7, 62.5, 62.3, 62.2, 61.7, 62, 61.6, 61.1, 61.3, 61.8];
  const labels = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

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
    labels,
    datasets: [
      {
        label: "서울",
        data: 서울,
        borderColor: "#F55073",
        backgroundColor: "#F55073",
  
      },
      {
        label: "기타 광역시 평균",
        data: 평균,
        borderColor: "#5BB8FB",
        backgroundColor: "#5BB8FB",
  
      },
    ],
  };

  return (
    <Line options={options} data={data} />
  );
};

export default G2_Seoul_VS_Else;
