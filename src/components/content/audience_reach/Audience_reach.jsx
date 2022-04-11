import { React, useEffect } from "react";
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
//imports de redux
import { setAudience } from "../../../store/slices/audience-reach";
import { useDispatch, useSelector } from "react-redux";

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

const AudienceReach = () => {
  //redux declarations
  const dispatch = useDispatch();
  const { total: total, followers: followers } = useSelector(
    (state) => state.audience
  );

  useEffect(() => {
    dispatch(setAudience());
  }, [dispatch]);

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Total",
        data: total,
        borderColor: "#7F7FD5",
        backgroundColor: "#6767C0",
        tension: 0.4,
      },
      {
        label: "Followers",
        data: followers,
        borderColor: "#86E7B3",
        backgroundColor: "#5BBE89",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {},
  };

  return (
    <article className="audience-box">
      <div className="title">
        <h3>Audience reach</h3>
      </div>
      <div className="values">
        <Line options={options} data={data} redraw />
      </div>
    </article>
  );
};

export default AudienceReach;
