import React, { useState, useEffect, FC, useCallback } from 'react'


type Props = {
  initialMinute: number;
  initialSeconds : number;
  callback?: () => void;
}

const Timer: FC<Props> = (props) => {
    const { initialMinute = 0,initialSeconds = 0, callback } = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(() => {
    let myInterval = setInterval(
      () => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(myInterval);
                callback?.();
            } else {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        } 
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    });

    return (
      <div>
        { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
      </div>
    )
}

export default Timer;