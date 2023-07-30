import React, { useEffect, useState } from "react";

function CountDown() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function format(sec: string) {
    const sec_num = parseInt(sec, 10); // don't forget the second param
    let minutes: any = Math.floor(sec_num / 60);
    let seconds: any = sec_num - minutes * 60;

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }
  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft || !isRunning) {
      setIsRunning(false);
      return;
    }

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [isRunning, timeLeft]);

  useEffect(() => {
    console.log(minutes, seconds);
  }, [minutes, seconds]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "minutes") {
      setMinutes(Number(value));
      return;
    }
    if (name === "seconds") setSeconds(Number(value));
  };

  return (
    <div className="container">
      <div className="input-box">
        <label>
          <input type="number" name="minutes" onChange={handleChange} />
          Minutes
        </label>
        <label>
          <input type="number" name="seconds" onChange={handleChange} />
          Seconds
        </label>
      </div>

      <br />
      <button
        onClick={() => {
          setTimeLeft(minutes * 60 + seconds);
          setIsRunning(true);
        }}
        disabled={isRunning}
      >
        START
      </button>
      <button
        onClick={() => {
          setIsRunning(!isRunning);
        }}
      >
        PAUSE / RESUME
      </button>
      <button
        onClick={() => {
          setIsRunning(false);
          setTimeLeft(0);
        }}
      >
        RESET
      </button>

      <h1 data-testid="running-clock">{format(timeLeft.toString())}</h1>
    </div>
  );
}

export default CountDown;
