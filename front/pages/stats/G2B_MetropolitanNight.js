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
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const  서울	= [65,		65,		66,		66,		66,		66,		66,		66,		65,		66]
const  부산	= [62,		62,		62,		62,		62,		62,		61,		58,		59,		61]
const  대구	= [63,		63,		63,		62,		61,		61,		60,		62,		61,		62]
const  인천	= [63,		62,		62,		62,		62,		61,		62,		61,		61,		61]
const  광주	= [58,		59,		58,		57,		57,		57,		58,		57,		56,		56]
const  대전	= [55,		54,		55,		56,		54,		55,		53,		53,		54,		54]

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '지역별 평균 소음 측정량 (데시벨)',
    },
  },
};

const labels = [2012,	2013,	2014,	2015,	2016,	2017,	2018,	2019,	2020,	2021]

export const data = {
    labels,
    datasets: [
      {
        label: '서울',
        data: 서울,
        borderColor: '#FF0000',
        backgroundColor: '#FA8072',
      },
      {
        label: '부산',
        data: 부산,
        borderColor: '#9ab973',
        backgroundColor: '#abd98c',
      },
      {
        label: '대구',
        data: 대구,
        borderColor: '#cc8899',
        backgroundColor: '#f7bfbe',
      },
      {
        label: '인천',
        data: 인천,
        borderColor: '	#BDB76B	',
        backgroundColor: '#EEE8AA',
      },
      {
        label: '광주',
        data: 광주,
        borderColor: '#B0C4DE',
        backgroundColor: '	#87CEFA',
      },
      {
        label: '대전',
        data: 대전,
        borderColor: '#d2b48c',
        backgroundColor: '#f5deb3',
      },
    ],
  };

export default function G2B_MetropolitanNight() {
  return <Line options={options} data={data} />;
}