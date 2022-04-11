import { React, useState } from "react";
import avatar from "./assets/avatar.png";
import logo from "../sidebar/assets/logo.png";
import "../../scss/header.scss";
import Notifications from "./Notifications";

const Header = () => {
  const [notifications, setNotifications] = useState(false);
  const openMenu = () => {
    let aside = document.querySelector("aside");
    aside.style.transform = "translateX(0)";
  };

  return (
    <header className="whole-header-container">
      <section className="header-container flex max-width relative">
        <div className="burguer" onClick={openMenu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5.995C2 5.445 2.446 5 2.995 5H11.005C11.2689 5 11.522 5.10483 11.7086 5.29143C11.8952 5.47803 12 5.73111 12 5.995C12 6.25889 11.8952 6.51197 11.7086 6.69857C11.522 6.88517 11.2689 6.99 11.005 6.99H2.995C2.73111 6.99 2.47803 6.88517 2.29143 6.69857C2.10483 6.51197 2 6.25889 2 5.995V5.995ZM2 12C2 11.45 2.446 11.005 2.995 11.005H21.005C21.2689 11.005 21.522 11.1098 21.7086 11.2964C21.8952 11.483 22 11.7361 22 12C22 12.2639 21.8952 12.517 21.7086 12.7036C21.522 12.8902 21.2689 12.995 21.005 12.995H2.995C2.73111 12.995 2.47803 12.8902 2.29143 12.7036C2.10483 12.517 2 12.2639 2 12V12ZM2.995 17.01C2.73111 17.01 2.47803 17.1148 2.29143 17.3014C2.10483 17.488 2 17.7411 2 18.005C2 18.2689 2.10483 18.522 2.29143 18.7086C2.47803 18.8952 2.73111 19 2.995 19H15.005C15.2689 19 15.522 18.8952 15.7086 18.7086C15.8952 18.522 16 18.2689 16 18.005C16 17.7411 15.8952 17.488 15.7086 17.3014C15.522 17.1148 15.2689 17.01 15.005 17.01H2.995Z"
              fill="#CACACA"
            />
          </svg>
        </div>
        <h2>Statistics</h2>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search-bar">
          <input type="search" placeholder="Search" spellCheck={false} />
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 9.69231L7.825 7.7094M9 5.13391C9 7.14794 7.20914 8.78063 5 8.78063C2.79086 8.78063 1 7.14794 1 5.13391C1 3.11988 2.79086 1.48718 5 1.48718C7.20914 1.48718 9 3.11988 9 5.13391Z"
              stroke="#979797"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="notifications">
          <svg
            onClick={() => {
              setNotifications(!notifications);
            }}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0695 22C11.7297 22 13.1184 20.8165 13.4373 19.25H6.70166C7.02074 20.8165 8.4095 22 10.0695 22Z"
              fill="#979797"
            />
            <path
              d="M18.7126 16.9606L18.7127 16.9604C18.7975 16.5512 18.6542 16.1452 18.3338 15.8757C17.0097 14.7657 16.2002 13.1815 16.0285 11.485C12.4275 11.2487 9.56952 8.24399 9.56952 4.58337C9.56952 3.79464 9.70586 3.03884 9.95128 2.33453C6.73824 2.39752 4.15291 5.02173 4.15291 8.24998V10.8056C4.15291 12.7669 3.29333 14.6184 1.78771 15.8918C1.46909 16.1645 1.32651 16.5982 1.44226 17.0266L18.7126 16.9606ZM18.7126 16.9606C18.6104 17.4544 18.1132 17.8334 17.5266 17.8334H2.6079C2.04874 17.8334 1.56774 17.4895 1.44231 17.0268L18.7126 16.9606Z"
              fill="#CACACA"
              stroke="#CACACA"
            />
            <path
              d="M21 4.50008C21 6.98537 18.9854 9 16.4999 9C14.0146 9 12 6.98537 12 4.50008C12 2.0148 14.0146 0 16.4999 0C18.9854 0 21 2.0148 21 4.50008Z"
              fill="#7F7FD5"
            />
          </svg>
          <Notifications
            notifications={notifications}
            setNotifications={setNotifications}
          />
        </div>
        <div className="profile flex">
          <span className="name">Anya</span>
          <img src={avatar} alt="" className="avatar" />
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5.28571 5L9 1"
              stroke="#CACACA"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </section>
    </header>
  );
};

export default Header;
