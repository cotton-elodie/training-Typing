import React from 'react';
import { PrimaryButton } from "@fluentui/react";
import { Link } from "react-router-dom";



const Result = ({score}) => {
  return (
    <div>Result

        <p>Votre score est de {score} sur {score} </p>
        <Link to="/">
        <PrimaryButton text="Fin" />
      </Link>
    </div>
  )
}

export default Result