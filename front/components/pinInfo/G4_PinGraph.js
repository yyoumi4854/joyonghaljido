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


export default function PinGraphTest({ time, colorIdx }) {

  const labels = ['9시', '12시', '16시', '20시', '23시', '새벽1시'];

  const colors1 = ["#7352DE", "#377ED2", "#57CB6A", "#F1D14D", "#E78732", "#E35753",]
  const colors2 = ["rgba(115, 82, 222, 0.4)", "rgba(55, 126, 210, 0.4)", "rgba(87, 203, 106, 0.4)", "rgba(241, 209, 77, 0.4)", "rgba(231, 135, 50, 0.4)", "rgba(227, 87, 83, 0.4)",]

  const timeArr = time;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: { // 툴팁 스타일
        padding: 8,
        backgroundColor: '#F5F5F5', // 툴팁배경
        titleColor: '#333',
        bodyColor: '#333',
        bodyFont: {
          font: {
            family: "'Noto Sans KR', sans-serif",
          }
        }
      },
      title: {
        display: true,
        text: '',
      },
    },

    scales: {
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
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: '소음 측정량 (dB)',
        data: timeArr,
        borderColor: colors1[colorIdx - 1],
        backgroundColor: colors2[colorIdx - 1],
      },
    ],
  };


  return <Line options={options} data={data} />;
}
