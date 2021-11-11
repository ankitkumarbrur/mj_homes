import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link, Redirect, useHistory } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, register } from "../../redux/actions/userActions";
import { addToCart } from "../../redux/actions/cartActions";
import { useToasts } from "react-toast-notifications";
import axios from "axios";

const LoginRegister = ({ location }) => {
    const history = useHistory();
    const { pathname } = location;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [pass, setPass] = useState("");
    const [passConfirm, setPassConfirm] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [data, setdata] = useState(true);

    const dispatch = useDispatch();
    const { addToast } = useToasts();

    const { userInfo, error, loading } = useSelector((state) => state.userLogin);
    const { products } = useSelector((state) => state.productData);


    const loginHandler = (e) => {
        e.preventDefault();
        if (username != "" && password != "") {
            dispatch(login(username, password, addToast));
        }
    };

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout(addToast));
    };

    const registerHandler = (e, data) => {
        e.preventDefault();

        if (
            firstname != "" &&
            lastname != "" &&
            pass != "" &&
            passConfirm != "" &&
            email != ""
        ) {
            dispatch(register(firstname, lastname, pass, email, addToast, history)).then((res) => {

                window.location.reload(false);

            })
        }
    };

    useEffect(() => {
        if (
            !loading &&
            localStorage.getItem("userInfo") !== null &&
            localStorage.getItem("userInfo") !== undefined
        ) {
            console.log("Logged In");
            console.log(userInfo);
        }
        // fetch_data();
        if (userInfo && data) {
            // fetchData();
            setdata(false);
        }

    }, [userInfo, loading]);

    if (loading) {
        return (
            <div className="MJHOMES-preloader-wrapper">
                <div className="MJHOMES-preloader">
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
    }

    return (
        <div style={{ position: "absolute", height: "100%", width: "100%", display: "block", backgroundColor: "#8080800a" }}>
            <div style={{ position: "relative", height: "20px", width: "20px", display: "block", backgroundColor: "black", top: "25%", left: "80vw" }}></div>
            <div className="login-register-area" style={{ position: "relative", top: "25%" }}>

                <div className="container">
                    <div className="row">
                        <div style={{ marginLeft: "10vw" }}>
                            <div className="login-register-wrapper">
                                <Tab.Container defaultActiveKey="login">
                                    <Nav variant="pills" className="login-register-tab-list">
                                        <Nav.Item>
                                            <Nav.Link eventKey="login">
                                                <h4>Login</h4>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="register">
                                                <h4>Register</h4>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="login">
                                            {localStorage.getItem("userInfo") != null ? (
                                                <div
                                                    style={{
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <h1
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        Hey,&nbsp;
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                color: "#fd7e14",
                                                            }}
                                                        >
                                                            {localStorage.getItem("userName")}
                                                        </div>
                                                    </h1>
                                                    <button
                                                        type="submit"
                                                        onClick={logoutHandler}
                                                        className="LogOut-btn"
                                                    >
                                                        Log Out
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="login-form-container">
                                                    <div className="login-register-form">
                                                        <form onSubmit={loginHandler}>
                                                            <input
                                                                type="text"
                                                                name="user-name"
                                                                placeholder="Username"
                                                                onChange={(e) => setUsername(e.target.value)}
                                                            />
                                                            <input
                                                                type="password"
                                                                name="user-password"
                                                                placeholder="Password"
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                            <div className="button-box">
                                                                <div className="login-toggle-btn">
                                                                    {/* <input type="checkbox" />
                                    <label className="ml-10">Remember me</label> */}
                                                                    <Link to={process.env.PUBLIC_URL + "/forgotPassword"}>
                                                                        Forgot Password?
                                                                    </Link>
                                                                </div>
                                                                <button type="submit">
                                                                    <span>Login</span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            )}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="register">
                                            <div className="login-form-container">
                                                <div className="login-register-form">
                                                    <form onSubmit={registerHandler}>
                                                        <input
                                                            type="text"
                                                            name="first-name"
                                                            placeholder="First Name"
                                                            onChange={(e) => setFirstname(e.target.value)}
                                                        />
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            placeholder="Last Name"
                                                            onChange={(e) => setLastname(e.target.value)}
                                                        />

                                                        <input
                                                            name="user-email"
                                                            placeholder="Email"
                                                            type="email"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        {/* <input
																name="user-phone"
																placeholder="Phone"
																type="tel"
																pattern="[0-9]{10}"
																onChange={(e) =>
																	setTel(
																		e.target
																			.value,
																	)
																}
															/> */}
                                                        <input
                                                            type="password"
                                                            name="user-password"
                                                            placeholder="Password"
                                                            onChange={(e) => setPass(e.target.value)}
                                                        />
                                                        <input
                                                            type="password"
                                                            name="confirm-password"
                                                            placeholder="Confirm Password"
                                                            onChange={(e) => setPassConfirm(e.target.value)}
                                                        />

                                                        <div className="button-box">
                                                            <button type="submit">
                                                                <span>Register</span>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                        <img src="https://source.unsplash.com/random" style={{ maxHeight: "45vh", width: "32vw" }} ></img>
                    </div>
                </div>
            </div>
        </div>

    );
};

LoginRegister.propTypes = {
    location: PropTypes.object,
};

export default LoginRegister;
