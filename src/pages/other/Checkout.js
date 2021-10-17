import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const BASE_URL = "https://api.luxurymjhomes.com/";

const Checkout = ({ location, cartItems, currency }) => {
	const [address, setaddress] = useState({});
	const [selected, setselected] = useState();
	const { pathname } = location;
	let cartTotalPrice = 0;

	const fetch_address = async () => {

		try {
			// const formData = new FormData();
			// formData.append("email", email);
			// formData.append("password", pass);

			// formData.append("first_name", firstname + " " + lastname);

			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("userInfo")}`,
				},
			};

			const { data } = await axios.get(
				`${BASE_URL}address/`,
				config
			);

			setaddress(data)
			setselected(data[0].id)

		}
		catch (error) {
			console.log(error);

		}

	}
	useEffect(() => {
		fetch_address();

	}, [])


	return (
		<Fragment>
			<MetaTags>
				<title>MJ Homes | Checkout</title>
				<meta
					name="description"
					content="Checkout page of MJHOMES react minimalist eCommerce template."
				/>
			</MetaTags>
			<BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
				Home
			</BreadcrumbsItem>
			<BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
				Checkout
			</BreadcrumbsItem>
			<LayoutOne>
				{/* breadcrumb */}
				<Breadcrumb />
				<div className="checkout-area pt-95 pb-100">
					<div className="container">
						{cartItems && cartItems.length >= 1 ? (
							<div className="row">
								<div className="col-lg-7">
									<Accordion defaultActiveKey="0">
										<Card className="single-my-account mb-20">
											<Card.Header className="panel-heading">
												<Accordion.Toggle
													variant="link"
													eventKey="0"
												>
													<h3 className="panel-title">
														{/* <span>1 .</span> Edit */}
														Select Address{" "}
													</h3>
												</Accordion.Toggle>
											</Card.Header>
											<Accordion.Collapse eventKey="0">
												<Card.Body>
													<div className="myaccount-info-wrapper">
														<div className="billing-back-btn" style={{ display: "block", textAlign: "Center", marginBottom: "4vh", marginTop: "-2vh" }}>
															<div className="billing-btn" style={{ textAlign: "Center" }}>
																<Link to="/my-account" >
																	<button type="submit">
																		Handle Addresses
																	</button>
																</Link>
															</div>
														</div>
														<div className="entries-wrapper">


															{
																Object.entries(address).map((add) => {
																	add = add[1]

																	return (
																		<div className="row">
																			<div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
																				<div className="entries-info text-center">


																					<>
																						<p>
																							Street : {add["street"]}
																						</p>
																						<p>
																							City : {add.city}
																						</p>
																						<p>
																							District : {add.district}
																						</p>
																						<p>
																							State : {add.state}
																						</p>
																						<p>
																							Pin : {add.pin}
																						</p>
																						<p>
																							Phone : {add.phone}
																						</p>
																					</>




																				</div>
																			</div>
																			<div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
																				<div className="entries-edit-delete text-center">
																					{
																						add.id == selected ? (
																							<button className="edit" style={{ backgroundColor: "#ff9f00" }}>
																								{/* <button className="edit" onClick={() => seteditaddress(!editaddress)}> */}
																								Selected
																							</button>
																						) :
																							(
																								<button className="edit" onClick={() => setselected(add.id)}>
																									{/* <button className="edit" onClick={() => seteditaddress(!editaddress)}> */}
																									Select
																								</button>

																							)
																					}

																				</div>
																			</div>
																		</div>

																	)
																})
															}

														</div>
													</div>
												</Card.Body>
											</Accordion.Collapse>
										</Card>
									</Accordion>
								</div>

								<div className="col-lg-5">
									<div className="your-order-area">
										<h3>Your order</h3>
										<div className="your-order-wrap gray-bg-4">
											<div className="your-order-product-info">
												<div className="your-order-top">
													<ul>
														<li>Product</li>
														<li>Total</li>
													</ul>
												</div>
												<div className="your-order-middle">
													<ul>
														{cartItems.map(
															(cartItem, key) => {
																const discountedPrice =
																	getDiscountPrice(
																		cartItem.price ? cartItem.price : cartItem.variation.price,
																		cartItem.discount ? cartItem.discount : cartItem.variation.discount,
																	);
																const finalProductPrice =
																	(
																		cartItem.price ? cartItem.price : cartItem.variation.price *
																			currency.currencyRate
																	).toFixed(
																		2,
																	);
																const finalDiscountedPrice =
																	(
																		discountedPrice *
																		currency.currencyRate
																	).toFixed(
																		2,
																	);

																discountedPrice !=
																	null
																	? (cartTotalPrice +=
																		finalDiscountedPrice *
																		cartItem.quantity)
																	: (cartTotalPrice +=
																		finalProductPrice *
																		cartItem.quantity);
																return (
																	<li
																		key={
																			key
																		}
																	>
																		<span className="order-middle-left">
																			{
																				cartItem.name ? cartItem.name : cartItem.variation.name
																			}{" "}
																			X{" "}
																			{
																				cartItem.quantity
																			}
																		</span>{" "}
																		<span className="order-price">
																			{discountedPrice !==
																				null
																				? currency.currencySymbol +
																				(
																					finalDiscountedPrice *
																					cartItem.quantity
																				).toFixed(
																					2,
																				)
																				: currency.currencySymbol +
																				(
																					finalProductPrice *
																					cartItem.quantity
																				).toFixed(
																					2,
																				)}
																		</span>
																	</li>
																);
															},
														)}
													</ul>
												</div>
												<div className="your-order-bottom">
													<ul>
														<li className="your-order-shipping">
															Shipping
														</li>
														<li>Free shipping</li>
													</ul>
												</div>
												<div className="your-order-total">
													<ul>
														<li className="order-total">
															Total
														</li>
														<li>
															{currency.currencySymbol +
																cartTotalPrice.toFixed(
																	2,
																)}
														</li>
													</ul>
												</div>
											</div>
											<div className="payment-method"></div>
										</div>
										<div className="place-order mt-25">
											<button className="btn-hover">
												Place Order
											</button>
										</div>
									</div>
								</div>
							</div>
						) : (
							<div className="row">
								<div className="col-lg-12">
									<div className="item-empty-area text-center">
										<div className="item-empty-area__icon mb-30">
											<i className="pe-7s-cash"></i>
										</div>
										<div className="item-empty-area__text">
											No items found in cart to checkout{" "}
											<br />{" "}
											<Link
												to={
													process.env.PUBLIC_URL +
													"/shop-grid-standard"
												}
											>
												Shop Now
											</Link>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</LayoutOne>
		</Fragment >
	);
};

Checkout.propTypes = {
	cartItems: PropTypes.array,
	currency: PropTypes.object,
	location: PropTypes.object,
};

const mapStateToProps = (state) => {
	return {
		cartItems: state.cartData,
		currency: state.currencyData,
	};
};

export default connect(mapStateToProps)(Checkout);
