import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import LayoutSeven from "../../layouts/LayoutSeven";
// import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import HeroSliderTwentyNine from "../../wrappers/hero-slider/HeroSliderTwentyNine";
// import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import FeatureIconSeven from "../../wrappers/feature-icon/FeatureIconSeven";
import TabProduct from "../../wrappers/product/TabProduct";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";

import BannerFifteen from "../../wrappers/banner/BannerFifteen";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import ImageSliderTwo from "../../wrappers/image-slider/ImageSliderTwo";
import VideoPopupTwo from "../../components/video-popup/VideoPopupTwo";

import CategoryThreeSlider from "../../wrappers/category/CategoryThreeSlider";

const Home = () => {
	return (
		<Fragment>
			<MetaTags>
				<title>MJ Homes</title>
				<meta
					name="description"
					content="MJ Homes is a furniture company based in Bahadurgarh, Haryana. We provide top class furniture on your doorstep. You can also order custom furniture by visiting our showroom facility."
				/>
			</MetaTags>
			<LayoutOne
				headerContainerClass="container-fluid"
				headerPaddingClass="header-padding-1"
				headerPositionClass="header-absolute"
			>
				{/* <LayoutSeven> */}
				{/* hero slider */}
				<HeroSliderTwentyNine />
				<BannerFifteen spaceTopClass="pt-10" spaceBottomClass="pb-85" />

				{/* countdown */}

				<CountDownThree
					spaceTopClass="pt-100"
					spaceBottomClass="pb-100"
					dateTime="November 13, 2021 12:12:00"
					countDownImage="/assets/img/banner/deal-5.png"
				/>
				{/* <LayoutOne
				headerContainerClass="container-fluid"
				headerPaddingClass="header-padding-1"
				headerPositionClass="header-absolute"
			> */}
				{/* <LayoutSeven> */}
				{/* hero slider */}
				<HeroSliderTwentyNine />
				<BannerFifteen spaceTopClass="pt-10" spaceBottomClass="pb-85" />

				{/* featured icon */}
				{/* <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" /> */}
				<FeatureIconSeven spaceBottomClass="pb-70" />

				{/* category grid */}
				<CategoryThreeSlider spaceBottomClass="pb-70" />

				{/* tab product */}
				<TabProduct spaceBottomClass="pb-60" category="fashion" />

				<VideoPopupTwo spaceBottomClass="pb-60" />

				{/* blog featured */}
				<BlogFeatured spaceBottomClass="pb-55" />

				{/* image slider */}
				<ImageSliderTwo />
				{/* </LayoutSeven> */}
			</LayoutOne>
		</Fragment>
	);
};

export default Home;
