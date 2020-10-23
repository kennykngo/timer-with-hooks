import React, { useEffect, useState } from "react";

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();

    // + before new Date tells javascript to cast object as an integer in microseconds
    const difference = +new Date(`11/01/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  // end of calculateTimeLeft();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Every time timeLeft is updated, useEffect will run,
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  // If the timer interval is above zer0, it adds an element to the timerComponents array
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  // Clear timeout if the component is unmounted
  // return () => clearTimeout(timer);

  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

export default App;
