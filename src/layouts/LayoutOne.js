import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderOne from "../wrappers/header/HeaderOne";
import FooterOne from "../wrappers/footer/FooterOne";

const LayoutOne = ({
	children,
	headerContainerClass,
	headerTop,
	headerPaddingClass,
	headerPositionClass,
}) => {
	return (
		<Fragment>
			<HeaderOne
				layout={headerContainerClass}
				top={headerTop}
				headerPaddingClass={headerPaddingClass}
				headerPositionClass={headerPositionClass}
			/>
			{children}
			<FooterOne
				backgroundColorClass="bg-black"
				spaceTopClass="pt-40"
				spaceBottomClass="pb-0"
			/>
		</Fragment>
	);
};

LayoutOne.propTypes = {
	children: PropTypes.any,
	headerContainerClass: PropTypes.string,
	headerPaddingClass: PropTypes.string,
	headerPositionClass: PropTypes.string,
	headerTop: PropTypes.string,
};

export default LayoutOne;
