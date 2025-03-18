import React from "react";
import NavBar from "../components/NavBar/NavBar";
const HomePage = () => {
  return (
    <>
      //Header
      <header>
        <h1>AQQUI VA EL NAVABNAR</h1>
      </header>
      //Main
      <div className="container-home">
        <h2>HOME PAGE</h2>
        <NavBar />
      </div>
      //Footer
    </>
  );
};

export default HomePage;
