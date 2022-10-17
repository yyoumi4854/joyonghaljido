import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ['종로구',	'중구',	'용산구',	'성동구',	'광진구',	'동대문구',	'중랑구',	'성북구',	'강북구',	'도봉구',	'노원구',	'은평구',	'서대문구',	'마포구',	'양천구',	'강서구',	'구로구',	'금천구',	'영등포구',	'동작구',	'관악구',	'서초구',	'강남구',	'송파구',	'강동구']

const noise = [2016, 1060, 1625, 1860, 1943, 2446, 1787, 1783, 2204, 1289, 1006, 3060, 2147, 3307, 1223, 1348, 1935, 1876, 3264, 2534, 2542, 4187, 7518, 2099, 4327]

// const 세대 = [73728, 	63958, 	111860, 	134327, 	169856, 	169931, 	188188, 	198089, 	145048, 	139076, 	218637, 	216455, 	145517, 	181138, 	181987, 	274301, 	182172, 	119627, 	188759, 	187380, 	281423, 	169518, 	234885, 	286119, 	202861]

const 인구 = [153255, 	131673, 	236632, 	290664, 	352796, 	352743, 	393147, 	443823, 	300246, 	316916, 	512162, 	477460, 	317515, 	378290, 	447738, 	578465, 	418709, 	245231, 	399722, 	395030, 	500841, 	411515, 	536710, 	668638, 	465496]

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: '',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      type:'bar',
      label: '구 별 소음민원 발생량',
      data: noise,
      borderColor: '#F7738F',
      backgroundColor: '#F7738F',
      yAxisID: 'y',
    },
    {
        fill: true,
        type:'line',
        label: '인구 수(참고용)',
        data: 인구,
        borderColor: '#5BB8FB',
        backgroundColor: '#DEF1FE',
        yAxisID: 'y1',
      },
  ],
};

export default function G3_EachGu() {
    return <Bar options={options} data={data}/>;
}