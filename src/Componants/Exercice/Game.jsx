import React from "react";
import { TextField, ITextFieldStyles } from "@fluentui/react/lib/TextField";
import { useState } from "react";
import { useLocation } from "react-router";
import ButtonStart from "../Exercice/ButtonStart";
import { PrimaryButton } from "@fluentui/react";


const Game = ({onNextStep}) => {
  const location = useLocation();
  const { exerciceSettings } = location.state;
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (event) => {
    console.log(currentLetterIndex);
    const inputLetter = exerciceSettings.content[currentLetterIndex];
    if (event.key === inputLetter) {
      setScore(score + 1);
    }
    setCurrentLetterIndex(currentLetterIndex + 1);
    setScore(score);
  };

  

  return (
    <div>
      <ButtonStart />
      <input type="text" value={exerciceSettings.content[currentLetterIndex]} />
      <input type="text" onKeyDown={handleAnswerChange} />
      <PrimaryButton text="Score" onClick={onNextStep} />
    </div>
  );
};

export default Game;
