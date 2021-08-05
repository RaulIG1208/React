import React, { useState } from "react";
import SelectList from "./SelectList";

function SelectsAnidados() {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>Argentina</h3>
      <SelectList
        title="provincias"
        url="https://apis.datos.gob.ar/georef/api/provincias"
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="departamentos"
          url={`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${state}&max=16`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {state && (
        <SelectList
          title="municipios"
          url={`https://apis.datos.gob.ar/georef/api/municipios?provincia=${state}`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
}

export default SelectsAnidados;
