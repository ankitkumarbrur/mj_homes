import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import customizeData from "../../data/helpers-page/customize-data.json";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";

import axios from "axios";
import { useToasts } from "react-toast-notifications";

const BASE_URL = "https://api.luxurymjhomes.com/";

const Contact = ({ location }) => {
  const { pathname } = location;
  const { addToast } = useToasts();

  const initialState = "";
  const [name, setname] = useState(initialState);
  const [email, setemail] = useState(initialState);
  const [city, setcity] = useState(initialState);
  const [state, setstate] = useState(initialState);
  const [message, setmessage] = useState(initialState);
  const [phone, setphone] = useState(initialState);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("phone", phone);
      formData.append("message", message);
      formData.append("email", email);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(`${BASE_URL}query/`, formData, config);

      addToast("We will get back to you within 48 hours.", {
        appearance: "success",
        autoDismiss: true,
      });

      setname(initialState);
      setcity(initialState);
      setemail(initialState);
      setphone(initialState);
      setmessage(initialState);
      setstate(initialState);
    } catch (error) {
      addToast("Failed to Submit Query.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <Fragment>
      <MetaTags>
        <title>MJ Homes | Customize</title>
        <meta name="description" content="Contact of MJ HOMES." />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Customize
      </BreadcrumbsItem>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="welcome-content text-center">
              <h5>MJ Homes</h5>
              <h1>Customize</h1>
            </div>

            <div className="heading-img mb-60">
              <img src="/assets/img/customize/customize.jpeg" alt="" />
            </div>

            <div className="step-by-step text-center">
              <h2>How Does It Work?</h2>
              <div className="step-by-step-process">
                {customizeData &&
                  customizeData.map((single) => {
                    return (
                      <div className="step-by-step-process-img" key={single.id}>
                        <img
                          src={process.env.PUBLIC_URL + single.titleImage}
                          alt=""
                        />
                        <h3>{single.title}</h3>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="reliability text-center welcome-content ">
              <h1>Our Reliability</h1>
              <img
                className="reliability-img"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img/customize/reliability.jpeg"
                }
                alt=""
              />
            </div>
            <div className="welcome-content text-center">
              <h1>Customize the way you want</h1>
              <FeatureIconFour
                bgImg="/assets/img/bg/shape.png"
                containerClass="container-fluid"
                gutterClass="padding-10-row-col"
                spaceTopClass="pt-40"
                spaceBottomClass="pb-40"
              />
            </div>

            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+91 7027540171</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:buildmjhomes@gmail.com">
                          buildmjhomes@gmail.com
                        </a>
                      </p>
                      <p>
                        <a href="https://www.luxurymjhomes.com">
                          www.luxurymjhomes.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Ward no 21, </p>
                      <p>Railway Station Rd, Basant Vihar</p>
                      <p>Bahadurgarh, Haryana 124507</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a
                          href="https://www.youtube.com/channel/UC_3wnfw_UhUKJFcOnriYZPQ"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/luxurymjhomes"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/luxurymjhomes/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/mj-homes-756020205/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://in.pinterest.com/buildmjhomes/_saved/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          name="name"
                          placeholder="Name*"
                          type="text"
                          onChange={(e) => setname(e.target.value)}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          name="email"
                          placeholder="Email*"
                          type="email"
                          onChange={(e) => setemail(e.target.value)}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          name="city"
                          placeholder="City*"
                          type="text"
                          onChange={(e) => setcity(e.target.value)}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          name="state"
                          placeholder="State*"
                          type="text"
                          onChange={(e) => setstate(e.target.value)}
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="contact"
                          placeholder="Contact*"
                          type="text"
                          onChange={(e) => setphone(e.target.value)}
                        />
                      </div>

                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Your Message*"
                          defaultValue={""}
                          onChange={(e) => setmessage(e.target.value)}
                        />
                        <button
                          className="submit"
                          type="submit"
                          onClick={(e) => {
                            submitHandler(e);
                          }}
                        >
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object,
};

export default Contact;
