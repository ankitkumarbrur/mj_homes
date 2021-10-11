import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown-now";
import Renderer from "../../components/countdown/Renderer";
import axios from "axios";

const BASE_URL = "https://api.luxurymjhomes.com/";


const CountDownThree = ({
  spaceTopClass,
  spaceBottomClass,
  dateTime,
  countDownImage,
}) => {
  const [addedDate, setaddedDate] = useState()
  const [product, setproduct] = useState()

  const fetchDOTD = async () => {
    try {

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.get(
        `${BASE_URL}dotd/`
      );

      setaddedDate(data[0].addedDate)
      setproduct(data[0].product)


    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDOTD();
  }, [])

  if (product == null) return <></>

  return (
    <div
      className={`funfact-area ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 col-lg-6 order-1 order-lg-2">
            <div className="funfact-content funfact-res text-center">
              <h2>Deal of the day</h2>
              <div className="timer">
                <Countdown date={new Date(new Date(addedDate).getTime() + 60 * 60 * 24 * 1000)} renderer={Renderer} />
              </div>
              <div className="funfact-btn funfact-btn-green btn-hover">
                <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 order-2 order-lg-1">
            <div className="funfact-image">
              <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                <img
                  src={BASE_URL + product.image[0]}
                  alt=""
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownThree.propTypes = {
  countDownImage: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default CountDownThree;
