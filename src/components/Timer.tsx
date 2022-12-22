import React, { useState, useEffect, FC } from 'react'
import hourglass from '../assets/hourglass.svg';


type Props = {
  initialMinute?: number;
  initialSeconds? : number;
  callback?: () => void;
}

const Timer: FC<Props> = (props) => {
  const { initialMinute = 0, initialSeconds = 0, callback } = props;
  const [ minutes, setMinutes ] = useState(initialMinute);
  const [ seconds, setSeconds ] =  useState(initialSeconds);

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
    <>
      {(
        (minutes === 0)
        && (seconds === 0)
      )
        ? null
        : (
          <div className="flex place-items-center">
            <h1>{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>
            <img className="w-8 h-8" alt="" src={hourglass} />
          </div>
        )
      }
    </>
  )
};

Timer.defaultProps = {
  initialMinute: 0,
  initialSeconds: 0,
}

export default Timer;
