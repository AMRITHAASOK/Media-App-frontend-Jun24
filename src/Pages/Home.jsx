import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'
import AddVideo from '../Components/AddVideo'
import ViewVideo from '../Components/ViewVideo'
import AddCategory from '../Components/AddCategory'
import { LuHistory } from "react-icons/lu";

function Home() {
      //State creation for state lifiting (Parent Component
      const [uploadVideoResponse,setUploadVideoResponse] = useState({})

      const [deleteVideoResponse,setDeleteVideoResponse] = useState({})

  return (
    <>
    <Container>
      <Row>
        <Col className='p-5'>
        <div className='d-flex'> 
          {/* first child for state lifting  AddVideo (setState)*/}
        <p className='me-4 fw-bolder fs-3 text-white'>Upload Video </p> 
        <AddVideo  setUploadVideoResponse={setUploadVideoResponse}/>
        </div>
        </Col>
        <Col className='p-5 '>
        <Link className='text-white' to={'/watchHistory'}>
        <p className='fw-bolder fs-3' style={{float:'right'}}>Watch History <LuHistory className='fs-3' /></p>
        </Link>
        </Col>
      </Row>
      <div className='row d-flex'>
        <div className='col-6'>
        <p>All Videos</p>
            {/* 2nd child for state lifting  ViewVideo (state)*/}
        <ViewVideo uploadVideoResponse={uploadVideoResponse}  />
        </div>
        <div className='col-6'>
        <div style={{float:'right'}}>
        <p>Category</p>
        <AddCategory/>
        </div>
        </div>
        
      </div>
    </Container>

    </>
  )
}

export default Home