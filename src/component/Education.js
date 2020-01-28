import React from "react";

const Education = ({ startDate, endDate, courseStudies, universityName }) => {
  return (
    <>
      <div className="experDiv">
        <span className="experH">{startDate}</span>
        <h5 className="adressP">{courseStudies}</h5>
        <p className="exper-p">{universityName}</p>
      </div>
    </>
  );
};

export default Education;
