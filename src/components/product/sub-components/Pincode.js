import React, { useState } from "react";

const PinCode = () => {
  const [pinCode, setPinCode] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [del, setDel] = useState(false);

  const checkAvailability = (e) => {
    e.preventDefault();
    if (pinCode === "124001") {
      setIsChecked(true);
      setDel(true);
      setPinCode("");
    } else {
      setIsChecked(true);
      setDel(false);
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
      {isChecked &&
        (del ? (
          <p>Deliverable</p>
        ) : (
          <p>We are currently not delivering in your area.</p>
        ))}
    </>
  );
};

export default PinCode;
