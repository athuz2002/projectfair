import React,{useState} from 'react'
import { Modal,Button } from 'react-bootstrap'
import upload2 from '../assets/upload2.png'

function Edit() {
  const[show,setShow]=useState(false)
  const handleShow=()=>setShow(true)
  const handleClose=()=>setShow(false)
  return (
    <>
    <button onClick={handleShow} style={{textDecoration:'none'}} className='btn btn-Link text-success d-flex 
    align-items-center fw-bolder'><i style={{height:'34px'}} className='fa-solid fa-edit fa-2x me-2'></i></button>

<Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='row'>
          <div className='col-lg-4'>
            <label className='w-100 d-flex align-items-center flex-column justify-content-center'>
              <input type="file" style={{display:'none'}} />
              <img height={'200px'} width={'200px'} className='mt-5' src={upload2} alt="Project Upload pic" />
            </label>
          </div>
          <div className='col-lg-8'>
            <div className='mb-3'>
              <input className='border rounded p-2 w-100' type="text" placeholder='Project Title' />
            </div>
            <div className='mb-3'>
              <input className='border rounded p-2 w-100' type="text" placeholder='Language Used' />
            </div>
            <div className='mb-3'>
              <input className='border rounded p-2 w-100' type="text" placeholder='Project Github Link' />
            </div>
            <div className='mb-3'>
              <input className='border rounded p-2 w-100' type="text" placeholder='Project Websit Link ' />
            </div>
            <div className='mb-3'>
              <input className='border rounded p-2 w-100' type="text" placeholder='Project Overview' />
            </div>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button variant="success">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
  
}

export default Edit