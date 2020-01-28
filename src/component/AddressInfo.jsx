import React from "react";

const AddressInfo = ({ streetName, twonCity, postZipCountry }) => {
  return (
    <>
      <h5 className="adressH">Adress :</h5>
      <p className="adressP">
        {streetName}, {twonCity}, {postZipCountry}
      </p>
    </>
  );
};

export default AddressInfo;
