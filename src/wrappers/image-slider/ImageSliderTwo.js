import React from "react";
import Swiper from "react-id-swiper";
import { connect } from "react-redux";
import ImageSliderOneSingle from "../../components/image-slider/ImageSliderOneSingle";
// import product from "../../data/image-slider/image-slider-two.json";

const ImageSliderTwo = ({ product }) => {
  const settings = {
    loop: false,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
  };

  const shuffleItems = (array) => {
    let i = array.length - 1;
    for (i = 0; i < array.length - 1; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const shuffleProducts = shuffleItems(product);
  return (
    <div className="image-slider-area">
      <div className="image-slider-active">
        <Swiper {...settings}>
          {product &&
            shuffleProducts.map((single, key) => {
              return (
                <ImageSliderOneSingle
                  data={single}
                  sliderClass="swiper-slide"
                  key={key}
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.productData.products,
  };
};

export default connect(mapStateToProps)(ImageSliderTwo);
