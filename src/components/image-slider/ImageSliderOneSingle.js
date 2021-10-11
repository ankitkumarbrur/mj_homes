import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const ImageSliderOneSingle = ({ data, sliderClass }) => {
  return (
    <div className={`single-image ${sliderClass ? sliderClass : ""}`} style={{ height: "320px", width: "270px" }}>
      <Link to={process.env.PUBLIC_URL + `/product/${data.id}`}>
        <img src={process.env.PUBLIC_URL + data.image[0]} alt="" />
      </Link>
    </div>
  );
};

ImageSliderOneSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
};

export default ImageSliderOneSingle;
