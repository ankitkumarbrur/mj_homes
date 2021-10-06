import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import axios from "axios";
import { useToasts } from "react-toast-notifications";



const BASE_URL = "https://ankitbrur.pythonanywhere.com/";

const MyAccount = ({ location }) => {

	//Toast
	const { addToast } = useToasts();

	const { pathname } = location;
	//Fetching Address
	const [address, setaddress] = useState({});

	//Add Address Form
	const [addressForm, setaddressForm] = useState(false)

	//Address Fields
	const [street, setstreet] = useState("")
	const [city, setcity] = useState("")
	const [district, setdistrict] = useState("")
	const [state, setstate] = useState("")
	const [pincode, setpincode] = useState(0)
	const [phone, setphone] = useState("")

	//Edit Address Form
	const [editaddress, seteditaddress] = useState(false)

	//Name
	const [name, setname] = useState(localStorage.getItem("userName"))

	//Password
	const [password, setpassword] = useState("")
	const [oldPassword, setoldPassword] = useState("")

	//---------Update Password---------
	const handlePassword = async (e) => {
		e.preventDefault()


		try {
			const formData = new FormData();
			formData.append("password", password);
			formData.append("oldPassword", oldPassword);

			const config = {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `JWT ${localStorage.getItem("userInfo")}`,
				},
			};

			const { data } = await axios.patch(
				`${BASE_URL}user/resetPassword/`,
				formData,
				config
			);

			addToast("Changed Successfully", {
				appearance: "success",
				autoDismiss: true
			});

		}
		catch (error) {
			var message = "";

			if (error.response.data.password != undefined) message = error.response.data.password;
			else if (error.response.data.Error) message = error.response.data.Error;
			else if (error.response.data.Message) message = error.response.data.Message;

			addToast(message, {
				appearance: "error",
				autoDismiss: true
			});

		}

		setpassword("")
		setoldPassword("")


	}

	//---------Update UserInfo---------
	const handleUserInfo = async (e) => {

		e.preventDefault()

		try {
			const formData = new FormData();
			formData.append("first_name", name);

			const config = {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `JWT ${localStorage.getItem("userInfo")}`,
				},
			};

			const { data } = await axios.patch(
				`${BASE_URL}user/changeInfo/`,
				formData,
				config
			);
			localStorage.setItem("userName", name)
			addToast("UPDATED", {
				appearance: "success",
				autoDismiss: true
			});

		}
		catch (error) {
			addToast("NOT UPDATED", {
				appearance: "error",
				autoDismiss: true
			});

		}

	}




	//---------Address Fetch----------
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

		}
		catch (error) {
			console.log(error);

		}

	}

	//----------Delete Address-------------

	const handleDelete = async (id) => {

		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("userInfo")}`,
				},
			};

			const { data } = await axios.delete(
				`${BASE_URL}address/${id}/`,
				config
			);
			addToast("DELETED", {
				appearance: "success",
				autoDismiss: true
			});
			fetch_address();

		}
		catch (error) {
			addToast("NOT DELETED", {
				appearance: "error",
				autoDismiss: true
			});


		}

	}

	//----------Add Address-------------

	const handleAdd = async (e) => {
		e.preventDefault();

		try {

			const formData = new FormData();
			formData.append("street", street);
			formData.append("city", city);
			formData.append("district", district);
			formData.append("state", state);
			formData.append("pin", pincode);
			formData.append("phone", phone);

			const config = {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `JWT ${localStorage.getItem("userInfo")}`,
				},
			};

			const { data } = await axios.post(
				`${BASE_URL}address/`,
				formData,
				config
			);
			addToast("ADDED", {
				appearance: "success",
				autoDismiss: true
			});
			fetch_address();
			setaddressForm(false)
		}
		catch (error) {
			addToast("NOT ADDED", {
				appearance: "error",
				autoDismiss: true
			});

		}

		setcity("")
		setstate("")
		setdistrict("")
		setpincode(0)
		setphone("")
		setstreet("")

	}

	//Edit-Address Form

	const handleEdit = async (e, id) => {
		e.preventDefault();

		try {

			const formData = new FormData();
			formData.append("street", street);
			formData.append("city", city);
			formData.append("district", district);
			formData.append("state", state);
			formData.append("pin", pincode);
			formData.append("phone", phone);

			const config = {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `JWT ${localStorage.getItem("userInfo")}`,
				},
			};

			const { data } = await axios.patch(
				`${BASE_URL}address/${id}/`,
				formData,
				config
			);
			addToast("UPDATED ADDRESS SUCCESSFUL", {
				appearance: "success",
				autoDismiss: true
			});
			fetch_address();
			seteditaddress(false);
		}
		catch (error) {

			addToast("UPDATE FAILED", {
				appearance: "error",
				autoDismiss: true
			});

		}

		setcity("")
		setstate("")
		setdistrict("")
		setpincode(0)
		setphone("")
		setstreet("")

	}

	useEffect(() => {

		fetch_address();

	}, [])


	return (
		<Fragment>
			<MetaTags>
				<title>MJ Homes | My Account</title>
				<meta
					name="description"
					content="Compare page of MJHOMES react minimalist eCommerce template."
				/>
			</MetaTags>
			<BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
				Home
			</BreadcrumbsItem>
			<BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
				My Account
			</BreadcrumbsItem>




			{
				(localStorage.getItem("userInfo") == undefined ? (
					<LayoutOne>
						<div className="myaccount-area pb-80 pt-100" style={{ textAlign: "center" }}>
							<div className="container">
								<div className="row">
									<div className="ml-auto mr-auto col-lg-9" >
										<h1 style={{ color: "#dc3545" }}>You are not Logged In.</h1>
										<div className="myaccount-wrapper" style={{ textAlign: "center" }} >

											<Link to="/login-register" ><button className="LogOut-btn" >Log In</button></Link >
										</div>
									</div>
								</div>
							</div>
						</div>
					</LayoutOne>

				) : (
					<LayoutOne>
						{/* breadcrumb */}
						<Breadcrumb />
						<div className="myaccount-area pb-80 pt-100">
							<div className="container">
								<div className="row">
									<div className="ml-auto mr-auto col-lg-9">
										<div className="myaccount-wrapper">
											<Accordion defaultActiveKey="0">
												<Card className="single-my-account mb-20">
													<Card.Header className="panel-heading">
														<Accordion.Toggle
															variant="link"
															eventKey="0"
														>
															<h3 className="panel-title">
																<span>1 .</span> Edit
																your account information{" "}
															</h3>
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="0">
														<Card.Body>
															<div className="myaccount-info-wrapper">
																<div className="account-info-wrapper">
																	<h4>
																		My Account
																		Information
																	</h4>
																	<h5>
																		Your Personal
																		Details
																	</h5>
																</div>
																<div className="row">
																	<div className="col-lg-6 col-md-6">
																		<div className="billing-info">
																			<label>
																				Full Name
																			</label>
																			<input type="text" value={name} onChange={(e) => setname(e.target.value)} />
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="billing-info">
																			<label>
																				Email
																				Address
																			</label>
																			<input type="email" value={localStorage.getItem("userEmail")} readOnly />
																		</div>
																	</div>

																</div>
																<div className="billing-back-btn">
																	<div className="billing-btn">
																		<button type="submit" onClick={(e) => {
																			handleUserInfo(e)
																		}}>
																			Save
																		</button>
																	</div>
																</div>
															</div>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
												<Card className="single-my-account mb-20">
													<Card.Header className="panel-heading">
														<Accordion.Toggle
															variant="link"
															eventKey="1"
														>
															<h3 className="panel-title">
																<span>2 .</span> Change
																your password
															</h3>
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="1">
														<Card.Body>
															<div className="myaccount-info-wrapper">
																<div className="account-info-wrapper">
																	<h4>
																		Change Password
																	</h4>
																	<h5>
																		Your Password
																	</h5>
																</div>
																<div className="row">
																	<div className="col-lg-12 col-md-12">
																		<div className="billing-info">
																			<label>
																				Old Password
																			</label>
																			<input type="password" value={oldPassword} onChange={(e) => setoldPassword(e.target.value)} />
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="billing-info">
																			<label>
																				New Password
																			</label>
																			<input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
																		</div>
																	</div>
																</div>
																<div className="billing-back-btn">
																	<div className="billing-btn">
																		<button type="submit" onClick={(e) => handlePassword(e)}>
																			Change Password
																		</button>
																	</div>
																</div>
															</div>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
												<Card className="single-my-account mb-20">
													<Card.Header className="panel-heading">
														<Accordion.Toggle
															variant="link"
															eventKey="2"
														>
															<h3 className="panel-title">
																<span>3 .</span> Modify
																your address book
																entries{" "}
															</h3>
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="2">
														<Card.Body>
															<div className="myaccount-info-wrapper">
																<div className="account-info-wrapper" >
																	<h4 style={{ display: "inline-block" }}>
																		Address Book
																		Entries
																	</h4>
																	<button className="LogOut-btn" style={{ display: "inline-block", marginLeft: "10vw" }} onClick={() => {
																		setaddressForm(!addressForm)
																	}}> + ADD ADDRESS</button>

																	{
																		addressForm && (

																			<Card.Body>
																				<div className="myaccount-info-wrapper">
																					<div className="account-info-wrapper">
																						<h4>
																							Address Form
																						</h4>
																						<h5>
																							Add address to your account
																						</h5>
																					</div>
																					<div className="row">
																						<div className="col-lg-6 col-md-6">
																							<div className="billing-info">
																								<label>
																									Street
																								</label>
																								<input type="text" value={street} onChange={(
																									e
																								) =>
																									setstreet(
																										e
																											.target
																											.value,
																									)
																								} />
																							</div>
																						</div>
																						<div className="col-lg-6 col-md-6">
																							<div className="billing-info">
																								<label>
																									City
																								</label>
																								<input type="text" value={city} onChange={(
																									e
																								) =>
																									setcity(
																										e
																											.target
																											.value,
																									)
																								} />
																							</div>
																						</div>
																						<div className="col-lg-12 col-md-12">
																							<div className="billing-info">
																								<label>
																									District
																								</label>
																								<input type="text" value={district} onChange={(
																									e
																								) =>
																									setdistrict(
																										e
																											.target
																											.value,
																									)
																								} />
																							</div>
																						</div>
																						<div className="col-lg-6 col-md-6">
																							<div className="billing-info">
																								<label>
																									State
																								</label>
																								<input type="text" value={state} onChange={(
																									e
																								) =>
																									setstate(
																										e
																											.target
																											.value,
																									)
																								} />
																							</div>
																						</div>
																						<div className="col-lg-6 col-md-6">
																							<div className="billing-info">
																								<label>
																									Pincode
																								</label>
																								{
																									pincode == 0 ? (


																										< input type="number" onChange={(
																											e
																										) => {

																											setpincode(
																												e
																													.target
																													.value,
																											)
																										}} />
																									) : (
																										<input type="number" value={pincode} onChange={
																											(
																												e
																											) => {

																												setpincode(
																													e
																														.target
																														.value,
																												)
																											}} />
																									)
																								}

																							</div>
																						</div>
																						<div className="col-lg-6 col-md-6">
																							<div className="billing-info">
																								<label>
																									Phone
																								</label>
																								<input type="text" value={phone} onChange={(
																									e
																								) =>
																									setphone(
																										e
																											.target
																											.value,
																									)
																								} />
																							</div>
																						</div>
																					</div>
																					<div className="billing-back-btn">
																						<div className="billing-btn">
																							<button type="submit" onClick={(e) => {
																								handleAdd(e)
																							}}>
																								+ ADD
																							</button>
																						</div>
																					</div>
																				</div>
																			</Card.Body>


																		)

																	}

																</div>
																<div className="entries-wrapper">


																	{
																		Object.entries(address).map((add) => {
																			add = add[1]
																			// if (street != add.street) {
																			// 	setstreet(add.street)
																			// 	setcity(add.city)
																			// 	setdistrict(add.district)
																			// 	setstate(add.state)
																			// 	setpincode(add.pin)
																			// 	setphone(add.phone)
																			// }


																			return (
																				<div className="row">
																					<div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
																						<div className="entries-info text-center">

																							{!editaddress ? (
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
																							) :
																								(
																									<Card.Body>
																										<div className="myaccount-info-wrapper">
																											<div className="account-info-wrapper">
																												<h4>
																													Edit Your Address
																												</h4>

																											</div>
																											<div className="row">
																												<div className="col-lg-6 col-md-6">
																													<div className="billing-info">
																														<label>
																															Street
																														</label>
																														<input type="text" value={street} placeholder={add.street} onChange={(
																															e
																														) =>
																															setstreet(
																																e
																																	.target
																																	.value,
																															)
																														} />
																													</div>
																												</div>
																												<div className="col-lg-6 col-md-6">
																													<div className="billing-info">
																														<label>
																															City
																														</label>
																														<input type="text" value={city} placeholder={add.city} onChange={(
																															e
																														) =>
																															setcity(
																																e
																																	.target
																																	.value,
																															)
																														} />
																													</div>
																												</div>
																												<div className="col-lg-12 col-md-12">
																													<div className="billing-info">
																														<label>
																															District
																														</label>
																														<input type="text" value={district} placeholder={add.district} onChange={(
																															e
																														) =>
																															setdistrict(
																																e
																																	.target
																																	.value,
																															)
																														} />
																													</div>
																												</div>
																												<div className="col-lg-6 col-md-6">
																													<div className="billing-info">
																														<label>
																															State
																														</label>
																														<input type="text" value={state} placeholder={add.state} onChange={(
																															e
																														) =>
																															setstate(
																																e
																																	.target
																																	.value,
																															)
																														} />
																													</div>
																												</div>
																												<div className="col-lg-6 col-md-6">
																													<div className="billing-info">
																														<label>
																															Pincode
																														</label>
																														<input type="number" value={pincode} placeholder={add.pin} onChange={(
																															e
																														) =>
																															setpincode(
																																e
																																	.target
																																	.value,
																															)
																														} />
																													</div>
																												</div>
																												<div className="col-lg-6 col-md-6">
																													<div className="billing-info">
																														<label>
																															Phone
																														</label>
																														<input type="text" value={phone} placeholder={add.phone} onChange={(
																															e
																														) =>
																															setphone(
																																e
																																	.target
																																	.value,
																															)
																														} />
																													</div>
																												</div>
																											</div>
																											<div className="billing-back-btn">
																												<div className="billing-btn">
																													<button type="submit" onClick={(e) => {
																														handleEdit(e, add.id)
																													}}>
																														Save Changes
																													</button>
																												</div>
																											</div>
																										</div>
																									</Card.Body>


																								)
																							}

																						</div>
																					</div>
																					<div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
																						<div className="entries-edit-delete text-center">
																							<button className="edit" onClick={() => seteditaddress(!editaddress)}>
																								Edit
																							</button>
																							<button onClick={() => {
																								handleDelete(add.id)
																							}}>
																								Delete
																							</button>
																						</div>
																					</div>
																				</div>

																			)
																		})
																	}

																</div>
																<div className="billing-back-btn">
																	<div className="billing-btn">
																		<button type="submit">
																			Continue
																		</button>
																	</div>
																</div>
															</div>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
											</Accordion>
										</div>
									</div>
								</div>
							</div>
						</div>
					</LayoutOne>
				))
			}

		</Fragment >
	);
};

MyAccount.propTypes = {
	location: PropTypes.object,
};

export default MyAccount;
