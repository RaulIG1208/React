import React, { memo } from "react";

const ContadorHijo = () => {
  console.log("hola desde Contador hijo");
  return (
    <div>
      <h2>Contador hijo</h2>
    </div>
  );
};

export default memo(ContadorHijo);
