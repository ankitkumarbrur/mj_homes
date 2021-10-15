import axios from "axios";
import React, { useState, useEffect } from "react";

const BASE_URL = "https://api.luxurymjhomes.com/";

const PinCode = () => {
  const [pinCodeData, setPinCodeData] = useState([]);
  const [pinCode, setPinCode] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showDel, setShowDel] = useState(false);

  const checkAvailability = (e) => {
    e.preventDefault();
    if (pinCodeData.includes(Number(pinCode))) {
      setIsChecked(true);
      setShowDel(true);
      setPinCode("");
      setTimeout(() => {
        setIsChecked(false);
      }, 3000);
    } else {
      setIsChecked(true);
      setShowDel(false);
      setPinCode("");
      setTimeout(() => {
        setIsChecked(false);
      }, 3000);
    }
  };

  useEffect(async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}pincode/`);
      setPinCodeData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

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
        (showDel ? (
          <p>Deliverable in your area.</p>
        ) : (
          <p>We are currently not delivering in your area.</p>
        ))}
    </>
  );
};

export default PinCode;
