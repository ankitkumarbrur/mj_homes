import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import HeaderSocial from "./sub-components/HeaderSocial";
import NavMenu from "./NavMenu";
import MobileMenu from "../../components/header/MobileMenu";

const OffcanvasMenu = ({ activeState, getActiveState }) => {
	return (
		<div className={`clickable-mainmenu ${activeState ? "inside" : ""}`}>
			<div className="clickable-mainmenu-icon">
				<button
					className="clickable-mainmenu-close"
					onClick={() => getActiveState(false)}
				>
					<span className="pe-7s-close"></span>
				</button>
			</div>
			<div className="side-logo">
				<Link to={process.env.PUBLIC_URL + "/"}>
					{/* <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/logo/logo.png"}
          /> */}
					<h2>MJ Homes</h2>
				</Link>
			</div>
			{/* nav menu*/}
			{/* <MobileMenu /> */}
			<NavMenu sidebarMenu={true} />

			{/* header social */}
			<HeaderSocial />
		</div>
	);
};

OffcanvasMenu.propTypes = {
	activeState: PropTypes.bool,
	getActiveState: PropTypes.func,
};

export default OffcanvasMenu;
