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
    
    const colors1 = ["#7352DE","#377ED2","#57CB6A","#F1D14D", "#E78732","#E35753",]
    const colors2 = ["#AB97EB","#87B2E4","#9AE0A5","#F8E8A6", "#F1B784","#EE9A98",]

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
