import React from "react";

const Foods = props => {
  const { name } = props;
  return (
    <div>
      <h1>Makanan Favorit Saya Adalah {name}</h1>
    </div>
  );
};

const Foods2 = props => {
  const { store } = props;
  return (
    <div>
      <p>Saya Biasa Beli di {store}</p>
    </div>
  );
};

const Food = () => {
  return (
    <div>
      <Foods name="Serabi" />
      <Foods2 store="Warung Bu Sri" />
    </div>
  );
};

export default Food;
