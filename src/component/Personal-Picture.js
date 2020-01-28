import React from "react";

const PersonalPicture = ({ perPic, alt }) => {
  return (
    <figure className="personalPic" key={perPic}>
      <img src={perPic} alt={alt} />
    </figure>
  );
};

export default PersonalPicture;
