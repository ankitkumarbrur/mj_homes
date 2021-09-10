import PropTypes from "prop-types";
import React from "react";
import categoryData from "../../data/category/category-two.json";
import CategoryThreeSingle from "../../components/category/CategoryThreeSingle.js";
import SectionTitle from "../../components/section-title/SectionTitle";

const CategoryThreeSlider = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`collections-area ${spaceTopClass ? spaceTopClass : ""}  ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <SectionTitle
          titleText="CATEGORY"
          positionClass="text-center"
          spaceClass="mb-35"
        />
        <div className="collection-wrap">
          {categoryData &&
            categoryData.map((single, key) => {
              return <CategoryThreeSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

CategoryThreeSlider.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default CategoryThreeSlider;
