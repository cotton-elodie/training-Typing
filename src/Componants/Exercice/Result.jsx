import React from "react";
import { PrimaryButton } from "@fluentui/react";
import { Link } from "react-router-dom";


const Result = (props) => {
 
 
  return (
    <div className="result">
      <h2 className="result-title">Résultat</h2>
      
      <p className="result-result">
        Votre score est de {props.score} sur {props.maxScore} . 
      </p>
      <Link to="/">
        <PrimaryButton className="result-button"text="Fin" />
      </Link>
    </div>
  );
};

export default Result;
