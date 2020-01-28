import React from "react";

const Education = ({ startDate, endDate, description, comanyName }) => {
  return (
    <>
      <div className="experDiv">
        <span className="experH">{startDate}</span>
        <h5 className="company-name-H">{comanyName}</h5>
        <p className="exper-p">{comanyName}</p>
        <div className="experD">
          <p className="exper-p1">{description}</p>
        </div>
        {/* <div className="experDiv">
        <span className="experH">{startDate}</span>
        <h5 className="adressP">{courseStudies}</h5>
        <p className="exper-p">{universityName}</p>
      </div> */}
      </div>
    </>
  );
};

export default Education;
