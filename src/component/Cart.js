import React , {useState} from 'react';
import Moviecard from './Moviecard';


function Cart() {

    const [cart , setCart] = useState(
        [
            {title : "aaaaa" , cover : "https://m.media-amazon.com/images/I/51-v2kovwfL._AC_SY445_.jpg" , price : 15},
            {title : "zzzzz" , cover : "https://m.media-amazon.com/images/I/51-v2kovwfL._AC_SY445_.jpg" , price : 15}
        ]
    )




    return (
      <div>
        { cart.map(
            (item) => (
                <Moviecard title={item.title} cover={item.cover} price={item.price}></Moviecard>
            )
        ) 
         
         
         }

      </div>
    );
  }
  
  export default Cart;