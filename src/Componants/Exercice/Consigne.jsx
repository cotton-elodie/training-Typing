import { PrimaryButton } from "@fluentui/react";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Consigne = ({ onNextStep }) => {
  const location = useLocation();
  const { exerciceSettings } = location.state;
  
  return (
    <div>
      {exerciceSettings.title}
      {exerciceSettings.directive}
      <PrimaryButton text="Démarrer" onClick={onNextStep} />
      <Link to="/">
        <PrimaryButton text="Retour" />
      </Link>
    </div>
  );
};

export default Consigne;
