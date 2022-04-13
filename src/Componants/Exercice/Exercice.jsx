import React, { useState } from "react";
import Consigne from "./Consigne";
import Game from "./Game";
import Result from "./Result";

const Exercice = () => {
  const [gameCurrentStep, setGameCurrentStep] = useState(0);
  const [gameScore, setGameScore] = useState(0);

  const onNextStep = (score) => {
    setGameCurrentStep(gameCurrentStep + 1);
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
