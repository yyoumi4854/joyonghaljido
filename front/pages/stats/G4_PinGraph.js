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


export default function PinGraphTest(props) {

    const labels = ['9시', '12시', '16시', '20시', '23시', '새벽1시'];

    const time = props.time.time
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
            data:time,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
      

  return <Line options={options} data={data} />;
}
