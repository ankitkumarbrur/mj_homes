import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MenuCart from "./sub-components/MenuCart";
import { deleteFromCart } from "../../redux/actions/cartActions";

const IconGroup = ({
  currency,
  cartData,
  wishlistData,
  compareData,
  deleteFromCart,
  iconWhiteClass,
}) => {
  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  return (
    <div className={`header-right-wrap ${false ? iconWhiteClass : ""}`}>
      <div className="same-style exp-head header-search d-none d-lg-block">
        <button
          className="control"
        // onClick={(e) => searchHandle(e)}
        >
          <div className="btn-material"></div>
          <i className="pe-7s-search" />
        </button>
      </div>
      <div className="same-style account-setting">
        <button
          className="account-setting-active"
          onClick={(e) => handleClick(e)}
        >
          <i className="pe-7s-user-female" />
        </button>
        <div className="account-dropdown">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>{localStorage.getItem("userInfo") != undefined ? "Logout" : "Login"}</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                Register
              </Link>
            </li>
            {
              localStorage.getItem("userInfo") != undefined ? <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                  my account
                </Link>
              </li> : ""
            }

          </ul>
        </div>
      </div>
      <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">
            {wishlistData && wishlistData.length ? wishlistData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style cart-wrap">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </button>
        {/* menu cart */}
        <MenuCart
          cartData={cartData}
          currency={currency}
          deleteFromCart={deleteFromCart}
        />
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
  currency: PropTypes.object,
  iconWhiteClass: PropTypes.string,
  deleteFromCart: PropTypes.func,
  wishlistData: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    currency: state.currencyData,
    cartData: state.cartData,
    wishlistData: state.wishlistData,
    compareData: state.compareData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
