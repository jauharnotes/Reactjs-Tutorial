import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [state, setState] = useState("");

  const handleSubmit = () => {
    alert(`Hi ${state}`);
  };

  const handleChange = e => {
    setState(e.target.value);
  };

  return (
    <div>
      <h1>Masukan Nama</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nama:
          <input type="text" value={state} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
