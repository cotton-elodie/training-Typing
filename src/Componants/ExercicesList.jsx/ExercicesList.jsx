import { Label, PrimaryButton } from "@fluentui/react";
import React from "react";
import { useNavigate } from "react-router";
import '../ExercicesList.jsx/exercicesList.scss'


const ExercicesList = ({ exercices }) => {
  const navigate = useNavigate();

  return (
    <div className="exercices"> 
    <ul className="exercices-ul">
      {exercices.map((exercice, index) => (
        <li className="exercices-li"
         key={index}>
          <Label className="exercices-label">{exercice.title}</Label>
          <PrimaryButton
          className="exercices-button"
            text="Go"
            onClick={() => {
              navigate("/exercice", { state: { exerciceSettings: exercice } });
            }}
          />
        </li>
      ))}
    </ul>
    </div>
  );
};

export default ExercicesList;
