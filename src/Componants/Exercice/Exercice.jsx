import React, { useState } from "react";
import Consigne from "./Consigne";
import Game from "./Game";
import Result from "./Result";

const Exercice = () => {
  const [gameCurrentStep, setGameCurrentStep] = useState(0); // étape du jeu
  const [gameScore, setGameScore] = useState(0); // score de l'utilisateur

  // va nous permettre de passer à l'étape suivante
  const onNextStep = (score) => {
    setGameCurrentStep(gameCurrentStep + 1);
    // on récupère le score de l'utilisateur
    setGameScore(score)
  }


  return (
    <div>
      {gameCurrentStep === 0 && <Consigne onNextStep={onNextStep} />}
      {gameCurrentStep === 1 && <Game onNextStep={onNextStep} />}
      {gameCurrentStep === 2 && <Result score={gameScore} />}
      
    </div>
  );
};

export default React.memo(Exercice);
