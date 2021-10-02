import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const TermsAndConditions = ({ location }) => {
  const { pathname } = location;
  return (
    <Fragment>
      <MetaTags>
        <title>MJ Homes | Terms & Conditions</title>
        <meta name="description" />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Terms & Conditions
      </BreadcrumbsItem>
      <LayoutOne>
        <Breadcrumb />
        <div className={`welcome-area pt-100 pb-95`}>
          <div className="container">
            <div className="terms-conditions-content text-center">
              <h1>Terms and Conditions</h1>
              <p>
                These terms and conditions constitute a legally binding
                agreement between you, whether personally or on behalf of an
                entity, concerning your access to and use of the
                <a href="www.luxurymjhomes.com">www.luxurymjhomes.com</a>{" "}
                website as well as any other media form, media channel, mobile
                website or mobile application related. Once you subscribe or use
                any of our services, you agree that you have read and understood
                the terms and conditions and ready to bound by the below
                statements.
              </p>

              <div className="mt-50">
                <h2>General</h2>
                <p>
                  The website{" "}
                  <a href="www.luxurymjhomes.com">www.luxurymjhomes.com</a> is
                  an e-commerce platform, owned and operated by{" "}
                  <strong>MJ HOMES</strong>. Use of this website is subject to
                  your acceptance without any modifications to all the terms and
                  conditions made by the company, as its sole discretion and
                  stated on the website. <br /> The company shall not be
                  required to notify you about the modifications made in the
                  terms; the revised terms should be determined by checking the
                  website on regular basis. <br /> The information provided on
                  the Site is not intended for distribution to or use by any
                  person or entity in any jurisdiction or country where such
                  distribution or use would be contrary to law or regulation or
                  which would subject us to any registration requirement within
                  such jurisdiction or country. <br /> Accordingly, those
                  persons who choose to access the Site from other locations do
                  so on their own initiative and are solely responsible for
                  compliance with local laws, if and to the extent local laws
                  are applicable. <br />  All users who are minors in the
                  jurisdiction in which they reside (generally under the age of
                  18) must have the permission of, and be directly supervised
                  by, their parent or guardian to use the Site. If you are a
                  minor, you must have your parent or guardian read and agree to
                  these Terms and Conditions prior to you using the Site.
                </p>
              </div>
              <div className="mt-50">
                <h2>Product Policy</h2>
                <p>
                  The products shown in the image is a reference product and the
                  new manufactured product can look different from the one shown
                  in the image due to various factors like lighting, manual
                  polish, wood’s texture etc. <br /> MJ Homes products are
                  available in a fixed set of finishes. So, contact customer
                  support team once in order to receive the best quality
                  products. There may be slight variation in the designs shown
                  and the actual products.
                </p>
              </div>
              <div className="mt-50">
                <h2>Services</h2>
                <p>
                  <a href="www.luxurymjhomes.com">www.luxurymjhomes.com</a>{" "}
                  provides an internet-based platform to sell their products via
                  this website. Such services enable users to purchase home
                  furnishing products upon placing an order. Once an order
                  placed, the company will ship the product, and the user will
                  be entitled to pay for it.
                </p>
              </div>
              <div className="mt-50 bullets-points">
                <h2>User Account, Password and Security</h2>
                <p>
                  The website registration process enables a user to access the
                  services. Certain user information is required to create an
                  account at the website. It is the sole responsibility of the
                  user to maintain the confidentiality of the user id and
                  password received upon completion of the registration. The
                  company shall not be responsible for any loss or damage
                  emerged if you fail to obey the terms. <br /> User is
                  responsible for the validity of account information provided
                  during the website registration process. We reserve the right
                  to remove, reclaim, or change a username you select if we
                  determine, in our sole discretion, that such username is
                  inappropriate, obscene, or otherwise objectionable.
                </p>
                <p>By using the Site, you represent and warrant that: </p>
                <ul>
                  <li>
                    all registration information you submit will be true,
                    accurate, current, and complete.
                  </li>
                  <li>
                    you will maintain the accuracy of such information and
                    promptly update such registration information as necessary.{" "}
                  </li>
                  <li>
                    you have the legal capacity and you agree to comply with
                    these Terms and Condition.{" "}
                  </li>
                  <li>you are not under the age of 13 </li>
                  <li>
                    not a minor in the jurisdiction in which you reside or if a
                    minor, you have received parental permission to use the
                    Site.
                  </li>
                  <li>
                    you will not access the Site through automated or non-human
                    means, whether through a bot, script, etc.
                  </li>
                  <li>
                    you will not use the Site for any illegal or unauthorized
                    purpose.
                  </li>
                  <li>
                    your use of the Site will not violate any applicable law or
                    regulation.
                  </li>
                </ul>
                <p>
                  If you provide any information that is untrue, inaccurate, not
                  current, or incomplete, we have the right to suspend or
                  terminate your account and refuse any and all current or
                  future use of the Site (or any portion thereof).
                </p>
              </div>
              <div className="mt-50">
                <h2>Product and Pricing Information</h2>
                <p>
                  The pricing information related to the home furnishing
                  products shall be displayed on the website and as disclosed to
                  you at the time of your purchase. We do not guarantee that the
                  price will be lowest for any products within any given
                  locality, city, region or geography. Prices and availability
                  are subject to change without notice or any consequential
                  liability to you. While Mj Homes strives to provide accurate
                  information relating to Products and Services including
                  pricing information or availability, but typographical and
                  other errors may occur. In the event that a Product or Service
                  is listed at an incorrect price or with incorrect information
                  due to an error, Mj Homes will have the right to modify the
                  price of the Product or Services and contact You for further
                  instructions via e-mail address provided by You at the time of
                  registration, or cancel the order and notify You of such
                  cancellation. If Mj Homes cancels the order after the payment
                  has been processed, the said amount will be remitted to Your
                  account from which the payment was made. <br /> Mj Homes
                  reserves the right to change the discounts offered at any time
                  during the sale and without prior notice. Discount values on
                  various coupons and offers have been rounded off to avoid
                  conflicts due to decimal values in internal calculations. For
                  example: A value of ₹99.95 will be rounded off to be ₹100.
                </p>
              </div>
              <div className="mt-50 bullets-points">
                <h2>Prohibited Activities</h2>
                <p>
                  You may not access or use the Site for any purpose other than
                  that for which we make the Site available. The Site may not be
                  used in connection with any commercial endeavours except those
                  that are specifically endorsed or approved by us.{" "}
                </p>
                <p>As a user of the Site, you agree not to:</p>
                <ul>
                  <li>
                    systematically retrieve data or other content from the Site
                    to create or compile, directly or indirectly, a collection,
                    compilation, database, or directory without written
                    permission from us.
                  </li>
                  <li>
                    make any unauthorized use of the Site, including collecting
                    usernames and/or email addresses of users by electronic or
                    other means for the purpose of sending unsolicited email, or
                    creating user accounts by automated means or under false
                    pretences.
                  </li>
                  <li>
                    use a buying agent or purchasing agent to make purchases on
                    the Site.
                  </li>
                  <li>
                    use the Site to advertise or offer to sell goods and
                    services.
                  </li>
                  <li>
                    circumvent, disable, or otherwise interfere with
                    security-related features of the Site, including features
                    that prevent or restrict the use or copying of any Content
                    or enforce limitations on the use of the Site and/or the
                    Content contained therein.
                  </li>
                  <li>
                    engage in unauthorized framing of or linking to the Site.
                  </li>
                  <li>
                    trick, defraud, or mislead us and other users, especially in
                    any attempt to learn sensitive account information such as
                    user passwords;
                  </li>
                  <li>
                    make improper use of our support services or submit false
                    reports of abuse or misconduct.
                  </li>
                  <li>
                    engage in any automated use of the system, such as using
                    scripts to send comments or messages, or using any data
                    mining, robots, or similar data gathering and extraction
                    tools.
                  </li>
                  <li>
                    interfere with, disrupt, or create an undue burden on the
                    Site or the networks or services connected to the Site.
                  </li>
                  <li>
                    attempt to impersonate another user or person or use the
                    username of another user.
                  </li>
                  <li>sell or otherwise transfer your profile.</li>
                  <li>
                    use any information obtained from the Site in order to
                    harass, abuse, or harm another person.
                  </li>
                  <li>
                    use the Site as part of any effort to compete with us or
                    otherwise use the Site and/or the Content for any
                    revenue-generating endeavour or commercial enterprise.
                  </li>
                  <li>
                    decipher, decompile, disassemble, or reverse engineer any of
                    the software comprising or in any way making up a part of
                    the Site.
                  </li>
                  <li>
                    attempt to bypass any measures of the Site designed to
                    prevent or restrict access to the Site, or any portion of
                    the Site.
                  </li>
                  <li>
                    harass, annoy, intimidate, or threaten any of our employees
                    or agents engaged in providing any portion of the Site to
                    you.
                  </li>
                  <li>
                    delete the copyright or other proprietary rights notice from
                    any Content.
                  </li>
                  <li>
                    copy or adapt the Site’s software, including but not limited
                    to Flash, PHP, HTML, JavaScript, or other code.
                  </li>
                  <li>
                    upload or transmit (or attempt to upload or to transmit)
                    viruses, Trojan horses, or other material, including
                    excessive use of capital letters and spamming (continuous
                    posting of repetitive text), that interferes with any
                    party’s uninterrupted use and enjoyment of the Site or
                    modifies, impairs, disrupts, alters, or interferes with the
                    use, features, functions, operation, or maintenance of the
                    Site.
                  </li>
                  <li>
                    upload or transmit (or attempt to upload or to transmit) any
                    material that acts as a passive or active information
                    collection or transmission mechanism, including without
                    limitation, clear graphics interchange formats (“gifs”), 1×1
                    pixel, web bugs, cookies, or other similar devices
                    (sometimes referred to as “spyware” or “passive collection
                    mechanisms” or “pcms”).
                  </li>
                  <li>
                    except as may be the result of standard search engine or
                    Internet browser usage, use, launch, develop, or distribute
                    any automated system, including without limitation, any
                    spider, robot, cheat utility, scraper, or offline reader
                    that accesses the Site, or using or launching any
                    unauthorized script or other software.
                  </li>
                  <li>
                    disparage, tarnish, or otherwise harm, in our opinion, us
                    and/or the Site.
                  </li>
                  <li>
                    use the Site in a manner inconsistent with any applicable
                    laws or regulations.
                  </li>
                </ul>
              </div>

              <div className="bullets-points mt-50">
                <h2>User Obligations</h2>
                <ul>
                  <li>
                    Your access to the website is a non-exclusive limited
                    privilege, which is subject to compliance with the Terms of
                    Use.
                  </li>
                  <li>
                    The Services, Website and the materials offered to a user
                    can only be used for purposes that are permitted by: (a) the
                    Terms; and (b) any applicable law, regulation or relevant
                    jurisdictions. 
                  </li>
                  <li>
                    You agree to adhere to the limitations on circulation, use
                    and reproduction of any material accessed from us in
                    accordance to the Terms mentioned in the 'Use of Material'
                    section.
                  </li>
                  <li>
                    You agree not to access the website, the material or the
                    services through any other interface, which is not provided
                    by the Company. Use of deep-link, robot, spider or other
                    automatic device, program, algorithm or methodology, or any
                    other similar process to access or attempt or access the
                    website or content (or any portion thereof) shall be
                    strictly prohibited.
                  </li>
                  <li>
                    The Company disclaims all the liabilities arising in
                    relation to offensive, indecent or otherwise objectionable
                    content that is exposed to a user while accessing the
                    website.
                  </li>
                  <li>
                    The content posted or uploaded on the website should not be
                    offensive and should be in accordance to the applicable
                    laws. Users are legally liable for the content they post.
                    Hence you accept not to:
                    <ul>
                      <li>
                        Discredit, harass, abuse or violate the legal rights
                      </li>
                      <li>
                        Impersonate any person or entity, or misrepresent your
                        affiliation with a person
                      </li>
                      <li>
                        Publish, post or distribute any inappropriate,
                        defamatory, obscene, indecent or unlawful material or
                        information
                      </li>
                      <li>
                        Upload the files, software or other material protected
                        by intellectual property laws that are not owned by you
                      </li>
                      <li>
                        Upload files containing virus or similar program that
                        may damage the website
                      </li>
                      <li>
                        Undertake any activity that disrupts the website, the
                        servers or networks connected to the website
                      </li>
                      <li>
                        Seek unauthorized access to the system or network or to
                        any server of the website, or any attempt to gain access
                        via illegitimate means such as hacking
                      </li>
                      <li>
                        Scan the vulnerability or breach the authentication
                        measure of the website or networks connected to the
                        website
                      </li>
                      <li>
                        Harm the website, resources, accounts, servers, networks
                        connected to the websites, or any links affiliated to it
                      </li>
                      <li>Collect or share data about other users</li>
                      <li>
                        Use of any device to interfere the working of the
                        website
                      </li>
                      <li>
                        Use of the website content or material that is unlawful.
                        Or to practice any illegal activity that violates the
                        rights of the Company
                      </li>
                      <li>
                        Conduct surveys, pyramid schemes, contests or chain
                        letters
                      </li>
                      <li>
                        Download files of another, users posted on the website
                        that is illegal to be distributed in such manner;
                      </li>
                      <li>
                        Delete any author attributions, legal notices,
                        proprietary designations, labels of the origin of the
                        software contained in the uploaded file
                      </li>
                      <li>
                        Infringe code of conduct applicable for to or any
                        particular service
                      </li>
                      <li>
                        Breach applicable laws or regulations in force within or
                        outside India and
                      </li>
                      <li>
                        Reverse engineer, copy, dispense, exhibit, reproduce,
                        publish, license, transfer or sell any information
                        acquired from the Website.
                      </li>
                    </ul>
                  </li>

                  <li>
                    You agree that you are solely responsible for any loss or
                    damage or any breach of your obligations under the terms.
                  </li>
                  <li>
                    Acknowledge that Mj Homes is facilitating the products from
                    various vendors. Hence the Company shall not be supposed to
                    be the seller of such services. The Company shall not be
                    responsible for any certifications, warranty or guarantee
                    offered by the vendor.
                  </li>
                </ul>
              </div>

              <div className="mt-50 bullets-points">
                <h2>Use of Material</h2>
                <p>
                  The company grants you a non-exclusive, revocable,
                  non-transferable right to access the product catalogue or any
                  other material available on the website. In accordance with
                  the terms, you may:
                </p>
                <ul>
                  <li>
                    Access the material for personal, internal an informational
                    purpose.
                  </li>
                  <li>Not alter the material available on the website.</li>
                  <li>
                    Not remove any copyright or proprietary notices available on
                    the website.
                  </li>
                </ul>
              </div>
              <div className="mt-50">
                <h2>Intellectual property rights</h2>
                <p>
                  Unless otherwise indicated, the Site is our proprietary
                  property and all source code, databases, functionality,
                  software, website designs, audio, video, text, photographs,
                  and graphics on the Site (collectively, the “Content”) and the
                  trademarks, service marks, and logos contained therein (the
                  “Marks”) are owned or controlled by us or licensed to us, and
                  are protected by copyright and trademark laws and various
                  other intellectual property rights and unfair competition laws
                  of the United States, foreign jurisdictions, and international
                  conventions.
                  <br /> The Content and the Marks are provided on the Site “AS
                  IS” for your information and personal use only. Except as
                  expressly provided in these Terms and Conditions, no part of
                  the Site and no Content or Marks may be copied, reproduced,
                  aggregated, republished, uploaded, posted, publicly displayed,
                  encoded, translated, transmitted, distributed, sold, licensed,
                  or otherwise exploited for any commercial purpose whatsoever,
                  without our express prior written permission. <br /> Provided
                  that you are eligible to use the Site, you are granted a
                  limited license to access and use the Site and to download or
                  print a copy of any portion of the Content to which you have
                  properly gained access solely for your personal,
                  non-commercial use. We reserve all rights not expressly
                  granted to you in and to the Site, the Content and the Marks.
                </p>
              </div>
              <div className="mt-50 bullets-points">
                <h2>Disclaimer of Warranties and Liability</h2>
                <p>
                  We make sure that all the information posted on the website is
                  correct, however the Company never warrants the accuracy,
                  quality and completeness of data, product, and services.{" "}
                  <br />
                  The Company shall not be liable for any direct, indirect,
                  incidental or consequential damages caused by:
                </p>
                <ul>
                  <li>The use or inability of use of services;</li>
                  <li>Unauthorized access to the user's data; and</li>
                  <li>Any matter is related to the services.</li>
                </ul>
                <p>
                  The Company shall not be liable for delay or inability to use
                  of the website or services, or any information, software and
                  graphics acquired through the website. Further, we are not
                  responsible for non- availability of the website during
                  periodic maintenance or accidental suspension caused due to
                  technical reasons. <br /> You acknowledge that data obtained
                  from the website is done entirely through your wisdom. Thus,
                  you agree that you will be responsible for any damage and loss
                  caused to your computer with such data.
                </p>
              </div>
              <div className="mt-50">
                <h2>Violation of the Terms of Use</h2>
                <p>
                  The Company, in its sole and absolute discretion, may
                  terminate the access to the website of any user in case of
                  violation of the terms or additional terms. You consent to the
                  injunctive or equitable remedy taken by us after the
                  contravention of the terms of use that causes irreparable loss
                  to the Company. <br /> You agree to indemnify and hold
                  harmless Mj Homes, its affiliate, directors, employees from
                  and against any and all losses, liabilities, damages, claims
                  and expenses incurred by the Company that emerged of
                  infringement, non-performance of any warranty or obligation
                  performed by you. <br /> Further, you agree to hold the
                  Company harmless against any claims made by any third party
                  due to your use of the website that caused damaged to a third
                  party. The Company will also be entitled to redeem from you
                  and you agree to pay any cost and fees of such action.
                </p>
              </div>
              <div className="mt-50 bullets-points">
                <h2>Termination</h2>
                <ul>
                  <li>
                    The term will continue to apply until terminated by you or
                    Mj Homes. Further, you may terminate the agreement by:
                    <ul>
                      <li>Not accessing the website</li>
                      <li>Closing your account on our website</li>
                    </ul>
                  </li>
                  <li>
                    Mj Homes at its sole and absolute discretion may terminate
                    the terms of use with or without cause at any time if:
                  </li>
                  <li>
                    Terms, conditions or any policy of the Company, applicable
                    to you is violated.
                  </li>
                  <li>
                    The provision of the services to you becomes unlawful.
                  </li>
                  <li>
                    The provision of the services to you is no longer
                    commercially viable.
                  </li>
                  <li>
                    The Company chooses to discontinue the access to the
                    website, in general or specifically, for you.
                  </li>
                  <li>
                    Termination or suspension due to technical reasons may
                    include, removal of access to the website, deletion of user
                    material (including files and material of user with account
                    information), exclude you from accessing our website.
                  </li>
                  <li>
                    The Company shall not be liable to any third party for such
                    termination.
                  </li>
                  <li>
                    You acknowledge that termination shall not affect your
                    liabilities and obligation.
                  </li>
                </ul>
              </div>
              <div className="mt-50 bullets-points">
                <h2>Governing Law</h2>
                <ul>
                  <li>
                    Terms, transactions and any mutual claims between you and
                    the Company shall be governed in accordance with the laws of
                    India.
                  </li>
                  <li>
                    All claims and disputes arising in connection with the
                    website shall be subject to the exclusive jurisdiction of
                    the Jaipur, Rajasthan.
                  </li>
                </ul>
              </div>
              <div className="mt-50 bullets-points">
                <h2>Report Abuse</h2>
                <p>
                  If Mj Homes permits you to post any material from the website,
                  you hereby undertake to ensure that it should not be:
                </p>
                <ul>
                  <li>Offensive, Abusive and threating.</li>
                  <li>Defame the applicable laws and rights.</li>
                </ul>
                <p>
                  As per terms, users can be held legally liable for every
                  content or material posted on the website, and legally
                  accountable if the content or material is defamatory or
                  protected by copyright and trademark. In case you come across
                  any abuse or violation of the terms, please report to our 
                  <a href="#">Customer Support</a>.
                </p>
              </div>
              <div className="mt-50">
                <h2>Privacy Policy</h2>
                <p>
                  You accept that you have read and fully understand the privacy
                  policy of the website, further you agree that the terms and
                  conditions of the policy are acceptable to you.
                </p>
              </div>
              <div className="mt-50">
                <h2>Newsletters and Communication</h2>
                <p>
                  You agree to receive communication and newsletters via SMS and
                  emails from Mj Homes. To unsubscribe kindly follow the
                  procedure set forth in the Website.
                </p>
              </div>
              <div className="mt-50 bullets-points">
                <h2>General Provisions</h2>
                <ul>
                  <li>
                    Notice: All notices from the Company will be served either
                    by general notification on the website or via an email to
                    the designated account.
                  </li>
                  <li>
                    Assignment: Rights of the Company, under the terms of use,
                    are freely transferable to any third party without the
                    requirement to ask for your consent.
                  </li>
                  <li>
                    Severability: Provision of the terms, or any portion because
                    of that, found unenforceable by a competent jurisdiction,
                    shall not affect other portion of the terms.
                  </li>
                  <li>
                    Waiver: Failure to enforce or exercise any provision of the
                    terms by the Company, shall not constitute a waiver of such
                    provision.
                  </li>
                  <li>
                    Feedback and Information: The Company is free to use the
                    feedback provided by you to the website. You warrant that:
                    <ul>
                      <li>
                        Your feedback does not contain any confidential
                        information of you.
                      </li>
                      <li>
                        Mj Homes is not committed under any liabilities of
                        confidentiality.
                      </li>
                      <li>
                        Under any circumstances, you are not entitled to any
                        compensation for the feedback.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Fidelity not guaranteed: Mj Homes hereby disclaims the
                    guarantee of exactness of the appearance or finish of the
                    final product. In case you receive any damaged product, a
                    photographic evidence must be forwarded at ⦁ Customer
                    Support within 24 hours of receiving the product. The
                    evidence will be reviewed by our representatives, and a
                    valid damage will be confirmed for a replacement via an
                    email. In case of damaged replacement, the order will be
                    cancelled and we will refund the whole amount. Further, you
                    agree that Mj Homes have the final rights to decide whether
                    a product is significantly damaged or not.
                  </li>
                </ul>
                <p>
                  In case of orders pertaining to a standard design as listed on
                  Mj Homes’ website, with no customization requested, the
                  product(s) listed in the order will enter production
                  irrespective of whether an ODF was sent to the customer or
                  not. Approval for a product will only be asked in case of
                  non-standard customization as requested by the customer.
                </p>
              </div>
              <div className="mt-50">
                <h2>How do I track my order?</h2>
                <p>
                  The ideal way to track your order is to sign-up at
                  Luxurymjhomes.com and then visit the order tracking page. Or,
                  as a guest, you can visit the Track Order page at 
                  <a href="https://www.luxurymjhomes.com/track-order-by-email">
                    https://www.luxurymjhomes.com/track-order-by-email
                  </a>
                   and enter your Order ID and your Email address or phone
                  number linked with the order. Here, you can check the details
                  pertaining to your order, such as Order confirmation,
                  Manufacturing progress, Quality check and dispatch details. We
                  always try our best to deliver the product within the
                  specified or communicated time limit. We also proactively get
                  in touch with the customer, either through electronic means or
                  through calls, to notify them about the status of their
                  product and where it is in transit. If, in a rare case, you
                  haven’t received communication of any form from us after 10
                  days of placing an order, feel free to give us a call at our
                  customer care number or drop an email at 
                  <a href="#">Customer Support</a>.
                </p>
              </div>
              <div className="mt-50">
                <h2>What is the estimated time for a delivery?</h2>
                <p>
                  Team Mj Homes is dedicated to dispatching your products within
                  3 to 5 weeks of the timeline; however, in case of exceptional
                  situations like transport strike, riots, natural calamities
                  (like rains, flood, earthquakes, etc.), it might happen that
                  the Est delivery time may exceed than the promised timeline.
                  In such situations; you will be given updates about your
                  products, and Mj Homes will be responsible to keep your
                  products on priority and deliver at earliest as possible. We
                  humbly request your cooperation in above exceptional
                  situations, as your support is essential to ensure that we
                  continue to keep serving you with high quality furniture.{" "}
                  <br /> As the custom products are manufactured from scratch on
                  order, so sometimes it can get extended. <br /> This delivery
                  time is not applicable for some specific pin codes.
                </p>
              </div>
              <div className="mt-50">
                <h2>
                  Are there any delivery or installation charges, or any hidden
                  fees?
                </h2>
                <p>
                  No, but the free delivery is only applicable for the very
                  first attempt on a visit to your ship-to address. In case of a
                  missed delivery, (from a customer) an extra visiting charge
                  would be applicable for later installation. <br /> Product
                  installation will depend upon the delivery condition of the
                  product, which can reference in the page of individual
                  products before buying. No exception will be made to this
                  rule.
                </p>
              </div>
              <div className="mt-50 bullets-points">
                <h2>
                  What should I check when the product is delivered to me?
                </h2>
                <p>
                  When the product has been delivered to your doorstep, please
                  ensure the following:
                </p>
                <ul>
                  <li>
                    Please check all the external surfaces of your product for
                    any forms of breakages, cracks, chip-offs, unfinished
                    patches or insect infestations.
                  </li>
                  <li>
                    In case there is some dust deposit, or the product lacks
                    shine, our delivery team will be able to fix this
                    on-the-spot by applying a coat of wood polish or by rubbing
                    the surface in question with a cloth. Please know that this
                    is an accepted industry-standard way of cleaning the surface
                    or polishing it.
                  </li>
                  <li>
                    If there is a scratch or a crack on the product, raise this
                    issue with the delivery personnel as well as our customer
                    support team. Our carpenter will resolve the issue on the
                    spot, or we will arrange a visit to rectify the issue. If
                    the carpenter fails to resolve the issue, we shall
                    remanufacture the product/part of the product.
                  </li>
                  <li>
                    For all products that inform any form of assembly, please
                    ensure that the delivery team assembles the product, so that
                    you have the peace of mind that everything fits well and is
                    accounted for.
                  </li>
                  <li>
                    For all products that require wall mounting/installation,
                    kindly decide, prior to the delivery of the product, on the
                    exact location in your house where you would want the
                    product to be placed. Instruct the delivery team of the
                    same. Please make sure that you have all the necessary
                    approvals for drilling, etc., that may be required for
                    mounting the products on your walls.
                  </li>
                  <li>
                    For all products that are kept on the floor, such as tables
                    and chairs, ensure that the product stands stable and
                    straight. If there happens to be an uneven leg (having less
                    than 5mm of difference), our team will install bushes at the
                    foot of the leg so that the product remains balanced. If the
                    difference of the uneven leg is more than 5mm, we will take
                    the item back and provide a replacement or a repair, based
                    on the extent of the change required.
                  </li>
                  <li>
                    For all forms of seating products, such as sofas, kindly sit
                    on the product to ensure that the whole structure is stable
                    with your weight on it. Also check the fabrics for any
                    deformities or defects.
                  </li>
                  <li>
                    We make sure that the insides of storage products, such as
                    drawers, are well-finished so as to not have any splinters
                    or loose pieces that might hurt your arms. However, the
                    extent of polish in these internal areas may not match with
                    the extent of polish on the external areas.
                  </li>
                  <li>
                    Wood, especially hardwoods, have natural physical aspects,
                    such as differing grain patterns and minimal stain
                    differences. No knots will be present in your product, as
                    these result in structural weakness, and are rejected at the
                    quality control stage. Differing grain patterns and stain
                    differences are generally acceptable on hardwood products.
                  </li>
                  <li>
                    During the summer months, hardwood products may expand
                    slightly, which might result in some drawers to get stuck.
                    This is completely normal, and you need not worry about it.
                    Minimize the exposure of the product to heat, and when
                    Summer passes, it will return back to the previous form.
                  </li>
                </ul>
                <p>
                  Once the product has been delivered to you, and after your
                  inspections, our delivery team has left your premises, Mj
                  Homes won’t be liable to any damage that occurs due to
                  mishandling or rough usage. Any self-mishandled or damage
                  issues reported after successful delivery and installation of
                  the product, will not be considered as company’s
                  responsibility. On such circumstances the customer is 100%
                  accountable for these self-damages caused to the product and
                  shall not receive any replacement or refund from the company.
                  As well any damage on inspection if found due to rigid use or
                  mis-handling will overpass the criteria of refund/replacement
                  or compensations.
                </p>
              </div>
              <div className="mt-50">
                <h2>Will the product be exactly as shown on the Website?</h2>
                <p>
                  Mj Homes tries its best to deliver Products and Services
                  exactly the way they are described on the Website. However,
                  the nature and tendency of natural material-based products is
                  that each piece of furniture is unique in its own way. Mj
                  Homes hereby disclaims any guarantees of exactness of the
                  finish or appearance of the final Products or Services ordered
                  by the User over and above generally acceptable standards on
                  the same. The quality of the Products, Services, information,
                  or other material purchased or obtained by you through the
                  Website may not meet your expectations.
                </p>
              </div>
              <div className="mt-50 bullets-points">
                <h2>
                  What if I receive a damaged product or there is a
                  manufacturing defect?
                </h2>
                <ul>
                  <li>
                    We practice highly specialized and strict quality control
                    measures to ensure that the product is up to our standards
                    even at the time of delivery. In case you do happen to
                    receive a product that has been damaged during
                    transportation, or there is some manufacturing defect, such
                    as, balancing, levelling, finish, paint, fabric, etc.,
                    please raise this issue to the delivery personnel at the
                    time of delivery and also contact{" "}
                    <a href="#">Customer Support</a> with providing photographic
                    evidence of the said issue. Our team will assess the issue
                    and get back to you within 1-2 business days. Depending on
                    the degree of the damage in question, we shall provide you
                    the solution. For issues concerning manufacturing defects, a
                    solution will be provided.
                  </li>
                  <li>
                    Mj Homes shall have the sole right to determine whether the
                    product is defective or not. (also mention specification)
                  </li>
                </ul>
              </div>
              <div className="mt-50 bullets-points">
                <h2>When will I get a refund, if eligible?</h2>
                <p>
                  If you are eligible for any refund, the same shall be given to
                  you as per the following guidelines:
                </p>
                <ul>
                  <li>
                    All refunds process initiation shall be subject to pick up
                    of all cancelled items from Your/customer's premises.
                  </li>
                  <li>
                    Post receiving the products back to the warehouse, a refund
                    shall be initiated within 2-3 business days.
                  </li>
                  <li>
                    Refund will be initiated via NEFT, cash or by the way
                    payment was originally made.
                  </li>
                  <li>
                    Depending on the orders, the processing charges might be
                    deducted.
                  </li>
                </ul>
              </div>
              <div className="mt-50">
                <h2>Newsletter and Communications</h2>
                <p>
                  You hereby expressly agree to receive communications and
                  newsletters from Mj Homes by SMS and e-mails. You can
                  unsubscribe / opt-out from receiving communications and
                  newsletters from Mj Homes at any time by following the
                  procedure set forth in the newsletters.
                </p>
              </div>
              <div className="mt-50">
                <h2>ADVERTISERS</h2>
                <p>
                  We allow advertisers to display their advertisements and other
                  information in certain areas of the Site, such as sidebar
                  advertisements or banner advertisements. If you are an
                  advertiser, you shall take full responsibility for any
                  advertisements you place on the Site and any services provided
                  on the Site or products sold through those advertisements.{" "}
                  <br />
                  Further, as an advertiser, you warrant and represent that you
                  possess all rights and authority to place advertisements on
                  the Site, including, but not limited to, intellectual property
                  rights, publicity rights, and contractual rights. <br /> [As
                  an advertiser, you agree that such advertisements are subject
                  to our Digital Millennium Copyright Act (“DMCA”) Notice and
                  Policy provisions as described below, and you understand and
                  agree there will be no refund or other compensation for DMCA
                  takedown-related issues.] We simply provide the space to place
                  such advertisements, and we have no other relationship with
                  advertisers.
                </p>
              </div>
              <div className="mt-50 bullets-points">
                <h2>SITE MANAGEMENT</h2>
                <p>We reserve the right, but not the obligation, to: </p>
                <ul>
                  <li>
                    monitor the Site for violations of these Terms and
                    Conditions.
                  </li>
                  <li>
                    take appropriate legal action against anyone who, in our
                    sole discretion, violates the law or these Terms and
                    Conditions, including without limitation, reporting such
                    user to law enforcement authorities.
                  </li>
                  <li>
                    in our sole discretion and without limitation, refuse,
                    restrict access to, limit the availability of, or disable
                    (to the extent technologically feasible) any of your
                    Contributions or any portion thereof.{" "}
                  </li>
                  <li>
                    in our sole discretion and without limitation, notice, or
                    liability, to remove from the Site or otherwise disable all
                    files and content that are excessive in size or are in any
                    way burdensome to our systems.
                  </li>
                  <li>
                    otherwise manage the Site in a manner designed to protect
                    our rights and property and to facilitate the proper
                    functioning of the Site.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default TermsAndConditions;
