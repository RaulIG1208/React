import React, { useState } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const handlePlus = () => setContador(contador + 1);

  const handleSub = () => setContador(contador - 1);

  return (
    <div>
      <h2>Contador</h2>
      <h3>{contador}</h3>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleSub}>-</button>
      <hr />
      <ContadorHijo />
    </div>
  );
};

export default Contador;
