import { useEffect, useState } from "react";
import {Box, Type} from "../index"

const Loading = ({ onComplete, value = "Loading pokemons" }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(value.substring(0, index));
      index++;

      if (index > value.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete, value]);

  return (
    <Box variant="card">
      <Type variant="focus" color="poke">{text} <span className="animate-blink ml-1"> | </span></Type>
      <div className="w-[200px] h-[4px] bg-transparent rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-indigo-800 shadow-[0_0_15px_#3F51B5 animate-loading-bar"></div>
      </div>
    </Box>    
  );
};

export default Loading;
