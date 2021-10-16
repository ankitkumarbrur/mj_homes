import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getProductCartQuantity } from "../../helpers/product";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import Rating from "./sub-components/ProductRating";
import PinCode from "./sub-components/Pincode";
import ProductGridFour from "../../wrappers/product/ProductGridFour";
import { selectProduct } from "../../redux/actions/productActions";

const ProductDescriptionInfo = ({
  product,
  discountedPrice,
  currency,
  finalDiscountedPrice,
  finalProductPrice,
  gstPrice,
  cartItems,
  wishlistItem,
  addToast,
  addToCart,
  addToWishlist,
}) => {
  const dispatch = useDispatch()
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );
  const [selectedProductMaterial, setSelectedProductMaterial] = useState(
    product.variation ? product.variation[0].material[0] : ""
  );
  // const [productStock, setProductStock] = useState(
  //   product.variation ? product.variation[0].size[0].stock : product.stock
  // );
  const [variationId, setVariationId] = useState(
    product.variation ? product.variation[0].id : ""
  );
  const [productStock, setProductStock] = useState(10);
  const [quantityCount, setQuantityCount] = useState(1);

  //Product Details To be Displayed on this page
  // const [short, setshort] = useState(product.variation ? product.variation[0]. : "")

  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductMaterial
  );
  return (
    <div className="product-details-content ml-70">
      <h2>{product.name}</h2>
      <div className="product-details-price">
        {discountedPrice !== undefined || null ? (
          <Fragment>
            <div>
              {product.variation &&
                product.variation.map((single, key) => {
                  return (
                    single.color === selectedProductColor &&
                    single.material[0] === selectedProductMaterial && (
                      <div key={key}>
                        <span>
                          {currency.currencySymbol + single.discounted_price}
                        </span>
                        <span className="old">
                          {currency.currencySymbol + single.price}
                        </span>
                        <div className="gst-price">
                          Price With GST :
                          <span className="price">
                            {currency.currencySymbol + single.gstPrice}
                          </span>
                        </div>
                      </div>
                    )
                  );
                })}
            </div>
          </Fragment>
        ) : (
          <span>
            {product.variation &&
              product.variation.map((single, key) => {
                return (
                  single.color === selectedProductColor &&
                  single.material[0] === selectedProductMaterial && (
                    <div key={key}>
                      <span>{currency.currencySymbol + single.price}</span>
                      <div className="gst-price">
                        Price With GST :
                        <span className="price">
                          {currency.currencySymbol + single.gstPrice}
                        </span>
                      </div>
                    </div>
                  )
                );
              })}
          </span>
        )}
      </div>
      {/* {product.rating && product.rating > 0 ? (
        <div className="pro-details-rating-wrap">
          <div className="pro-details-rating">
            <Rating ratingValue={product.rating} />
          </div>
        </div>
      ) : (
        ""
      )} */}
      <div className="pro-details-list">
        <p>{product.shortDescription}</p>
      </div>

      {product.variation ? (
        <div className="pro-details-size-color">
          <div className="pro-details-color-wrap">
            <span>Color</span>
            <div className="pro-details-color-content">
              {product.variation.map((single, key) => {
                return (
                  <label
                    htmlFor={single.id}
                    className={`pro-details-color-content--single ${single.color.toLowerCase()}`}
                    key={key}
                    style={{ marginRight: "5vw" }}
                  >
                    <input
                      id={single.id}
                      type="radio"
                      value={single.color.toLowerCase()}
                      name="product-color"
                      checked={
                        single.color === selectedProductColor &&
                          single.material[0] === selectedProductMaterial
                          ? "checked"
                          : ""
                      }
                      onChange={() => {
                        setSelectedProductColor(single.color);
                        setSelectedProductMaterial(single.material[0]);
                        setVariationId(single.id);
                        // setProductStock(single.size[0].stock);
                        setQuantityCount(quantityCount);
                        dispatch(selectProduct(single.size, single.weight, single.material));
                      }}
                    />
                    <span className="checkmark"></span>
                    <div
                      style={{
                        paddingLeft: "2vh",
                        paddingRight: "2vh",
                        position: "absolute",
                        width: "fit-content",
                        top: "-6px",
                        marginLeft: "5px",
                      }}
                    >
                      {single.material[0].toUpperCase()}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
          {/* <div className="pro-details-size">
            <span>Material</span>
            <div className="pro-details-size-content">
              {product.variation &&
                product.variation.map((single) => {
                  return (
                    single.color === selectedProductColor &&
                    single.material.map((singleMaterial, key) => {
                      return (
                        <label
                          className={`pro-details-size-content--single`}
                          key={key}
                        >
                          <input
                            type="radio"
                            value={singleMaterial.material}
                            checked={
                              (single.color === selectedProductColor && single.material[0] === selectedProductMaterial)
                                ? "checked"
                                : ""
                            }
                            onChange={() => {
                              setSelectedProductMaterial(singleMaterial);
                              // setProductStock(singleSize.stock);
                              setQuantityCount(1);
                            }}
                          />
                          <span className="size-name">{singleMaterial}</span>
                        </label>
                      );
                    })
                  );
                })}
            </div>
          </div> */}
        </div>
      ) : (
        ""
      )}
      {product.affiliateLink ? (
        <div className="pro-details-quality">
          <div className="pro-details-cart btn-hover ml-0">
            <a
              href={product.affiliateLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Buy Now
            </a>
          </div>
        </div>
      ) : (
        <div className="pro-details-quality">
          <div className="cart-plus-minus">
            <button
              onClick={() =>
                setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
              }
              className="dec qtybutton"
            >
              -
            </button>
            <input
              className="cart-plus-minus-box"
              type="text"
              value={quantityCount}
              readOnly
            />
            <button
              onClick={() =>
                setQuantityCount(
                  quantityCount < productStock - productCartQty
                    ? quantityCount + 1
                    : quantityCount
                )
              }
              className="inc qtybutton"
            >
              +
            </button>
          </div>
          <div className="pro-details-cart btn-hover">
            {productStock && productStock > 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    product,
                    addToast,
                    quantityCount,
                    selectedProductColor,
                    selectedProductMaterial,
                    variationId
                  )
                }
                disabled={productCartQty >= productStock}
              >
                {" "}
                Add To Cart{" "}
              </button>
            ) : (
              <button disabled>Out of Stock</button>
            )}
            {/* <button
              onClick={() =>
                addToCart(
                  product,
                  addToast,
                  quantityCount,
                  selectedProductColor,
                  selectedProductMaterial
                )
              }
            >
              {" "}
              Add To Cart{" "}
            </button> */}
          </div>
          <div className="pro-details-wishlist">
            <button
              className={wishlistItem !== undefined ? "active" : ""}
              disabled={wishlistItem !== undefined}
              title={
                wishlistItem !== undefined
                  ? "Added to wishlist"
                  : "Add to wishlist"
              }
              onClick={() => addToWishlist(product, addToast)}
            >
              <i className="pe-7s-like" />
            </button>
          </div>
        </div>
      )}

      {/* Pincode */}
      <PinCode />

      {product.subcategory ? (
        <div className="pro-details-meta">
          <span>Categories :</span>
          <ul>
            {product.subcategory.map((single, key) => {
              return (
                <li key={key}>
                  <Link to={process.env.PUBLIC_URL + `/shop-grid-standard?q=${single}`}>
                    {single}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
      {/* {product.tag ? (
        <div className="pro-details-meta">
          <span>Tags :</span>
          <ul>
            {product.tag.map((single, key) => {
              return (
                <li key={key}>
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    {single}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )} */}
    </div>

  );
};

ProductDescriptionInfo.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  addToast: PropTypes.func,
  cartItems: PropTypes.array,
  compareItem: PropTypes.array,
  currency: PropTypes.object,
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.object,
  wishlistItem: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize,
      variationId
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize,
          variationId
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductDescriptionInfo);
