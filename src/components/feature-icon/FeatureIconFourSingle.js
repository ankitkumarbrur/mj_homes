import PropTypes from "prop-types";
import React from "react";

const FeatureIconFourSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 mb-20 ">
      <div
        className="support-wrap-3 text-center"
        style={{ backgroundColor: `${data.backgroundColor}` }}
      >
        <div className="support-content-3">
          <img src={process.env.PUBLIC_URL + data.titleImage} alt="" />
          <p>{data.title}</p>
        </div>
      </div>
    </div>
  );
};

FeatureIconFourSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string,
};

export default FeatureIconFourSingle;
