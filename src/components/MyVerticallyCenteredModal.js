import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import './myAlert.css'

const MyVerticallyCenteredModal = (props) => {
  return (
    <>
      {/* <div>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="example-modal-sizes-title-sm"
      centered
    >
          <Modal.Body>
            <h4>Save your Private Key</h4>
            <p>
              {props.text}
            </p>
          </Modal.Body>
          <Modal.Footer className="text-center">
            <Button className="btn btn-primary" onClick={props.onHide}>Close</Button>
            <Button onClick={props.onCopy}>copy</Button>
          </Modal.Footer>
        </Modal>
      </div> */}


      <div className="alertWrapper">
      <Modal
      {...props}
    >
        <div className="alertBox">
          <h4>Save your Private Key</h4>
          <p>{props.text}</p>
          <Button className='myCopyButton' onClick={props.onCopy}>Copy</Button>
          <Button className="myCloseButton" onClick={props.onHide}>OK</Button>
        </div>
        </Modal>
      </div>
    </>
  );
};

export default MyVerticallyCenteredModal;
