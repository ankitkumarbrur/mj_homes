import PropTypes from "prop-types";
import React from "react";
import ThreeD from "../3dmodel/ThreeD";

const productImageGallerySticky = ({ product }) => {
<<<<<<< HEAD
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
						<ThreeD name="dining2.glb" />
						{/* <ThreeD name={product["3dModel"]}/> */}
					</div>
				)}
=======
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
            <ThreeD name="shoe-draco.glb" />
            {/* <ThreeD name={product["model3d"]} /> */}
          </div>
        )}
>>>>>>> 3efc341e70dc8a7152893f477e9095f7a3a7c986

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
