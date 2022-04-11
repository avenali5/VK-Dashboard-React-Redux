import { React, useState } from "react";
import logo from "./assets/logo.png";
import "../../scss/sidebar.scss";

const Sidebar = () => {
  const [switcher, setSwitcher] = useState(false);
  const closeMenu = () => {
    let aside = document.querySelector("aside");
    aside.style.transform = "translateX(-120%)";
  };

  const toggleTheme = () => {
    document.body.classList.toggle("light-theme");
    setSwitcher(!switcher);
  };

  return (
    <aside>
      <img src={logo} alt="" />
      <div className="close-menu absolute" onClick={closeMenu}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4L14.6 16L8 22.6L9.4 24L16 17.4L22.6 24L24 22.6L17.4 16L24 9.4Z"
            fill="black"
          />
        </svg>
      </div>
      <nav>
        <a>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.1102 11.1062C25.1096 11.1056 25.109 11.1051 25.1085 11.1045L14.9094 0.90686C14.4747 0.471985 13.8967 0.232422 13.2819 0.232422C12.6671 0.232422 12.0891 0.471794 11.6542 0.90667L1.46047 11.0992C1.45703 11.1026 1.4536 11.1062 1.45017 11.1096C0.557437 12.0074 0.558963 13.4641 1.45455 14.3596C1.86372 14.7689 2.40413 15.006 2.98192 15.0308C3.00539 15.0331 3.02904 15.0342 3.05288 15.0342H3.45938V22.5391C3.45938 24.0241 4.66781 25.2324 6.15341 25.2324H10.1436C10.548 25.2324 10.8761 24.9045 10.8761 24.5V18.6162C10.8761 17.9385 11.4274 17.3873 12.1051 17.3873H14.4587C15.1364 17.3873 15.6877 17.9385 15.6877 18.6162V24.5C15.6877 24.9045 16.0156 25.2324 16.4202 25.2324H20.4104C21.896 25.2324 23.1044 24.0241 23.1044 22.5391V15.0342H23.4813C24.0959 15.0342 24.6739 14.7948 25.109 14.36C26.0056 13.4629 26.006 12.0038 25.1102 11.1062Z"
              fill="#DFE6F1"
            />
          </svg>
          <span>Home</span>
        </a>
        <a>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.38475 11.8391H7.05787V13.5122H5.38475V11.8391Z"
              fill="#DFE6F1"
            />
            <path
              d="M0.781738 22.482C0.781738 23.9672 1.99004 25.1755 3.4753 25.1755H23.088C24.5734 25.1755 25.7817 23.9672 25.7817 22.482V7.9167H0.781738V22.482ZM10.9283 10.3743H21.9113C22.3157 10.3743 22.6438 10.7022 22.6438 11.1067C22.6438 11.5111 22.3157 11.8392 21.9113 11.8392H10.9283C10.5237 11.8392 10.1958 11.5111 10.1958 11.1067C10.1958 10.7022 10.5237 10.3743 10.9283 10.3743ZM10.9283 13.5123H21.9113C22.3157 13.5123 22.6438 13.8402 22.6438 14.2447C22.6438 14.6493 22.3157 14.9771 21.9113 14.9771H10.9283C10.5237 14.9771 10.1958 14.6493 10.1958 14.2447C10.1958 13.8402 10.5237 13.5123 10.9283 13.5123ZM3.9199 11.1067C3.9199 10.7022 4.24777 10.3743 4.65232 10.3743H7.79029C8.19484 10.3743 8.52271 10.7022 8.52271 11.1067V14.2447C8.52271 14.6493 8.19484 14.9771 7.79029 14.9771H4.65232C4.24777 14.9771 3.9199 14.6493 3.9199 14.2447V11.1067ZM4.65232 16.6503H21.9113C22.3157 16.6503 22.6438 16.9781 22.6438 17.3827C22.6438 17.7872 22.3157 18.1151 21.9113 18.1151H4.65232C4.24777 18.1151 3.9199 17.7872 3.9199 17.3827C3.9199 16.9781 4.24758 16.6503 4.65232 16.6503ZM4.65232 19.7884H21.9113C22.3157 19.7884 22.6438 20.1163 22.6438 20.5208C22.6438 20.9252 22.3157 21.2533 21.9113 21.2533H4.65232C4.24777 21.2533 3.9199 20.9252 3.9199 20.5208C3.9199 20.1163 4.24758 19.7884 4.65232 19.7884Z"
              fill="#DFE6F1"
            />
            <path
              d="M23.088 0.175659H3.4753C1.99004 0.175659 0.781738 1.38396 0.781738 2.86922V6.4516H25.7817V2.86922C25.7817 1.38396 24.5734 0.175659 23.088 0.175659ZM18.7732 4.77847H7.7901C7.38574 4.77847 7.05768 4.4506 7.05768 4.04605C7.05768 3.6415 7.38574 3.31363 7.7901 3.31363H18.7732C19.1777 3.31363 19.5056 3.6415 19.5056 4.04605C19.5056 4.4506 19.1777 4.77847 18.7732 4.77847Z"
              fill="#DFE6F1"
            />
          </svg>
          <span>Tasks</span>
        </a>
        <a>
          <svg
            width="26"
            height="23"
            viewBox="0 0 26 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.3743 10.8873C21.1809 11.8709 19.6527 12.4626 17.9891 12.4626C17.4133 12.4626 16.8537 12.3916 16.3186 12.2583C17.2754 13.7151 17.8329 15.4565 17.8329 17.3259V20.0716C17.8329 21.0985 17.4579 22.039 16.8388 22.7653H23.0884C24.5737 22.7653 25.782 21.557 25.782 20.0716V17.3259C25.782 14.6537 24.4298 12.2917 22.3743 10.8873Z"
              fill="#DFE6F1"
            />
            <path
              d="M8.57506 10.9977C11.5744 10.9977 14.0144 8.55765 14.0144 5.55834C14.0144 2.55885 11.5744 0.118774 8.57506 0.118774C5.57575 0.118774 3.13568 2.55885 3.13568 5.55834C3.13568 8.55765 5.57575 10.9977 8.57506 10.9977Z"
              fill="#DFE6F1"
            />
            <path
              d="M17.9888 10.9977C20.9882 10.9977 23.4284 8.55765 23.4284 5.55834C23.4284 2.55885 20.9882 0.118774 17.9888 0.118774C16.5379 0.118774 15.218 0.689835 14.2417 1.6189C15.0212 2.73699 15.4792 4.09502 15.4792 5.55834C15.4792 7.02147 15.0212 8.3795 14.2417 9.49759C15.218 10.4267 16.5379 10.9977 17.9888 10.9977Z"
              fill="#DFE6F1"
            />
            <path
              d="M12.9602 10.8873C11.767 11.8709 10.2388 12.4626 8.57503 12.4626C6.91125 12.4626 5.38308 11.8711 4.18965 10.8873C2.1341 12.2917 0.781982 14.6537 0.781982 17.3259V20.0716C0.781982 21.557 1.99029 22.7653 3.47573 22.7653H13.6741C15.1596 22.7653 16.3679 21.557 16.3679 20.0716V17.3259C16.3679 14.6537 15.016 12.2917 12.9602 10.8873Z"
              fill="#DFE6F1"
            />
          </svg>
          <span>Social</span>
        </a>
        <a>
          <svg
            width="26"
            height="18"
            viewBox="0 0 26 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3536 9.43037L25.7817 14.7585V3.87725L17.3536 9.43037Z"
              fill="#DFE6F1"
            />
            <path
              d="M0.781738 3.87725V14.7585L9.20986 9.43037L0.781738 3.87725Z"
              fill="#DFE6F1"
            />
            <path
              d="M24.2192 0.708496H2.34424C1.56455 0.708496 0.945801 1.28975 0.828613 2.03818L13.2817 10.2429L25.7349 2.03818C25.6177 1.28975 24.9989 0.708496 24.2192 0.708496Z"
              fill="#DFE6F1"
            />
            <path
              d="M15.9224 10.3741L13.7114 11.8304C13.5802 11.9163 13.4317 11.9585 13.2817 11.9585C13.1317 11.9585 12.9833 11.9163 12.8521 11.8304L10.6411 10.3726L0.831738 16.5772C0.952051 17.3194 1.56768 17.896 2.34424 17.896H24.2192C24.9958 17.896 25.6114 17.3194 25.7317 16.5772L15.9224 10.3741Z"
              fill="#DFE6F1"
            />
          </svg>
          <span>Messages</span>
        </a>
        <a>
          <svg
            width="20"
            height="26"
            viewBox="0 0 20 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2862 11.0178L4.39963 1.5111C3.75833 1.07175 3.11217 0.839233 2.57508 0.839233C1.53673 0.839233 0.894409 1.67259 0.894409 3.06751V23.6142C0.894409 25.0075 1.53592 25.8392 2.57184 25.8392C3.10974 25.8392 3.74558 25.6065 4.3883 25.166L18.2813 15.6595C19.1748 15.0471 19.6696 14.2231 19.6696 13.3381C19.6698 12.4538 19.1806 11.6299 18.2862 11.0178Z"
              fill="#DFE6F1"
            />
          </svg>
          <span>Media</span>
        </a>
        <a className="selected">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.0493 23.818H1.51416C1.10933 23.818 0.781738 24.1456 0.781738 24.5504C0.781738 24.9552 1.10933 25.2828 1.51416 25.2828H25.0493C25.4542 25.2828 25.7817 24.9552 25.7817 24.5504C25.7817 24.1456 25.4542 23.818 25.0493 23.818Z"
              fill="#7F7FD5"
            />
            <path
              d="M7.42236 12.0504H2.979C2.57417 12.0504 2.24658 12.378 2.24658 12.7828V16.4449H8.15479V12.7828C8.15479 12.378 7.8272 12.0504 7.42236 12.0504Z"
              fill="#7F7FD5"
            />
            <path
              d="M8.15479 17.9098H2.24658V22.3531H8.15479V17.9098Z"
              fill="#7F7FD5"
            />
            <path
              d="M15.479 6.19104H11.0845C10.6796 6.19104 10.3521 6.51863 10.3521 6.92346V16.4449H16.2114V6.92346C16.2114 6.51863 15.8838 6.19104 15.479 6.19104Z"
              fill="#7F7FD5"
            />
            <path
              d="M16.2114 17.9098H10.3521V22.3531H16.2114V17.9098Z"
              fill="#7F7FD5"
            />
            <path
              d="M23.5845 0.282837H19.1411C18.7363 0.282837 18.4087 0.610425 18.4087 1.01526V7.65588H24.3169V1.01526C24.3169 0.610425 23.9893 0.282837 23.5845 0.282837Z"
              fill="#7F7FD5"
            />
            <path
              d="M24.3169 9.12073H18.4087V22.3531H24.3169V9.12073Z"
              fill="#7F7FD5"
            />
          </svg>
          <span>Statistics</span>
        </a>
        <a>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.6454 9.81698H22.9266C22.8063 9.47698 22.6678 9.14327 22.5117 8.81729L23.7276 7.60138C24.1714 7.15767 24.1714 6.43812 23.7276 5.99433L20.5136 2.78024C20.3004 2.56713 20.0114 2.44736 19.71 2.44736C19.4086 2.44736 19.1196 2.56706 18.9065 2.78024L17.6905 3.99615C17.3645 3.84009 17.0308 3.7016 16.6908 3.5813V1.86244C16.6908 1.23486 16.182 0.726074 15.5545 0.726074H11.009C10.3814 0.726074 9.87265 1.23486 9.87265 1.86244V3.5813C9.53265 3.7016 9.19894 3.84009 8.87303 3.99615L7.65704 2.78024C7.21333 2.33645 6.49378 2.33645 6.05 2.78024L2.83583 5.99426C2.62265 6.20736 2.50295 6.49638 2.50295 6.79782C2.50295 7.09918 2.62265 7.3882 2.83583 7.6013L4.05174 8.81729C3.89568 9.14327 3.75727 9.47698 3.63697 9.81698H1.9181C1.29053 9.81698 0.781738 10.3258 0.781738 10.9533V15.4988C0.781738 16.1264 1.29053 16.6352 1.9181 16.6352H3.63697C3.75727 16.9752 3.89568 17.3089 4.05174 17.6349L2.83583 18.8508C2.62265 19.064 2.50295 19.353 2.50295 19.6543C2.50295 19.9558 2.62265 20.2448 2.83583 20.4579L6.05007 23.672C6.49386 24.1157 7.21333 24.1157 7.65712 23.672L8.8731 22.4561C9.19901 22.6121 9.53272 22.7506 9.87265 22.8709V24.5897C9.87265 25.2173 10.3814 25.7261 11.009 25.7261H15.5545C16.182 25.7261 16.6908 25.2173 16.6908 24.5897V22.8708C17.0308 22.7505 17.3645 22.6121 17.6905 22.456L18.9065 23.6719C19.3503 24.1156 20.0698 24.1157 20.5136 23.6719L23.7276 20.4578C24.1714 20.014 24.1714 19.2946 23.7276 18.8508L22.5117 17.6349C22.6679 17.3089 22.8064 16.9751 22.9267 16.6352H24.6454C25.273 16.6352 25.7817 16.1264 25.7817 15.4988V10.9533C25.7817 10.3258 25.273 9.81698 24.6454 9.81698ZM13.2817 17.7715C10.7754 17.7715 8.73628 15.7324 8.73628 13.2261C8.73628 10.7197 10.7754 8.68062 13.2817 8.68062C15.7881 8.68062 17.8272 10.7197 17.8272 13.2261C17.8272 15.7324 15.7881 17.7715 13.2817 17.7715Z"
              fill="#DFE6F1"
            />
          </svg>
          <span>Settings</span>
        </a>
      </nav>
      <div className="dark-mode">
        <div
          className={`switch ${switcher ? "switcher-night" : ""}`}
          onClick={toggleTheme}
        >
          <div className="ball"></div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;