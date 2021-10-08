import { useEffect, useState } from "react";
import { add, format } from "date-fns";

const StopWatch = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0, 0));
  const [isOn, setIsOn] = useState(false);

  const setTimer = function () {
    setTime((prevTime) => add(prevTime, { seconds: 1 }));
  };

  const callback = function () {
    if (isOn) {
      setInterval(setTimer, 1000);
    }
  };

  useEffect(callback, [isOn]);

  return (
    <div>
      <h1>{format(time, "HH:mm:ss")}</h1>
      <button
        onClick={() => {
          setIsOn(true);
        }}
      >
        Start
      </button>
      <button>Stop</button>
      <button>Reset</button>
    </div>
  );
};
export default StopWatch;
