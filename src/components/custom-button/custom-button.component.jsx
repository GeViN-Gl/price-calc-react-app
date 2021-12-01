import "./custom-button.syles.scss";

import React from "react";

const CustomButton = ({ name, currValue, setFunction }) => {
  return (
    <button
      onClick={() => {
        switch (name) {
          case `+`:
            setFunction(++currValue);
            break;

          case `-`:
            currValue > 1 && setFunction(--currValue);
            break;

          default:
            setFunction(name);
            break;
        }
      }}
      className={`btn${currValue === name ? ` active` : ` inactive`}`}
    >
      {name}
    </button>
  );
};

export default CustomButton;
