import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [2005,	2006,	2007,	2008,	2009,	2010,	2011,	2012,	2013,	2014,	2015,	2016,	2017,	2018,	2019,	2020]
const noise = [12770,	12213,	13196,	16496,	15922,	23396,	21745,	20166,	27558,	31275,	41286,	52557,	55743,	52173,	52868,	60386]


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: '',
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      type:'bar',
      label: '서울시 연도별 소음민원 발생량',
      data: noise,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function G1_YearbyGu() {
    return <Bar options={options} data={data}/>;
}