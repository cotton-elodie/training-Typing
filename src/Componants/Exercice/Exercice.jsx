import React, { useState } from "react";
import Consigne from "./Consigne";
import Game from "./Game";
import Result from "./Result";

const Exercice = () => {
  const [gameCurrentStep, setGameCurrentStep] = useState(0);

  const onNextStep = () => {
    setGameCurrentStep(gameCurrentStep + 1);
  }


  return (
    <div>
      {gameCurrentStep === 0 && <Consigne onNextStep={onNextStep} />}
      {gameCurrentStep === 1 && <Game onNextStep={onNextStep} />}
      {gameCurrentStep === 2 && <Result onNextStep={onNextStep} />}
      
    </div>
  );
};

export default React.memo(Exercice);
