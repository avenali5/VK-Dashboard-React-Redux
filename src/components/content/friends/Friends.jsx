import { React, useEffect } from "react";

//imports de redux
import { totalFriends } from "../../../store/slices/friends";
import { useDispatch, useSelector } from "react-redux";

const Friends = () => {
  //redux declarations
  const dispatch = useDispatch();
  const { friends: friends, percentage: percentage } = useSelector(
    (state) => state.friends
  );

  useEffect(() => {
    dispatch(totalFriends());
  }, [dispatch]);

  return (
    <article className="friends-box">
      <div className="title">
        <h3>Friends</h3>
        <img src="./assets/options.svg" alt="" className="options" />
      </div>
      <div className="values">
        <div className="total">{friends} people</div>
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

export default Friends;
