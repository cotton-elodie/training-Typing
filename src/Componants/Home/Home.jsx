import React from "react";
import data from "../../data";
import ExercicesList from "../ExercicesList.jsx/ExercicesList";

import "../Home/home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Training typing</h1>
      <p>
        Training typing est une application pour vous entrainer à taper au
        clavier. Bien taper au clavier c'est important dans notre métier.
      </p>

      <ExercicesList exercices={data} />
    </div>
  );
};

export default Home;
