import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Accordion from 'react-bootstrap/Accordion'
import Review from "../../components/product/sub-components/review components/Review";

const ProductDescriptionTab = ({
  spaceBottomClass,
  productFullDesc,
  productSize,
  productWeight,
  productMaterial,
  productManufacturer,
  productReview,
  productID,
  shipsin,
  deliveryCondition,
  finish,
  information,
  rating,

}) => {
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="additionalInfo">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Reviews</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="careInstructions">
                  Care & Instructions
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="deliveryInstallations">
                  Delivery & Installation
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="warranty">Warranty</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="returnCancellations">R & C</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="customerRedressal">
                  Customer Redressal
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherInfo-wrapper" style={{ display: "flex", justifyContent: "space-around" }}>
                  {/* <ul>
                    <li>
                      <span>Manufacturer</span>
                      {productManufacturer}
                    </li>
                    <li>
                      <span>Weight</span>
                      &nbsp;
                      &nbsp;
                      {productWeight}
                    </li>
                    <li>
                      <span>Dimensions</span>
                      &nbsp;
                      &nbsp;
                      {productSize}
                    </li>
                    <li>
                      <span>Materials</span>
                      &nbsp;
                      &nbsp;
                      {productMaterial.map((single, i) => [
                        i > 0 && ", ",
                        <i
                          key={i}
                          style={{ fontStyle: "normal", marginRight: "5px" }}
                        >
                          {single}
                        </i>,
                      ])}
                    </li>
                    <li>
                      <span>SKU</span>
                      &nbsp;
                      &nbsp;
                      {productID.toUpperCase()}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>Ships In</span>
                      {shipsin ? shipsin : "7 Days"}
                    </li>

                    <li>
                      <span>Finish</span>
                      &nbsp;
                      {finish ? finish : ""}
                    </li>
                    {information != "" ? (
                      <li>
                        <span>Information</span>

                        &nbsp;
                     
                        <div dangerouslySetInnerHTML={{ __html: information }} style={{ display: "inline-flex" }}></div>
                        { }
                      </li>
                    ) : ""}

                    <li>
                      <span>Ratings & Reviews</span>
                      &nbsp;
                      {rating}
                      <div style={{ display: "inline-block", width: "fit-content" }}>&#11088;</div> &nbsp;{productReview.length}
                      &nbsp;
                      Reviews
                    </li>


                    <li>
                      <span>Delivery Condition</span>
                      {deliveryCondition ? deliveryCondition : "Expert-Assembly"}
                    </li>

                  </ul> */}

                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><span>Manufacturer</span></Accordion.Header>
                      <Accordion.Body>
                        {productManufacturer}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header> <span>Weight</span></Accordion.Header>
                      <Accordion.Body>
                        {productWeight}
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>   <span>Dimensions</span></Accordion.Header>
                      <Accordion.Body>
                        {productSize}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header> <span>Materials</span></Accordion.Header>
                      <Accordion.Body>
                        {/* {productMaterial.map((single, i) => [
                          i > 0 && ", ",
                          <i
                            key={i}
                            style={{ fontStyle: "normal", marginRight: "5px" }}
                          >
                            {single}
                          </i>,
                        ])} */}
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header> <span>SKU</span></Accordion.Header>
                      <Accordion.Body>
                        {/* {productID.toUpperCase()} */}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header> <span>Ships In</span></Accordion.Header>
                      <Accordion.Body>
                        {/* {shipsin ? shipsin : "7 Days"} */}
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                      <Accordion.Header>   <span>Finish</span></Accordion.Header>
                      <Accordion.Body>
                        {/* {finish ? finish : ""} */}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header> <span>Information</span></Accordion.Header>
                      <Accordion.Body>
                        {/* <div dangerouslySetInnerHTML={{ __html: information }} style={{ display: "inline-flex" }}></div> */}
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="8">
                      <Accordion.Header>   <span>Ratings & Reviews</span></Accordion.Header>
                      <Accordion.Body>
                        {/* {rating}
                        <div style={{ display: "inline-block", width: "fit-content" }}>&#11088;</div> &nbsp;{productReview.length}
                        &nbsp;
                        Reviews */}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                      <Accordion.Header><span>Delivery Condition</span></Accordion.Header>
                      <Accordion.Body>
                        {/* {deliveryCondition?deliveryCondition: "Expert-Assembly"} */}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="careInstructions">
                <div className="product-careInstructions-wrapper">
                  <ul>
                    <li>
                      On your dining table or any other table that is prone to
                      daily and heavy use, try to use a tablecloth or other
                      thick quality cloth.
                    </li>
                    <li>
                      Use a hot pad or coasters instead of placing warm or cold
                      goods directly on a furniture surface; please do not place
                      hot items such as a tawa or baking dish on a hot pad.
                    </li>
                    <li>
                      Using a soft-bristled brush attachment, vacuum your fabric
                      furniture at low pressure.
                    </li>
                    <li>
                      Wipe off the wood with a clean microfiber cloth dipped in
                      wood-friendly cleaner. Wipe away any remaining wetness
                      with a dry, gentle, lint-free cloth.
                    </li>
                    <li>
                      In the event of a spill, gently wipe the stain area with a
                      clean, dry towel. Please avoid using coarse materials or
                      vigorously rubbing the affected area.
                    </li>
                    <li>
                      Before placing any hot or cold goods on the wooden
                      surface, use coasters and mats.
                    </li>
                    <li>
                      Make sure the furniture hasn't been exposed to any damp or
                      water.
                    </li>
                    <li>
                      Avoid contacting the furniture with chemicals or alcohol,
                      as this may ruin the natural finish and durability of the
                      product.
                    </li>
                    <li>
                      To take care of the edges and sides of your furniture that
                      you can't reach, get it professionally cleaned every 5 to
                      6 months. The product's life and durability are extended
                      as a result of such professional cleaning.
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="deliveryInstallations">
                <div className="product-deliveryInstallations-wrapper">
                  <p>
                    Your product(s) will be held for 7 days at the nearest
                    delivery hub if you’ve failed to receive the delivery. After
                    this, MJ Homes reserve the right to either change or cancel
                    the order.
                  </p>
                  <ul>
                    <li>
                      Our customer service and delivery teams will contact you
                      to ensure a smooth delivery.
                    </li>
                    <li>
                      The free delivery offer is only valid for the first
                      delivery attempt to your shipping address. If a customer
                      fails to receive this delivery, an additional visiting fee
                      will be charged for the second attempt.
                    </li>
                    <li>
                      Our delivery partner will only deliver to the ground floor
                      of your unit if there is no service lift. In such
                      circumstances, there will be additional charges per floor
                      for delivery to the customer's floor (on request).
                    </li>
                    <li>
                      Weekend or time-specific delivery incurs additional fees.
                    </li>
                  </ul>
                  <p>
                    Installation: Your product may or may not require
                    installation help upon arrival, depending on the delivery
                    condition. <br /> Delivery condition:
                  </p>
                  <ul>
                    <li>
                      Pre-Assembled - there is no need to install it. The
                      product is completely constructed and ready to use when it
                      arrives.
                    </li>
                    <li>
                      Expert Assembly — professional assistance is required, and
                      MJ Homes will supply carpenters to complete correct
                      installation and assembly.
                    </li>
                    <li>
                      Basic assembly/DIY – the product only requires little
                      installation/assembly, which can be completed by the
                      client with the help of simple tools and the assembly
                      instructions provided. There's no need for outside help.
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="warranty">
                <div className="product-warranty-wrapper">
                  <p>
                    This item comes with a two-year warranty that covers
                    manufacturing flaws, termite infestations, and borer
                    concerns. The frame and associated mechanics, if any, are
                    covered for upholstered products. The limited warranty does
                    not apply to the following:
                  </p>
                  <ul>
                    <li>Over time, normal wear and tear of the product.</li>
                    <li>
                      Due to improper cleaning procedures or impacts/accidents,
                      small cuts, scratches, or damages that occur.
                    </li>
                    <li>
                      Damage caused by the customer's faulty
                      installation/assembly.
                    </li>
                    <li>Cracks due to displacement of the product.</li>
                    <li>Fading as a result of direct sunlight exposure.</li>
                    <li>
                      Wood that has been exposed to water for an extended
                      period.
                    </li>
                    <li>
                      Upholstery fabrics such as seat covers have no warranty .
                    </li>
                    <li>
                      Dry-cleaning methods that aren't standard or the usage of
                      harsh chemicals Due to variances in floor and surface
                      levels, unevenness of up to 5 mm is frequently tolerated
                      according to industry standards. The warranty does not
                      cover this.
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="returnCancellations">
                <div className="product-returnCancellations-wrapper">
                  <ul>
                    <li>
                      Time Frame - 7 days. <br /> If you change your mind after
                      placing an order, you may cancel it (or a portion of it)
                      within 07 (seven) days after receiving the order
                      confirmation or before it is dispatched, whichever comes
                      first. Fee While processing the refund, a 2.5 percent
                      cancellation fee will be added to the amount you paid.
                      Prior to the cancellation, any cashback received on the
                      order will be withdrawn from MJ Homes credits. The
                      cashback amount will be deducted from the refund amount of
                      the cancelled product if the same cashback has been used
                      to place another order in full or in part.
                    </li>
                    <li>
                      Time frame - 7 to 10 days. <br /> While processing the
                      refund, a 25 percent cancellation fee will be added to the
                      amount you paid. Prior to the cancellation, any cashback
                      received on the order will be withdrawn from MJ Homes
                      credits. The cashback amount will be deducted from the
                      refund amount of the cancelled product if the same
                      cashback has been used to place another order in full or
                      in part. Time Frame - Post 10 days
                    </li>
                    <li>
                      Time Frame - Post 10 days. <br /> No refund will be
                      initiated, if the cancellation occurs after the product is
                      delivered. Prior to the cancellation, any cashback
                      received on the order will be withdrawn from MJ Homes
                      credits. The cashback amount will be deducted from the
                      refund amount of the cancelled product if the same
                      cashback has been used to place another order in full or
                      in part.
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="customerRedressal">
                <div className="product-customerRedressal-wrapper">
                  <p>
                    At MJ Homes, we are dedicated to providing the best possible
                    customer service. Most of your questions about your purchase
                    can be answered in our Frequently Asked Questions section on
                    our website. If you have any unresolved questions, please
                    contact us at the following address:
                  </p>
                  <ul>
                    <li>
                      The accessories shown in the image are only to give you an
                      idea of how the setup looks. Unless otherwise stated,
                      these are not included in the product.
                    </li>
                    <li>
                      When it comes to solid wood furniture, the wood grain may
                      differ somewhat from one piece to the next.
                    </li>
                    <li>
                      The 3D image and the actual product may differ slightly
                      due to intricate design or hand-painting.
                    </li>
                    <li>
                      There may be a slight change in fabric colour and wood
                      finish between the online photographs and the actual
                      product due to varying screen settings and resolutions.
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
                {productFullDesc}
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                <Review productID={productID} productReview={productReview} />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div >
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  productSize: PropTypes.string,
  productWeight: PropTypes.number,
  productMaterial: PropTypes.array,
  productManufacturer: PropTypes.string,
  productReview: PropTypes.array,
};

const mapStateToProps = (state, props) => {
  return {
    productSize: state.productData.selectedProduct.size ? state.productData.selectedProduct.size : props.productSize,
    productWeight: state.productData.selectedProduct.weight ? state.productData.selectedProduct.weight : props.productWeight,
    productMaterial: state.productData.selectedProduct.material ? state.productData.selectedProduct.material : props.productMaterial,
  };
};
export default connect(mapStateToProps)(ProductDescriptionTab);
