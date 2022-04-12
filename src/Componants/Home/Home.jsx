import React from "react";
import data from "../../data";
import ExercicesList from "../ExercicesList.jsx/ExercicesList";

const Home = () => {
  return (
    <div>
      <h1>Training typing</h1>
      <ExercicesList exercices={data} />
    </div>
  );
};

export default Home;
