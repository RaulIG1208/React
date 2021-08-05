import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div>
      {/* <h2>Loader</h2> */}
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
