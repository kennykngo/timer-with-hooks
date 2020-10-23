import React, { useEffect, useState } from "react";

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();

    // + before new Date tells javascript to cast object as an integer in microseconds
    const difference = +new Date(`10/01/${year}`) - +new Date();

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

    return () => clearTimeout(timer);
  });

  return <></>;
}

export default App;
