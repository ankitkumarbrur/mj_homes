import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
	return (
		<nav className="offcanvas-navigation" id="offcanvas-navigation">
			<ul>
				<li className="menu-item-has-children">
					<Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
				</li>
				<li className="menu-item-has-children">
					<Link to={process.env.PUBLIC_URL + "/"}>Shop</Link>
				</li>

				<li className="menu-item-has-children" id="products">
					<Link>Products</Link>
					<ul className="sub-menu">
						<li className="menu-item-has-children">
							<Link>Sofa Set</Link>
							<ul className="sub-menu">
								<li>
									<Link
										to={
											process.env.PUBLIC_URL +
											"/shop-grid-standard"
										}
									>
										Sofa
									</Link>
								</li>
								<li>
									<Link
										to={
											process.env.PUBLIC_URL +
											"/shop-grid-standard"
										}
									>
										Sofa Cushions
									</Link>
								</li>
								<li>
									<Link
										to={
											process.env.PUBLIC_URL +
											"/shop-grid-standard"
										}
									>
										Sofa Covers
									</Link>
								</li>
							</ul>
						</li>
						<li className="menu-item-has-children">
							<Link>Dining Set</Link>
							<ul className="sub-menu">
								<li>
									<Link
										to={
											process.env.PUBLIC_URL +
											"/shop-grid-standard"
										}
									>
										Dining Table
									</Link>
								</li>
								<li>
									<Link
										to={
											process.env.PUBLIC_URL +
											"/product-tab-left/1"
										}
									>
										Dining Chairs
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li className="menu-item-has-children" id="rooms">
					<Link>Rooms</Link>
					<ul className="sub-menu">
						<li className="menu-item-has-children">
							<Link
								to={
									process.env.PUBLIC_URL +
									"/shop-grid-standard"
								}
							>
								Living Room
							</Link>
						</li>
						<li className="menu-item-has-children">
							<Link
								to={
									process.env.PUBLIC_URL +
									"/shop-grid-standard"
								}
							>
								Common Room
							</Link>
						</li>
						<li className="menu-item-has-children">
							<Link to={process.env.PUBLIC_URL + "/product/1"}>
								Bedroom
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link
						target="_blank"
						to={process.env.PUBLIC_URL + "/google_form"}
					>
						B2B
					</Link>
				</li>
				<li>
					<Link
						target="_blank"
						to={process.env.PUBLIC_URL + "/google_form"}
					>
						Custom
					</Link>
				</li>
				<li>
					<Link to={process.env.PUBLIC_URL + "/contact"}>
						{strings["contact_us"]}
					</Link>
				</li>
			</ul>
		</nav>
	);
};

MobileNavMenu.propTypes = {
	strings: PropTypes.object,
};

export default multilanguage(MobileNavMenu);
