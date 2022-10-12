import React from "react";
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

const 서울 = [68, 68, 68, 69, 68, 68, 68, 68, 68, 69];
const 평균 = [62.7, 62.5, 62.3, 62.2, 61.7, 62, 61.6, 61.1, 61.3, 61.8];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "지역별 평균 소음 측정량 (데시벨)",
    },
  },
};

const labels = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

export const data = {
  labels,
  datasets: [
    {
      label: "서울",
      data: 서울,
      borderColor: "#FF0000",
      backgroundColor: "#FA8072",
    },
    {
      label: "기타 광역시 평균",
      data: 평균,
      borderColor: "#9ab973",
      backgroundColor: "#abd98c",
    },
  ],
};

export default function G2_Seoul_VS_Else() {
  return <Line options={options} data={data} />;
}
