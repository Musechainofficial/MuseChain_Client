import { Checkbox } from "antd";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./myAlert.css";

const MyVerticallyCenteredModal = (props) => {
  const [first, setfirst] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };


  return (
    <>
      <div className="alertWrapper">
        <Modal {...props}>
        <div className="alertBox">
          <h4>Save your Private Key</h4>
          <p>
            Hello, thank you for signing up with Musechain. We have created a
            blockchain wallet for you! A blockchain wallet has 2 elements, a
            public key and a private key. This long address is your private key.
            Your private key is VERY important. Think of your public key as your
            bank account number and the private key as your bank account
            password. The private key is crucial if you want to sell your NFTs
            or withdraw money in the future! Here is your private key (note: due
            to security concerns, we will not be saving your private key and it
            will NOT be recoverable/ changeable) Please copy your private key
            and make sure you keep it in a safe place.
            </p>
            <p style={{fontsize:'10px'}}>{props.text}</p>
            <br></br>
            <Button className="myCopyButton poverflow" onClick={props.onCopy}>
              Copy Private-Key
            </Button>
            <br />
            <Checkbox onClick={handleClick} style={{ paddingRight: "10px", }}></Checkbox>
            <p style={{ display: "inline-block"}}>
              I confirm I read the above and copied the private key.
            </p>
            <p>
            Musechain disclaims any responsibility for any loss of your private
            keys if you fail to copy it now or fail to keep track of that.
            </p>

          <Button
            className="myCloseButton"
            onClick={props.onHide}
            style={
              {
                backgroundColor: isSelected ? "rgb(35, 145, 221)" : "grey",
                // className: isSelected ? "myCloseButton" : "btn"
              }
            }
            // disabled={!isSelected}
            disabled={!isSelected}
          >
            Login in Now
          </Button>
        </div>
        </Modal>
      </div>

      {/* <div className="alertWrapper">
        <Modal {...props}>
          <div className="alertBox">
            <h4>Save your Private Key</h4>
            <p>
              Hello, thank you for signing up with Musechain. We have created a
              blockchain wallet for you! A blockchain wallet has 2 elements, a
              public key and a private key. This long address is your private
              key. Your private key is VERY important. Think of your public key
              as your bank account number and the private key as your bank
              account password. The private key is crucial if you want to sell
              your NFTs or withdraw money in the future! Here is your private
              key (note: due to security concerns, we will not be saving your
              private key and it will NOT be recoverable/ changeable) Please
              copy your private key and make sure you keep it in a safe place.
              {props.text}
              <Button className="myCopyButton" onClick={props.onCopy}>
                Copy private key
              </Button>
              <p>[I confirm I read the above and copied the private key]</p>
              *Musechain disclaims any responsibility for any loss of your
              private keys if you fail to copy it now or fail to keep track of
              that.
            </p>
            <Button className="myCloseButton" onClick={props.onHide}>
              OK
            </Button>
          </div>
        </Modal>
      </div> */}
    </>
  );
};

export default MyVerticallyCenteredModal;
