import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { deleteWatchHistoryAPI, getWatchHistoryAPI } from '../Services/allAPIs';
import { MdDelete } from "react-icons/md";
function WatchHistory() {

  const [history,setHistory]=useState()

  const getHistory = async() =>{
  const result= await getWatchHistoryAPI()
  console.log(result);
  setHistory(result.data)
  }
  console.log(history);

  const handleDelete = async(id) =>{
    const result = await deleteWatchHistoryAPI(id)
    console.log(result);
    window.location.reload()
  }
  
  useEffect(()=>{
    getHistory();
  },[])

  return (
    <>
      <Row>
        <Col>
        <p className='fs-2 fw-bolder'>Watch History</p>
      </Col>
        <Col > 
        <Link to={'/'} className='text-white fs-3'>
        <p style={{float:'right'}} className='px-5'>Back to Home</p>
        </Link>
        </Col>
      </Row>
      <Row>
        <Col className='p-5 mx-5'>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sl No</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Timestamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        history?history.map((item,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td>{item.url}</td>
          <td>{item.timestamp}</td>
          <td><MdDelete onClick={()=>handleDelete(item.id)} className='fs-4 text-danger' /> </td>
        </tr>
       
        )):"No data"
       }
      
      </tbody>
    </Table>
        </Col>
      </Row>
    </>
  )
}

export default WatchHistory