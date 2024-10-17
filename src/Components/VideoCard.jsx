import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { MdDelete } from "react-icons/md";  
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addWatchAPI, deleteAVideoAPI } from '../Services/allAPIs';

function VideoCard({videoDetails}) {
 
  console.log(videoDetails);//

  const handleDelete=async(id)=>{
    const result= await deleteAVideoAPI(id)
    window.location.reload();
    
  }
  
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    //add watch history API  details to the server 
    const handleShow = async() => {
      setShow(true);
      const {caption ,url } = videoDetails

      //generate date and time
      let today = new Date()
      console.log(today);//Wed Oct 09 2024 16:31:56 GMT+0530 (India Standard Time)
      //convert date and time
      let timestamp = new Intl.DateTimeFormat('en-US', {year:'numeric',month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today)
      console.log(timestamp);// 10/9/2024, 04:36:07 PM
      
    let details = {
      caption,url,timestamp
    }
      // api call
      const response = await addWatchAPI(details)
      console.log(response);
      
    }

    const dragStarted=(e,videoId)=>{
      console.log("Vide dragStarted...id: " + videoId);
      console.log(e);
      e.dataTransfer.setData("VideoId", videoId);
    }

  return (
    <div>
    
          
    <Card draggable={true} onDragStart={(e)=>dragStarted(e,videoDetails.id)} style={{width:'200px',height:'200px'}} className='p-4 mt-4'>
      <Card.Img width={'100%'} height={'100px'}  onClick={handleShow} variant="top" src={videoDetails.img} />
      <Card.Body className='d-flex'>
        <p className=''>{videoDetails.caption}</p>  <p ><MdDelete onClick={()=>handleDelete(videoDetails.id)} className='ms-5 fs-5 fw-bolder'/></p>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <p className='fs-3'>Upload Video</p> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src= {videoDetails.url}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
      </Modal>    
    </div>
  )
}

export default VideoCard