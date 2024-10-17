import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategoryAPI, deleteCategoryAPI, getAVideoDetailsAPI, getCategoryAPI, updateAVideoDetailsAPI } from '../Services/allAPIs';
import { AiOutlineDelete } from "react-icons/ai";
import VideoCard from './VideoCard';
function AddCategory() {

  const [CategoryName,setCategoryName]= useState("")
  const [CategoryDetails,setCategoryDetails]=useState([])

  const handleCategory =async()=>{
   
    if(CategoryName){
      const body={
        CategoryName,
        allVideos:[]
      }
     try{
      const result= addCategoryAPI(body)
      console.log(result);
      alert("Category added successfully")
      handleClose()
     }catch(error){
      console.log(error);
      
     }
    }
    
    
  }

  const getCategory = async()=>{
    const result = await getCategoryAPI()
    console.log(result);
    setCategoryDetails(result.data)
    
  }
  console.log(CategoryDetails);//array
  const deleteCategory = async(id)=>{
    const result = await deleteCategoryAPI(id)
    console.log(result);
    window.location.reload()
    
  }

  const dragOver=(e)=>{
    e.preventDefault()
    console.log("Video Over");
    console.log(e); 
  }

  const videoDropped=async(e, categoryId)=>{
    const videoId = e.dataTransfer.getData("videoId")
    console.log("Video dropped successfully...CategoryId: " + categoryId , "Video Id: " + videoId);
    console.log(e);
    //fetch the video details
    const{ data }= await getAVideoDetailsAPI(videoId)
    console.log(data);
    //add these details to the category => allVideos []
    const selectedCategory = CategoryDetails.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory)
    const updatecategory = await updateAVideoDetailsAPI(categoryId,selectedCategory)
    console.log(updatecategory);
    getCategory()
  }

  useEffect(()=>{
    getCategory()
  },[])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button onClick={handleShow} className='btn btn-primary btn-lg'>Add Category</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <p className='fs-3'>Add Category</p> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-light p-2 '>
            <FloatingLabel
              controlId="floatingInput"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Add Caption" />
            </FloatingLabel>
            
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleCategory} variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>

      <div className='row'>
        {
          CategoryDetails.length>0? CategoryDetails.map(item=>(
           <div>
             <div droppable={true} onDragOver={e=>dragOver(e)}  onDrop={(e)=>videoDropped(e,item.id)} className="col d-flex justify-content-between border m-3 p-5">
                <h6>{item.CategoryName}</h6>
                <AiOutlineDelete onClick={()=>deleteCategory(item.id)}/>
            
            <div className="row">
              {
                item.allVideos.length>0?item.allVideos.map(video=>(
                  <div className="col">
                    <VideoCard videoDetails={video} />
                  </div>
                )):" "
              }
            </div>
            </div>
           </div>
          )):"No data"
        }
      </div>
    </div>
  )
}

export default AddCategory