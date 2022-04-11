import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGenderAge } from "../../../store/slices/gender-age";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GenderAge = () => {
  const dispatch = useDispatch();
  const { men: men, women: women } = useSelector((state) => state.genderAge);

  useEffect(() => {
    dispatch(setGenderAge());
  }, [dispatch]);

  const options = {
    responsive: true,
  };

  const labels = ["<18", "18-21", "21-24", "24-27", "30-35", "35-40", ">40"];

  const data = {
    labels,
    datasets: [
      {
        label: "Women",
        data: women,
        backgroundColor: "#7F7FD5",
        borderRadius: 7,
      },
      {
        label: "Men",
        data: men,
        backgroundColor: "#86E7B3",
        borderRadius: 7,
      },
    ],
  };

  return (
    <article className="gender-age-box">
      <div className="title">
        <h3>Gender / Age</h3>
      </div>
      <div className="values">
        <Bar options={options} data={data} />
      </div>
    </article>
  );
};

export default GenderAge;
