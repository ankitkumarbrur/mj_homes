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
        <title>MJ Homes | Refund Policy</title>
        <meta name="description" />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Refund Policy
      </BreadcrumbsItem>
      <LayoutOne>
        <Breadcrumb />
        <div className={`welcome-area pt-100 pb-95`}>
          <div className="container">
            <div className="return-content text-center">
              <h1>Refund Policy of MJ Homes</h1>

              <div className="mt-50">
                <h2>Time Frame - 7 days</h2>
                <p>
                  If you change your mind after placing an order, you may cancel
                  it (or a portion of it) within 07 (seven) days after receiving
                  the order confirmation or before it is dispatched, whichever
                  comes first. Fee While processing the refund, a 2.5 percent
                  cancellation fee will be added to the amount you paid. Prior
                  to the cancellation, any cashback received on the order will
                  be withdrawn from MJ Homes credits. The cashback amount will
                  be deducted from the refund amount of the cancelled product if
                  the same cashback has been used to place another order in full
                  or in part.
                </p>
              </div>
              <div className="mt-50">
                <h2>Time frame - 7 to 10 days</h2>
                <p>
                  While processing the refund, a 25 percent cancellation fee
                  will be added to the amount you paid. Prior to the
                  cancellation, any cashback received on the order will be
                  withdrawn from MJ Homes credits. The cashback amount will be
                  deducted from the refund amount of the cancelled product if
                  the same cashback has been used to place another order in full
                  or in part.
                </p>
              </div>
              <div className="mt-50">
                <h2>Time Frame - Post 10 days</h2>
                <p>
                  No refund will be initiated, if the cancellation occurs after
                  the product is delivered. Prior to the cancellation, any
                  cashback received on the order will be withdrawn from MJ Homes
                  credits. The cashback amount will be deducted from the refund
                  amount of the cancelled product if the same cashback has been
                  used to place another order in full or in part.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default PrivacyPolicy;
