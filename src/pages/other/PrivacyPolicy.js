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
        <title>MJ Homes | Privacy & Policy</title>
        <meta name="description" />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Privacy & Policy
      </BreadcrumbsItem>
      <LayoutOne>
        <Breadcrumb />
        <div className={`welcome-area pt-100 pb-95`}>
          <div className="container">
            <div className="policy-content text-center">
              <h1>Privacy Policy of MJ Homes</h1>
              <p>
                MJ Homes operates{" "}
                <a href="www.luxurymjhomes.com">www.luxurymjhomes.com</a> ,
                which provides the e-commerce platform for home furnishing
                products. <br /> This page is used to inform website visitors
                regarding our policies with the collection, and disclosure of
                personal information if anyone decided to use our services
                through{" "}
                <a href="www.luxurymjhomes.com">www.luxurymjhomes.com</a>{" "}
                website. <br /> If you choose to use our services then you agree
                to the collection and use of information in relation with this
                policy. The personal information that we collect are used for
                providing and improving the service. We will not use or share
                your information with anyone except as described in this Privacy
                policy. <br /> The terms used in this privacy policy have the
                same meanings as in our terms and conditions, which is
                accessible at
                <a href="www.luxurymjhomes.com">www.luxurymjhomes.com</a>,
                unless otherwise defined in this privacy policy.
              </p>

              <div className="info-collection mt-50">
                <h2>Information collection and use</h2>
                <p>
                  For a better experience while using our services, we may
                  require you to provide us with certain personally identifiable
                  information, including but not limited to your name, phone
                  number and postal address. The information that we collect
                  will be used to contact or identify you.
                </p>
              </div>
              <div className="log-data mt-50">
                <h2>Log Data</h2>
                <p>
                  We want to inform you, that whenever you visit our service, we
                  collect information that your browser sends to us is called
                  log data. This log data may include information such as your
                  computer’s internet protocol address, browser version, pages
                  of our service that you visit, the time and date of your
                  visit, the time spent on those pages, and other statistics.
                </p>
              </div>
              <div className="service-providers mt-50">
                <h2>Service Providers</h2>
                <p>
                  We may employ third-party companies and individuals due to the
                  following reasons.
                </p>
                <ul>
                  <li>To facilitate our service.</li>
                  <li>To provide the service on our behalf</li>
                  <li>To perform service-related services or</li>
                  <li>To assist us in analysing how our services are used</li>
                </ul>
                <p>
                  We want to inform our service users that these third parties
                  have access to your Personal information. The reason is to
                  perform the tasks assigned to them on our behalf. However,
                  they are obliged not to disclose or use the information for
                  any other purpose.
                </p>
              </div>
              <div className="security mt-50">
                <h2>Security</h2>
                <p>
                  We value your trust in providing us your Personal information,
                  thus we are striving to use commercially acceptable means of
                  protecting it. But remember that no method of transmission
                  over the internet, or method of electronic storage is 100%
                  secure and reliable and we cannot guarantee its absolute
                  security.
                </p>
              </div>
              <div className="link-to-other-sites mt-50">
                <h2>Link to others sites</h2>
                <p>
                  Our service may contain links to other sites. If you click on
                  a third-party link, you will be directed to that site or
                  application. Note that these external sites are not operated
                  by us. Therefore, we strongly advise you to review the privacy
                  policy of these websites. We have no control over, and assume
                  no responsibility for the content, privacy policies, or
                  practices of any third-party sales or services.
                </p>
                <div className="children-privacy mt-50">
                  <h2>Children's Privacy</h2>
                  <p>
                    Our services do not address anyone under the age of 13. We
                    do not knowingly collect personal identifiable information
                    from children under 13. If there is some information then we
                    delete it from our servers. If you are a parent or guardian
                    and you are aware that your child has provided us with
                    personal information please contact us so we will be able to
                    take necessary actions.
                  </p>
                </div>
              </div>
              <div className="changes-to-policy mt-50">
                <h2>Changes to this Privacy policy</h2>
                <p>
                  We may update our privacy policy from time to time. Thus, we
                  advise you to review this page periodically for any changes.
                  We will notify you of any changes by posting the new privacy
                  policy on this page. These changes are effective immediately,
                  after they are posted on this page.
                </p>
              </div>
              <div className="contact-us mt-50">
                <h2>Contact Us</h2>
                <p>
                  If you have any questions or suggestions, do no hesitate to
                  contact us via Email-<a href="#">buildmjhomes@gmail.com</a> or
                  Contact Number- 7027540171 or connect us via Facebook or
                  Instagram or LinkedIn.{" "}
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
