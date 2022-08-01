import React, { useEffect } from "react";
import Modal from 'react-bootstrap/Modal'
import DiscountImg from '../../images/cit_discount.png'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
      className="cit_discount_modal"
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="cit_discount_header" closeButton>
        </Modal.Header>
        <a target="_blank" href="http://careerwheel.creativeitinstitute.com/">
            <Modal.Body
            style={{ backgroundImage: `url(${DiscountImg})`,
             height: "700px", 
             backgroundRepeat: 'no-repeat', 
             }}>
            </Modal.Body>
        </a>
      </Modal>
    );
  }
  
  export default function ModalPopup() {
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        setTimeout(() => setModalShow(true), 3000);
      }, []);
  
    return (
      <>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
