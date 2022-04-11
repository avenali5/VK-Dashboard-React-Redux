import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDevice } from "../../../store/slices/device";
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
import { Pie } from "react-chartjs-2";

import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DeviceReach = () => {
  const dispatch = useDispatch();
  const { desktop: desktop, mobile: mobile } = useSelector(
    (state) => state.device
  );

  useEffect(() => {
    dispatch(setDevice());
  }, [dispatch]);
  const data = {
    labels: ["Desktop", "Mobile"],
    datasets: [
      {
        data: [desktop, mobile],
        backgroundColor: ["#86E7B3", "#7F7FD5"],
        borderWidth: 4,
        borderColor: ["#86E7B3", "#7F7FD5"],
        offset: 20,
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        bottom: 25,
      },
    },
  };
  return (
    <article className="device-box">
      <div className="title">
        <h3>Reach by device</h3>
      </div>
      <div className="values">
        <Pie data={data} options={options} />
      </div>
    </article>
  );
};

export default DeviceReach;
