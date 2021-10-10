import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import FrequentlyBoughtTogether from "../../wrappers/product/FrequentlyBoughtTogether";
import OtherPeopleBought from "../../wrappers/product/OtherPeopleBought";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescriptionSticky from "../../wrappers/product/ProductImageDescriptionSticky";
// import { useGLTF } from "@react-three/drei";
// import { useHistory } from "react-router-dom";

const ProductSticky = ({ location, product }) => {
  // let history = useHistory();
  // console.log(history);
  // const { nodes } = useGLTF("http://localhost:3000/shoe-draco.glb");
  // console.log(nodes);
  const { pathname } = location;
  return (
    <Fragment>
      <MetaTags>
        <title>MJ Homes | Product Page</title>
        <meta
          name="description"
          content="Product page of flone react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Shop Product
      </BreadcrumbsItem>

      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* product description with image */}
        <ProductImageDescriptionSticky
          spaceTopClass="mt-100"
          spaceBottomClass="mb-100"
          product={product}
        />
        {/*  */}
        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productID={product.id}
          productFullDesc={product.description}
          productSize={product.variation[0].size}
          productWeight={product.variation[0].weight}
          productMaterial={product.variation[0].material}
          productManufacturer={product.manufacturer}
          productReview={product.review}
        />

        {/* frequently bought together product slider */}
        <FrequentlyBoughtTogether
          spaceBottomClass="pb-95"
          category={product.subcategory ? product.subcategory[0] : ""}
        />
        {/* {console.log(product.category[0])} */}
        {/* related product slider */}
        <RelatedProductSlider
          spaceBottomClass="pb-95"
          tag={product.tag ? product.tag[0] : ""}
        />

        {/* other people bought product slider */}
        <OtherPeopleBought
          spaceBottomClass="pb-95"
          category={product.subcategory[0]}
        />
      </LayoutOne>
    </Fragment>
  );
};

ProductSticky.propTypes = {
  location: PropTypes.object,
  product: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.id;
  // console.log(state);
  return {
    product: state.productData.products.filter(
      (single) => single.id == itemId
    )[0],
  };
};

export default connect(mapStateToProps)(ProductSticky);
