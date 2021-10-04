import PropTypes from "prop-types";
import React from "react";
import ThreeD from "../3dmodel/ThreeD";
import { useEffect } from "react";
//get searched products



const productImageGallerySticky = ({ product }) => {

  return (
    <div className="product-large-image-wrapper product-large-image-wrapper--sticky">
      {product.discount || product.new ? (
        <div className="product-img-badges">
          {product.discount ? (
            <span className="pink">-{product.discount}%</span>
          ) : (
            ""
          )}
          {product.new ? <span className="purple">New</span> : ""}
        </div>
      ) : (
        ""
      )}
      <div className="product-sticky-image mb--10">
        {product["model3d"] && (
          <div className="product-sticky-image__single-3d mb-10">
            {/* Uncomment after correction in Api and delete hardcoded model */}
            {/* <ThreeD name="model (2).glb" /> */}
            <ThreeD name={product["model3d"]} />
          </div>
        )}

        {product.image &&
          product.image.map((single, id) => {
            return (
              <div className="product-sticky-image__single mb-10" key={id}>
                <img
                  src={process.env.PUBLIC_URL + single}
                  alt=""
                  className="img-fluid"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

productImageGallerySticky.propTypes = {
  product: PropTypes.object,
};

export default productImageGallerySticky;
