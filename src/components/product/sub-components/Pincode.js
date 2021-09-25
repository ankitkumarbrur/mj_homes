import React, { useEffect, useState } from "react";

const PinCode = () => {
  const [pinCode, setPinCode] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const checkAvailability = (e) => {
    e.preventDefault();
    if (pinCode === "124001") {
      console.log(pinCode);
      setPinCode("");
      setIsChecked(true);
    }
  };

  return (
    <>
      <form
        className="pro-details-pincode btn-hover"
        onSubmit={checkAvailability}
      >
        <label>
          Eligible for delivery?
          <input
            className="pincode-input"
            type="number"
            name="pincode"
            placeholder="110001"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
        </label>
        <button type="submit">Check</button>
      </form>
      {isChecked ? <p>Del</p> : ""}
    </>
  );
};

export default PinCode;
