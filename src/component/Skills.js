import React from "react";
import Dots from "./Dots";

const Skills = ({ skillName, value }) => {
  return (
    <>
      <div className="dot-div">
        <span className="s-dot">{skillName}</span>
        <Dots value={value} />
      </div>
    </>
  );
};

export default Skills;
