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


export default function PinGraphTest({time, colorIdx}) {

    const labels = ['9시', '12시', '16시', '20시', '23시', '새벽1시'];
    
    const colors1 = ["#E35753","#E78732","#F1D14D","#57CB6A","#377ED2","#7352DE"]
    const colors2 = ["#EE9A98","#F1B784","#F8E8A6","#9AE0A5","#87B2E4","#AB97EB"]

    const timeArr = time;
    const options = {
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

    const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: '소음 측정량 (dB)',
            data:timeArr,
            borderColor: colors1[colorIdx-1],
            backgroundColor: colors2[colorIdx-1],
          },
        ],
      };
      

  return <Line options={options} data={data} />;
}
