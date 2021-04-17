import React, { useState } from "react";

const Drink = () => {
  const [state, setState] = useState("Bajigur");

  const handleChange = () => {
    setState("Bandrex");
  };

  return (
    <div>
      <h1>Hello Everyone</h1>
      <p>Saya Suka Minum {state}</p>
      <button onClick={handleChange}>Change Drink</button>
    </div>
  );
};

export default Drink;
