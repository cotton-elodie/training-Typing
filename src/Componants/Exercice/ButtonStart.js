import React from 'react';
import useSound from "use-sound";
import beep from '../../assets/sounds/beep-01a.mp3';

import {PrimaryButton } from "@fluentui/react";


const ButtonStart = () => {
    const [play] = useSound(beep);

  return (
      <PrimaryButton text="Démarrer" onClick={play} />
     
  )
}

export default ButtonStart;
