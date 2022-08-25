import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Cart from './Cart';

function Add(props) {

  let card =  {title : props.title , cover : props.cover , price : props.price}
 
  const  add=()=>{
    props.setCart([...props.cart , card ])
        
    }

  return (
    <button onClick={add}>
      Add
    </button>
  )
}

export default Add ;