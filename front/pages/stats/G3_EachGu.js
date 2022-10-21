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
} from "chart.js";
import { Bar } from "react-chartjs-2";

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

const G3_EachGu = () => {
  const list = [
    {name: "종로구", noise: 2016, population: 153255},
    {name: "중구", noise: 1060, population: 131673},
    {name: "용산구", noise: 1625, population: 236632},
    {name: "성동구", noise: 1860, population: 290664},
    {name: "광진구", noise: 1943, population: 352796},
    {name: "동대문구", noise: 2446, population: 352743},
    {name: "중랑구", noise: 1787, population: 393147},
    {name: "성북구", noise: 1783, population: 443823},
    {name: "강북구", noise: 2204, population: 300246},
    {name: "도봉구", noise: 1289, population: 316916},
    {name: "노원구", noise: 1006, population: 512162},
    {name: "은평구", noise: 3060, population: 477460},
    {name: "서대문구", noise: 2147, population: 317515},
    {name: "마포구", noise: 3307, population: 378290},
    {name: "양천구", noise: 1223, population: 447738},
    {name: "강서구", noise: 1348, population: 578465},
    {name: "구로구", noise: 1935, population: 418709},
    {name: "금천구", noise: 1876, population: 245231},
    {name: "영등포구", noise: 3264, population: 399722},
    {name: "동작구", noise: 2534, population: 395030},
    {name: "관악구", noise: 2542, population: 500841},
    {name: "서초구", noise: 4187, population: 411515},
    {name: "강남구", noise: 7518, population: 536710},
    {name: "송파구", noise: 2099, population: 668638},
    {name: "강동구", noise: 4327, population: 465496},
  ];

  const sortList  = list.sort((a,b)=> a.noise - b.noise);
  const [labels, noiseList, populationList] = [sortList.map(x=>x.name), sortList.map(x=>x.noise), sortList.map(x=>x.population)];

  const options = {
    plugins: {
      legend: {
        // 범례 스타일링
        display: false,
      },

      tooltip: {
        // 툴팁 스타일
        padding: 8,
        backgroundColor: "#F5F5F5", // 툴팁배경
        titleColor: "#333",
        bodyColor: "#333",
        bodyFont: {
          font: {
            family: "'Noto Sans KR', sans-serif",
          },
        },
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          color: "#C4C4C4",
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        type: "bar",
        label: "구 별 소음민원 발생량",
        data: noiseList,
        borderColor: "#F7738F",
        backgroundColor: "#F7738F",
        yAxisID: "y",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default G3_EachGu;