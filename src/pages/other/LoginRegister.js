import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link, Redirect } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, register } from "../../redux/actions/userActions";
import { addToCart } from "../../redux/actions/cartActions";
import { useToasts } from "react-toast-notifications";
import axios from "axios";

const LoginRegister = ({ location }) => {
  const { pathname } = location;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [data, setdata] = useState(true);

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const { userInfo, error, loading } = useSelector((state) => state.userLogin);
  const { products } = useSelector((state) => state.productData);

  // const fetchData = async () => {

  // const formData = new FormData();
  // formData.append("userId", userInfo.id);

  // const config = {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // };
  // const { data } = await axios.post(
  //   `${BASE_URL}/api/order/getCartProducts/`,
  //   formData,
  //   config
  // );

  // // console.log(data.cartList);
  // // console.log(products);
  // (data.cartList).forEach((product) => {
  //   const cartItem = products.filter(item => item.id == product.productId)[0];
  //   console.log(cartItem);
  //   // const items = products.filter(item => item.id == product.productId);
  //   // console.log(cartItem.id, items.length);
  //   dispatch(addToCart(cartItem, addToast, 1, null, null));

  // })

  // }

  const loginHandler = (e) => {
    e.preventDefault();
    if (username != "" && password != "") {
      dispatch(login(username, password, addToast));
    }
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout(addToast));
  };

  const registerHandler = (e, data) => {
    e.preventDefault();

    if (
      firstname != "" &&
      lastname != "" &&
      pass != "" &&
      passConfirm != "" &&
      email != ""
    ) {
      dispatch(register(firstname, lastname, pass, email, addToast));
    }
  };

  useEffect(() => {
    if (
      !loading &&
      localStorage.getItem("userInfo") !== null &&
      localStorage.getItem("userInfo") !== undefined
    )
      if (userInfo && data) {
        // fetch_data();
        // fetchData();
        setdata(false);
      }
  }, [userInfo, loading]);

  if (loading) {
    return (
      <div className="flone-preloader-wrapper">
        <div className="flone-preloader">
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Login</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login Register
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        {userInfo != null ? (
                          <div
                            style={{
                              textAlign: "center",
                            }}
                          >
                            <h1
                              style={{
                                textAlign: "center",
                              }}
                            >
                              Hey,&nbsp;
                              <div
                                style={{
                                  display: "inline-block",
                                  color: "#fd7e14",
                                }}
                              >
                                {localStorage.getItem("userName")}
                              </div>
                            </h1>
                            <button
                              type="submit"
                              onClick={logoutHandler}
                              className="LogOut-btn"
                            >
                              Log Out
                            </button>
                          </div>
                        ) : (
                          <div className="login-form-container">
                            <div className="login-register-form">
                              <form onSubmit={loginHandler}>
                                <input
                                  type="text"
                                  name="user-name"
                                  placeholder="Username"
                                  onChange={(e) => setUsername(e.target.value)}
                                />
                                <input
                                  type="password"
                                  name="user-password"
                                  placeholder="Password"
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="button-box">
                                  <div className="login-toggle-btn">
                                    {/* <input type="checkbox" />
                                    <label className="ml-10">Remember me</label> */}
                                    <Link to={process.env.PUBLIC_URL + "/"}>
                                      Forgot Password?
                                    </Link>
                                  </div>
                                  <button type="submit">
                                    <span>Login</span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        )}
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={registerHandler}>
                              <input
                                type="text"
                                name="first-name"
                                placeholder="First Name"
                                onChange={(e) => setFirstname(e.target.value)}
                              />
                              <input
                                type="text"
                                name="last-name"
                                placeholder="Last Name"
                                onChange={(e) => setLastname(e.target.value)}
                              />

                              <input
                                name="user-email"
                                placeholder="Email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              {/* <input
																name="user-phone"
																placeholder="Phone"
																type="tel"
																pattern="[0-9]{10}"
																onChange={(e) =>
																	setTel(
																		e.target
																			.value,
																	)
																}
															/> */}
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                onChange={(e) => setPass(e.target.value)}
                              />
                              <input
                                type="password"
                                name="confirm-password"
                                placeholder="Confirm Password"
                                onChange={(e) => setPassConfirm(e.target.value)}
                              />

                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object,
};

export default LoginRegister;
