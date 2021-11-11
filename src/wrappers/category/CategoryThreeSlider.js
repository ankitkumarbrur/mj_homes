import PropTypes from "prop-types";
import React from "react";
import categoryData from "../../data/category/category-two.json";
import CategoryThreeSingle from "../../components/category/CategoryThreeSingle.js";
import SectionTitle from "../../components/section-title/SectionTitle";

const CategoryThreeSlider = ({ spaceTopClass, spaceBottomClass }) => {
  const homepage = localStorage.getItem("homepage") ? (JSON.parse(localStorage.getItem("homepage"))) : []
  return (
    <div
      className={`collections-area ${spaceTopClass ? spaceTopClass : ""}  ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        <SectionTitle
          titleText="Rooms"
          positionClass="text-center"
          spaceClass="mb-35"
        />
        <div className="collection-wrap">
          {

            categoryData &&
            categoryData.map((single, key) => {
              let img;
              if (key == 0) img = homepage.livingRoom
              if (key == 1) img = homepage.drawingRoom
              if (key == 2) img = homepage.diningRoom
              if (key == 3) img = homepage.kitchen
              if (key == 4) img = homepage.bedRoom
              if (key == 5) img = homepage.outdoor

              return <CategoryThreeSingle data={single} key={key} img={img} />;
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
