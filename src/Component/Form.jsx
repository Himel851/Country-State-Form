import React, { useState } from "react";
import Billing from "./Billing";
import Shipping from "./Shipping";
import "./style.css";


const Form = () => {
      // Declaration
  const [details, setDetails] = useState({
    name: "",
    division: "",
    district: "",
    city: "",
    union: "",
    zipcode: "",
    village: "",
    house: "",
    phone: "",
    fax: "",
  });
  // Copy Declaration
  const [copy, setCopy] = useState(details);
  const handleSUbmit = (e) => {
    e.preventDefault();
    setCopy(details);
  };
  return (
    <>
      <form className="form">
        <Billing details={details} setDetails={setDetails} />
        <Shipping details={details} setDetails={setDetails} handleSUbmit={handleSUbmit} copy={copy} />
      </form>
    </>
  );
};

export default Form;
