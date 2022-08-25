import React from 'react'
import '../style_files/navbar.css'

export default function Navbar(props) {
  return (
    <div className='nav'>
    <h1>MOVIE STORE</h1>
    <div className='filter'>
    {props.children}
    </div>
    </div>
  )
}
