import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy, useState } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import ReactGA from 'react-ga';
import RouteChangeTracker from "./RouteChangeTracker";
import axios from "axios";

// home pages
const Home = lazy(() => import("./pages/home/Home"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));

// product pages
const Product = lazy(() => import("./pages/shop-product/ProductSticky"));

// other pages
const About = lazy(() => import("./pages/other/About"));
const PrivacyPolicy = lazy(() => import("./pages/other/PrivacyPolicy"));
const ReturnPolicy = lazy(() => import("./pages/other/ReturnPolicy"));
const TermsAndConditions = lazy(() =>
  import("./pages/other/TermsAndConditions")
);
const Contact = lazy(() => import("./pages/other/Contact"));
const B2B = lazy(() => import("./pages/other/B2B"));
const Customize = lazy(() => import("./pages/other/Customize"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));
const ResetPassword = lazy(() => import("./pages/other/ResetPassword"));
const forgotPassword = lazy(() => import("./pages/other/ForgotPassword"));
const activateAccount = lazy(() => import("./pages/other/ActivateAccount"));

const TRACKING_ID = "UA-188159088-1";
const BASE_URL = "https://api.luxurymjhomes.com/";
ReactGA.initialize(TRACKING_ID);

const App = (props) => {

  const [sliderData, setsliderData] = useState()
  const [homepage, sethomepage] = useState()
  const [blog, setblog] = useState()

  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json"),
        },
      })
    );
  });


  const fetchCarousel = async () => {

    try {
      const { data } = await axios.get(`${BASE_URL}carousel/`);
      localStorage.setItem("sliderData", JSON.stringify(data));
      setsliderData(data)
      const res = await axios.get(`${BASE_URL}homepage/`);
      localStorage.setItem("homepage", JSON.stringify(res.data[0]));
      sethomepage(res.data[0])
      const response = await axios.get(`${BASE_URL}blog/`);
      localStorage.setItem("blog", JSON.stringify(response.data));
      setblog(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCarousel();
  }, []);

  if (blog != undefined && homepage != undefined && sliderData != undefined)
    return (
      <ToastProvider placement="bottom-left">
        <BreadcrumbsProvider>
          <Router>
            <ScrollToTop>
              <Suspense
                fallback={
                  <div className="MJHOMES-preloader-wrapper">
                    <div className="MJHOMES-preloader">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                }
              >
                <Switch>
                  <Route
                    exact
                    path={process.env.PUBLIC_URL + "/"}
                    component={Home}
                  />
                  {/* Shop pages */}
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-standard"}
                    component={ShopGridStandard}
                  />
                  {/* Shop product pages */}
                  <Route
                    path={process.env.PUBLIC_URL + "/product/:id"}
                    render={(routeProps) => (
                      <Product {...routeProps} key={routeProps.match.params.id} />
                    )}
                  />
                  {/* <Route
									path={process.env.PUBLIC_URL + "/product"}
									render={(routeProps) => (
										<Product
											{...routeProps}
											// key={routeProps.match.params.id}
										/>
									)}
								/> */}
                  {/* Other pages */}
                  <Route
                    path={process.env.PUBLIC_URL + "/about"}
                    component={About}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/B2B"}
                    component={B2B}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/Customize"}
                    component={Customize}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/return-policy"}
                    component={ReturnPolicy}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/privacy-policy"}
                    component={PrivacyPolicy}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/terms-and-conditions"}
                    component={TermsAndConditions}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/contact"}
                    component={Contact}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/my-account"}
                    component={MyAccount}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/login-register"}
                    component={LoginRegister}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/cart"}
                    component={Cart}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/wishlist"}
                    component={Wishlist}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/compare"}
                    component={Compare}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/checkout"}
                    component={Checkout}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/resetPassword/:id"}
                    component={ResetPassword}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/forgotPassword"}
                    component={forgotPassword}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/activateAccount/:id"}
                    component={activateAccount}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/not-found"}
                    component={NotFound}
                  />
                  <Route exact component={NotFound} />
                </Switch>
                <RouteChangeTracker />
              </Suspense>
            </ScrollToTop>
          </Router>
        </BreadcrumbsProvider>
      </ToastProvider>
    );
  else
    return (
      <div className="MJHOMES-preloader-wrapper">
        <div className="MJHOMES-preloader">
          <span></span>
          <span></span>
        </div>
      </div>
    )

};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(multilanguage(App));
