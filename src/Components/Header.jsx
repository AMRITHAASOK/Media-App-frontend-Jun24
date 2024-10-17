import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { SiYoutubemusic } from "react-icons/si";
function Header() {
  return (
    <div><Navbar className="bg-dark">
    <>
      <Navbar.Brand href="/" className='text-white d-flex'>    
      <SiYoutubemusic className='fs-1 mx-3 my-2' /> <h1>Media Player </h1> 
      </Navbar.Brand>
    </>
  </Navbar></div>
  )
}

export default Header