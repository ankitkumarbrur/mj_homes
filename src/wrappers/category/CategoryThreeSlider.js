import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import categoryData from "../../data/category/category-two.json";
import CategoryThreeSingle from "../../components/category/CategoryThreeSingle.js";
import SectionTitle from "../../components/section-title/SectionTitle";

const CategoryThreeSlider = ({ spaceTopClass, spaceBottomClass }) => {
	// swiper slider settings
	const settings = {
		loop: false,
		spaceBetween: 30,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			992: {
				slidesPerView: 4,
			},
			576: {
				slidesPerView: 3,
			},
			320: {
				slidesPerView: 1,
			},
		},
	};
	return (
		<div
			className={`collections-area ${
				spaceTopClass ? spaceTopClass : ""
			}  ${spaceBottomClass ? spaceBottomClass : ""}`}
		>
			<div className="container">
				<SectionTitle
					titleText="CATEGORY"
					positionClass="text-center"
					spaceClass="mb-55"
				/>
				<div className="collection-wrap">
					{categoryData &&
						categoryData.map((single, key) => {
							return (
								<CategoryThreeSingle
									data={single}
									key={key}
									// sliderClass="swiper-slide"
								/>
							);
						})}
				</div>
			</div>

			{/* <div className="container">
        <SectionTitle titleText="CATEGORY" positionClass="text-center" />
        <div className="collection-wrap">
          {categoryData &&
            categoryData.map((single, key) => {
              return <CategoryThreeSingle data={single} key={key} />;
            })}
        </div>
      </div> */}
		</div>
	);
};

CategoryThreeSlider.propTypes = {
	spaceBottomClass: PropTypes.string,
	spaceTopClass: PropTypes.string,
};

export default CategoryThreeSlider;
