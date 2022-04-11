import { React, useEffect } from "react";
//react imports
import { useDispatch, useSelector } from "react-redux";
import { totalFollowers } from "../../../store/slices/followers";

const Followers = () => {
  const dispatch = useDispatch();
  const { followers: followers, percentage: percentage } = useSelector(
    (state) => state.followers
  );

  useEffect(() => {
    dispatch(totalFollowers());
  }, [dispatch]);
  return (
    <article className="followers-box">
      <div className="title">
        <h3>Followers</h3>
        <img src="./assets/options.svg" alt="" className="options" />
      </div>
      <div className="values">
        <div className="total">{followers} people</div>
        <div className="progress">
          {percentage > 0 ? (
            <span>
              +{percentage}%{" "}
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.07698L6.49995 0.999999M6.49995 0.999999L12 6.07698M6.49995 0.999999L6.49995 13"
                  stroke="#70DC5F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          ) : (
            <span>
              {percentage}%{" "}
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 7.92302L6.50005 13M6.50005 13L1 7.92302M6.50005 13L6.50005 1"
                  stroke="#DC5F5F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default Followers;
