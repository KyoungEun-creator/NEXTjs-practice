import React from "react";
import { useState } from "react";

import b_off from "../../assets/images/b_off.png";
import b_on from "../../assets/images/b_on.png";

const Lightbulb = () => {
  const [light, setLight] = useState(false);

  return (
    <>
      <img
        src={light ? b_on : b_off}
        alt={light ? "on" : "off"}
        onClick={() => setLight((prev) => !prev)}
      />
    </>
  );
};

export default Lightbulb;
