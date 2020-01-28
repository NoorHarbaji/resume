import React from "react";

const CvItem = ({ title, children }) => {
  return (
    <section className="cv-item">
      <h2 className="cv-item__title"> {title}</h2>
      <div className="cv-item__content">
        <p>{children}</p>
      </div>
    </section>
  );
};

export default CvItem;
