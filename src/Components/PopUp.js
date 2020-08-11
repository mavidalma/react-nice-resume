import React from 'react';
import T from 'prop-types';

import {
    Button,
    Modal,ModalHeader, ModalBody, ModalFooter
  } from "reactstrap";

function PopUp({show, popupTitle, popupText, closeText, close, ...props}) {

  /*
    const handleClose = () => {
      closecb();
      setShow(false);
    };

    const handleShow = () => {
      opencb();
      setShow(true);
    };*/
  
    return (

        <Modal isOpen={show} toggle={close}>
          <ModalHeader toggle={close}> {popupTitle} </ModalHeader>
          <ModalBody>{popupText}</ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={close}>
              {closeText}
            </Button>

          </ModalFooter>
        </Modal>
    );
  };

  PopUp.propTypes = {
    popupTitle: T.string.isRequired,
    popupText: T.string.isRequired, 
    closeText: T.string.isRequired,
    close: T.func,
    show: T.bool,
  };

  export default PopUp;