import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const PrivacyPolicy = ({ location }) => {
  const { pathname } = location;
  return (
    <Fragment>
      <MetaTags>
        <title>MJ Homes | Return Policy</title>
        <meta name="description" />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Return Policy
      </BreadcrumbsItem>
      <LayoutOne>
        <Breadcrumb />
        <div className={`welcome-area pt-100 pb-95`}>
          <div className="container">
            <div className="welcome-content text-center">
              <h1>Return Policy of MJ Homes</h1>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default PrivacyPolicy;
