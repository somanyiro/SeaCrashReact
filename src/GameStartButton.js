import React, {useState} from 'react'
import GodotGame from './GodotGame'
import NameInput from './NameInput';

export default function GameStartButton() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };



  return (
    <div>
        {!clicked && <NameInput/>}
        {!clicked && <button onClick={handleClick}>StartGame</button>}
        {clicked && <GodotGame/>}
    </div>
  )
}
