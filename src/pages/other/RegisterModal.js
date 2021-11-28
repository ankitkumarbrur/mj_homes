import React, { Fragment, useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import LoginRegisterComponent from "./LoginRegisterComponent";

export default function RegisterModal(props) {
    return (
        <Modal {...props}

            aria-labelledby="contained-modal-title-vcenter"


        >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login-Register Form
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body style={{ padding: "0 !important" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>

                    <div className="register-form-modal" >
                        <LoginRegisterComponent />
                    </div>
                    <img src="https://source.unsplash.com/random/200x300" className="register-form-image" style={{ flexBasis: "33.33%" }} />

                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}
