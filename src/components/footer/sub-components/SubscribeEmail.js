import Axios from "axios";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { useToasts } from "react-toast-notifications";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const base_url = "https://api.luxurymjhomes.com/";

const SubscribeEmail = () => {
  const { addToast } = useToasts();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      console.log(email)
      const { data } = await Axios.post(
        `${base_url}subscribe/`,
        formData,
        config
      );
      setEmail("");
      addToast("Subscribed", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error) {
      addToast("Already Subscribed", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
  return (
    <Fragment>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <div className="mc-form">
          <input
            id="mc-form-email"
            className="email"
            type="email"
            required
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="subs-btn" type="submit" style={{ color: "#ff9f00", border: "1px solid #ff9f00", padding: "0.5rem" }}>
            SUBSCRIBE
          </button>
        </div>
      </form>
    </Fragment>
  );
};

SubscribeEmail.propTypes = {
  mailchimpUrl: PropTypes.string,
};

export default SubscribeEmail;
