import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import axios from "axios";
import { useRouteMatch, Redirect, useHistory } from "react-router-dom";

const ActivateAccount = ({ location }) => {
    const BASE_URL = "https://api.luxurymjhomes.com/";
    const match = useRouteMatch();
    const { pathname } = location;
    const [email, setEmail] = useState("");
    const history = useHistory();

    const dispatch = useDispatch();
    const { addToast } = useToasts();

    const { userInfo, error, loading } = useSelector((state) => state.userLogin);


    const ActivateAccount = async () => {
        try {
            // const formData = new FormData();
            // formData.append("password", password);

            const config = {
                headers: {
                    "Content-Type": "application/json"
                },
            };

            const { data } = await axios.post(
                `${BASE_URL}activateAccount/`,
                {
                    "token": match.params.id,
                },
                config
            );
            addToast("Account Activated", {
                appearance: "success",
                autoDismiss: true
            });
            history.push('/login-register');
        } catch (error) {
            addToast("Failed to Activate Account", {
                appearance: "error",
                autoDismiss: true
            });
        }


    }

    const resetHandler = (e) => {
        e.preventDefault();

        ActivateAccount();

    };


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
                <title>MJHOMES | Activate Account</title>
                <meta
                    name="description"
                    content="Compare page of MJHOMES react minimalist eCommerce template."
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Activate Account
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
                                                    <h4>Activate Account</h4>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="login">
                                                <div className="login-form-container" style={{ padding: "2rem" }}>
                                                    <div className="login-register-form">
                                                        <form onSubmit={resetHandler}>
                                                            {/* <input
                                                                name="user-email"
                                                                placeholder="Email"
                                                                type="email"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            /> */}

                                                            <div className="button-box" style={{ textAlign: "center" }}>
                                                                <span style={{ fontSize: "1rem", marginBottom: "2rem", color: "grey" }}>
                                                                    Click Below to Activate your Account
                                                                </span>
                                                                <br />
                                                                &nbsp;
                                                                <br />
                                                                <button type="submit" >
                                                                    <span>Confirm</span>
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

ActivateAccount.propTypes = {
    location: PropTypes.object,
};

export default ActivateAccount;
