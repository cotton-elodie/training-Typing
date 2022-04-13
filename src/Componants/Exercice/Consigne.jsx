import { PrimaryButton } from "@fluentui/react";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import '../Exercice/exercice.scss'

const Consigne = ({ onNextStep }) => {
  const location = useLocation();
  const { exerciceSettings } = location.state;
  
  return (
    <div className="consigne">
      <h2 className="consigne-title">{exerciceSettings.title} </h2>
      <span className="consigne-directive">{exerciceSettings.directive}</span>
      <div className="consigne-button">
      <PrimaryButton className="consigne-button-button" text="Démarrer" onClick={onNextStep} />
      <Link  to="/">
        <PrimaryButton className="consigne-button-button"  text="Retour" />
      </Link>
      </div>
      
    </div>
  );
};

export default Consigne;
