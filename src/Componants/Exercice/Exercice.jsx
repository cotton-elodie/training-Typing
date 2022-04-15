import React, { useState } from "react";
import { useLocation } from "react-router";

import Consigne from "./Consigne";
import Game from "./Game";
import Result from "./Result";

const Exercice = () => {
  const location = useLocation();   // contexte de navigation
  const { exerciceSettings } = location.state;    // paramètres du jeu
  const [gameCurrentStep, setGameCurrentStep] = useState(0); // étape du jeu
  const [gameScore, setGameScore] = useState(0); // score de l'utilisateur
  const [maxScore, setMaxScore]= useState(0)

  // va nous permettre de passer à l'étape suivante
  const onNextStep = (score, maxScore) => {
    setGameCurrentStep(gameCurrentStep + 1);
    setMaxScore(maxScore)
    // on récupère le score de l'utilisateur
    setGameScore(score)
  }

  

  return (
    <div>
      {gameCurrentStep === 0 && <Consigne onNextStep={onNextStep} consigne={exerciceSettings} />}
      {gameCurrentStep === 1 && <Game onNextStep={onNextStep} game={exerciceSettings} />}
      {gameCurrentStep === 2 && <Result score={gameScore} maxScore={maxScore} />}
      
    </div>
  );
};

export default React.memo(Exercice);
