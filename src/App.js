import React from "react";

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();

  // + before new Date tells javascript to cast object as an integer
  const difference = new Date(`10/01/${year}`) - +new Date();
};

function App() {
  return <></>;
}

export default App;
