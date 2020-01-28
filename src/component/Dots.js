import React from "react";

const Dots = ({ value }) => {
  let dots = [];
  for (var i = 0; i < 5; i++) {
    dots.push(<span className={value > i ? "full-dots dot" : "dot"} />);
  }

  return (
    <>
      <div className="skill-div1 ">{dots}</div>
    </>
  );
};

export default Dots;
