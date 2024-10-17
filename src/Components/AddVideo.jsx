import React from 'react'
import { FiUpload } from "react-icons/fi";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoAPI } from '../Services/allAPIs';
import Swal from 'sweetalert2'


function AddVideo({setUploadVideoResponse}) {

  const [videoDetails,setVideoDetails] = useState({
    caption:"",
    img:'',
    url:"",
  })
  console.log(videoDetails);

  const getEmbbedLink =(e)=>{
    // console.log(e.target.value)
    //destructuring
    const {value}= e.target
    console.log(value);
    let yCode = value.slice(-31)
    let yLink = `https://www.youtube.com/embed/${yCode}`
    setVideoDetails({...videoDetails,url:yLink})
  }

  const handleAdd=async()=>{
    //
    const { caption, url, img} = videoDetails
    if(!caption||!url||!img){
      alert("Please fill the details")
    }
    else{
      //addVideoAPI()
      const response = await addVideoAPI(videoDetails)
      console.log(response);
      if(response.status>=200 && response.status<300){
        Swal.fire({
          title: 'Success!',
          text: 'Video added successfully',
          icon: 'success',
          confirmButtonText: 'Back'
        })
        setUploadVideoResponse(response.data)
        setVideoDetails({
          caption:"",
          url:"",
          img:""
        })
        handleClose()
      }
      else{
        Swal.fire({
          title: 'Error!',
          text: response.message,
          icon: 'error',
          confirmButtonText: 'Back'
        })
        setVideoDetails({
          caption:"",
          url:"",
          img:""
        })
        handleClose()
      }
      
    }
  }
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant='light' className='rounded' onClick={handleShow}> <FiUpload className='fs-4 fw-bolder ' /> </Button>
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
          <form className='border border-light p-2 '>
            <FloatingLabel
              controlId="floatingInput"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
            </FloatingLabel>
            <FloatingLabel onChange={e=>setVideoDetails({...videoDetails,img:e.target.value})} controlId="floatingP" label="Video Image" className="mb-3">
              <Form.Control type="text" placeholder="Video Image" />
            </FloatingLabel>
            <FloatingLabel onChange={getEmbbedLink} FloatingLabelcontrolId="floating" label="Video Url" className="mb-3">
              <Form.Control  type="text" placeholder="Video Url" />
            </FloatingLabel>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddVideo