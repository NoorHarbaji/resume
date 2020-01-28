import React from "react";

const ContactList = ({ name, value }) => {
  return (
    <>
      <li className="cL">
        <div className="cLSpan">
          <span>{name}</span>
          <p className="cLP">{value}</p>
        </div>
      </li>
    </>
  );
};

export default ContactList;
