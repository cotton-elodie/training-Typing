import { Label, PrimaryButton } from "@fluentui/react";
import React from "react";
import { useNavigate } from "react-router";


const ExercicesList = ({ exercices }) => {
  const navigate = useNavigate();

  return (
    <ul>
      {exercices.map((exercice, index) => (
        <li key={index}>
          <Label >{exercice.title}</Label>
          <PrimaryButton
            text="Go"
            onClick={() => {
              navigate("/exercice", { state: { exerciceSettings: exercice } });
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ExercicesList;
