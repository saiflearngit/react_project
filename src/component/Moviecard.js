import React , {useState} from 'react';
import Cart from './Cart';
import Add from './Add';


function Moviecard(props) {

    let card =  {title : props.title , cover : props.cover , price : props.price}

  


    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.cover}></img>
            <h3>{props.price} dt</h3>
          
        </div>
      
    );
  }
  
  export default Moviecard;