import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link, Redirect } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";

const ResetPassword = ({ location }) => {
    const BASE_URL = "http://localhost:8000/";
    const match = useRouteMatch();
    const { pathname } = location;
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const dispatch = useDispatch();
    const { addToast } = useToasts();

    const { userInfo, error, loading } = useSelector((state) => state.userLogin);


    const resetPassword = async (password) => {
        try {
            const formData = new FormData();
            formData.append("password", password);
            formData.append("token", match.params.id);

            const config = {
                headers: {
                    "Content-Type": "application/json"
                },
            };

            const { data } = await axios.patch(
                `${BASE_URL}resetPassword/`,
                {
                    "password": password,
                    "token": match.params.id,
                },
                config
            );
            console.log("data");
            console.log("Success")
        } catch (error) {
            console.log("fail")
        }


    }

    const resetHandler = (e) => {
        e.preventDefault();
        if (passwordConfirm != "" && password != "" && password == passwordConfirm) {
            resetPassword(password);
        }
    };



    // useEffect(() => {
    //     if (
    //         !loading &&
    //         localStorage.getItem("userInfo") !== null &&
    //         localStorage.getItem("userInfo") !== undefined
    //     ) {
    //         console.log("Logged In");
    //         console.log(userInfo);
    //     }
    //     // fetch_data();
    //     if (userInfo && data) {
    //         // fetchData();
    //         setdata(false);
    //     }
    //     console.log("RE RENDERED");
    // }, [userInfo, loading]);

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
        <Fragment>
            <MetaTags>
                <title>MJHOMES | Login</title>
                <meta
                    name="description"
                    content="Compare page of MJHOMES react minimalist eCommerce template."
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Reset Password
            </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />
                <div className="login-register-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                                <div className="login-register-wrapper">
                                    <Tab.Container defaultActiveKey="login">
                                        <Nav variant="pills" className="login-register-tab-list">
                                            <Nav.Item>
                                                <Nav.Link eventKey="login">
                                                    <h4>Reset Password</h4>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="login">
                                                <div className="login-form-container">
                                                    <div className="login-register-form">
                                                        <form onSubmit={resetHandler}>
                                                            <input
                                                                type="password"
                                                                name="user-password"
                                                                placeholder="Password"
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                            <input
                                                                type="password"
                                                                name="user-password"
                                                                placeholder="Confirm Password"
                                                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                                            />
                                                            <div className="button-box">
                                                                <button type="submit" >
                                                                    <span>Login</span>
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
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

ResetPassword.propTypes = {
    location: PropTypes.object,
};

export default ResetPassword;
