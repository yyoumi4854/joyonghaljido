import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
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
    Filler,
    Legend
);

const dummy = [
    {pinID:'', pinName:'스타벅스앞', GuName:'강남구', DongName:'1동', time:[44,55,44,33,55,22] }
]
console.log(dummy.time)

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: '측정 핀 지점의 시간대별 그래프',
      },
    },
  };
  
  const labels = ['9시', '12시', '16시', '20시', '23시', '새벽1시'];
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: '소음 측정량 (dB)',
        data: dummy[0].time,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

export default function PinGraphTest() {
  return <Line options={options} data={data} />;
}
