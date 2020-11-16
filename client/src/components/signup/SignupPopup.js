import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { SignupOption } from "./SignupOption";

export class SignupPopup extends Component {
 
  render() {
    return (
      <Modal
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <SignupOption />
        </Modal.Body>
      </Modal>
    );
  }
}
