
import React , {useState} from 'react';
import Add from './Add';
import Moviecard from './Moviecard';
import Confirm from './Modal';
import Filter from './Filter';
import Navbar from './Navbar'

import '../style_files/movielist.css'



function Movielist() {

    const [list , setList] = useState(
        [
            {title : "spiderman" , cover : "https://www.galeriedujouet.com/docs/17149-POSTER%20SPIDER-MAN.JPG" , price : 15},
            {title : "batman" , cover : "data:image/jpeg;base64,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" , price : 5},
            {title : "john wick" , cover : "https://m.media-amazon.com/images/I/51-v2kovwfL._AC_SY445_.jpg" , price : 15},
            {title : "godfather" , cover : "https://media.elcinema.com/uploads/_315x420_fbaa3f5faa7b0f15facd2ca8538040725aed35ded9471e41e65a7998dc0ffa47.jpg" , price : 5},
            {title : "joker" , cover : "https://fr.web.img6.acsta.net/pictures/19/09/03/12/02/4765874.jpg" , price : 15},
            {title : "thor" , cover : "https://lumiere-a.akamaihd.net/v1/images/image_06aa7fbd.jpeg?region=0%2C0%2C540%2C810" , price : 5},
            {title : "uncharted" , cover : "https://i.ebayimg.com/images/g/p-kAAOSwJSFh8VWp/s-l500.jpg" , price : 15},
            {title : "carter" , cover : "https://m.media-amazon.com/images/M/MV5BNWEyOThlZTAtMzExMy00NDBhLTk4Y2QtMDg3OTRkNzgyNjEyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg" , price : 5}
        ]
    )

    const [filtred_list , setFiltred_list] = useState(
        [...list]
    )

    const [cart , setCart] = useState(
        [
            {title : "aaaaa" , cover : "https://m.media-amazon.com/images/I/51-v2kovwfL._AC_SY445_.jpg" , price : 15},
            {title : "zzzzz" , cover : "https://m.media-amazon.com/images/I/51-v2kovwfL._AC_SY445_.jpg" , price : 5}
        ]
    )

 //   const add= () => setCart([...cart ,  {title : item.title , cover : item.cover , price : item.price} ])

 

 const [show , setShow] = useState(true)

 const toggle = () => {setShow(!show)}

 function remove(item) {

    let arr= [...cart]

    for( var i = 0; i < arr.length; i++){ 
    
        if ( arr[i] === item) { 
    
           arr.splice(i, 1) ; 
        }
    
    }
    return arr
 }

 function bytitle(e){
    let arr = [...list]
    
   arr = arr.filter((item) => item.title.includes(e.target.value))
   return  arr
 }

 function byprice(e){
    let arr = [...list]
    
   arr = arr.filter((item) => e.target.value=="" ? true : item.price < e.target.value)
   return  arr
 }


    return (
      <div>
       
       { show ? 
         
        <div>
            <Navbar>
            <div className='fil'>
                <label>filter by title </label>
              <input type='text' onChange={(e) => setFiltred_list([...bytitle(e)])} ></input>
            </div>
            <div className='fil'>
                <label>filter by price</label>
              <input type='text' onChange={(e) => setFiltred_list([...byprice(e)])} ></input>

            </div>
            <button onClick={toggle} className='b'>cart</button>
            </Navbar>
            <h2>choose your film !!!</h2>
            <div className='list'>

        { filtred_list.map(
            (item) => (
               <div className='card'> <Moviecard title={item.title} cover={item.cover} price={item.price}></Moviecard> 
                     <button onClick={() => setCart([...cart ,  {title : item.title , cover : item.cover , price : item.price} ])} className='b'>buy</button> 
                </div>
            )
        )  
         } </div>
        
      </div>
       :
      <div>
        <button onClick={toggle} className='b blm' >return to Movielist</button>
        <div className='list'>
      { cart.map(
            (item) => (
                <div className='card'>
                <Moviecard title={item.title} cover={item.cover} price={item.price}></Moviecard>
                <button onClick={() =>setCart(remove(item)) } className='b'>remove</button>
                </div>
            )            
        )    
         }
         </div>

         
         <Confirm cart={cart} setCart={setCart} toggle={toggle}></Confirm>
      </div>

}
         
  
      </div>
    );
  }
  
  export default Movielist;