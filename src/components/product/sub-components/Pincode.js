import React, { Fragment, useState } from "react";

const PinCode = () => {
  const [pinCode, setPinCode] = useState("");

  const checkAvailability = (e) => {
    e.preventDefault();
    if (pinCode) {
      console.log(pinCode);
      setPinCode("");
    }
  };
  return (
    <>
      <form
        className="pro-details-pincode btn-hover"
        onSubmit={checkAvailability}
      >
        <span>Eligible for delivery?</span>
        <input
          className="pincode-input"
          type="number"
          name="pincode"
          maxLength="6"
          placeholder="110001"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
        />
        <button type="submit">Check</button>
      </form>
    </>
  );
};

export default PinCode;
