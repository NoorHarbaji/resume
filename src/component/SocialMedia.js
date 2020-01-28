import React from "react";

const SocialMedia = ({ name, className }) => {
  return (
    <>
      <li>
        <div className="cLSpan">
          <a href="#" className={className} />
          <p>{name}</p>
        </div>
      </li>
    </>
  );
};

export default SocialMedia;
