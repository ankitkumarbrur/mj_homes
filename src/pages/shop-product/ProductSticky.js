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

const ProductSticky = ({ location, product }) => {
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

			<BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
				Home
			</BreadcrumbsItem>
			<BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
				Shop Product
			</BreadcrumbsItem>

			<LayoutOne headerTop="visible">
				{/* breadcrumb */}
				<Breadcrumb />

				{/* product description with image */}
				<ProductImageDescriptionSticky
					spaceTopClass="mt-100"
					spaceBottomClass="mb-100"
					product={product}
				/>

				{/* product description tab */}
				<ProductDescriptionTab
					spaceBottomClass="pb-90"
					productFullDesc={product.fullDescription}
				/>

				{/* frequently bought together product slider */}
				<FrequentlyBoughtTogether
					spaceBottomClass="pb-95"
					category={product.category ? product.category[0] : ""}
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
					category={product.category[0]}
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
	return {
		product: state.productData.products.filter(
			(single) => single.id === itemId,
		)[0],
	};
};

export default connect(mapStateToProps)(ProductSticky);
