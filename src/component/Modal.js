import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Confirm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totalprice = () => {let price=0 ; for(let i = 0; i < props.cart.length; i++) {
    price = price + props.cart[i].price 
  }; return price}

  const handleConfirm = () => {handleClose() ; props.toggle() ; props.setCart([])}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Confirm
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className='mod'>
            <div>
             <label>name</label> 
            <input type="text"></input>
            </div>
           
            <div>
             <label>card number</label> 
            <input type="text"></input>
            </div>
            <div>total price : {totalprice()} dt</div>
            <div>movies to buy : {props.cart.map(
              (item) => <span> {item.title}</span>
            )} </div>
            
            
           </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Confirm ;