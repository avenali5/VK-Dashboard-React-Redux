import React from "react";

const Notifications = ({ notifications, setNotifications }) => {
  return (
    <article
      className={`${notifications ? "open-notif" : ""} notifications-container`}
      onBlur={() => {
        setNotifications(!notifications);
      }}
    >
      <h4>Notifications</h4>
      <div className="list">
        <div className="notification">
          <div className="top">
            <span className="name">See your daily newsletter</span>
          </div>
          <div className="bottom">
            <div className="hour">{`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}</div>
            <div className="see-more">See more</div>
          </div>
        </div>
        <div className="notification">
          <div className="top">
            <span className="name">New giftcards just arrived!</span>
          </div>
          <div className="bottom">
            <div className="hour">Yesterday</div>
            <div className="see-more">See more</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Notifications;
