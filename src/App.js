import React from "react";

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();

  // + before new Date tells javascript to cast object as an integer in microseconds
  const difference = +new Date(`10/01/${year}`) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    };
  }
};

function App() {
  return <></>;
}

export default App;
