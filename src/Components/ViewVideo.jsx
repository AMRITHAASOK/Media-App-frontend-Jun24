import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { getVideoAPI } from '../Services/allAPIs'

function ViewVideo({uploadVideoResponse,setDeleteVideoResponse}) {
//to hold all video details
  const [Video,setVideo]=useState([])

  const getVideo =async()=>{
    const response = await getVideoAPI()
    console.log(response.data);//array of data
    setVideo(response.data)
    setDeleteVideoResponse(response.data)
  }
  console.log(Video);//array of video
  
  useEffect(()=>{
    getVideo()
  },[uploadVideoResponse])

  return (
    <div>
      <Row className='border border-white p-3'>
        {
          Video.length!=0?Video.map(item=>(
            <Col>
        <VideoCard videoDetails ={item}/>
        </Col>
          )):"Not found"
        }
        
      </Row>
   
     
    </div>
  )
}

export default ViewVideo