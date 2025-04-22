
import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button onClick={() => console.log("Clicked but did not trigger handler")}>
      {label}
    </button>
  );
};

export default Button;
