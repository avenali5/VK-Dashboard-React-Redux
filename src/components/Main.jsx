import React from "react";
import Content from "./content/Content";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Main = () => {
  return (
    <main>
      <Sidebar />
      <Header />
      <Content />
    </main>
  );
};

export default Main;
