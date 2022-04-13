import React from "react";
import data from "../../data";
import ExercicesList from "../ExercicesList.jsx/ExercicesList";

import '../Home/home.scss'

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Training typing</h1>
      <ExercicesList exercices={data} />
    </div>
  );
};

export default Home;
