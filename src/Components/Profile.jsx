import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import upload from '../assets/upload.png'
function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <div className='border rounded p-2'>
      <div className='d-flex justify-content-between'>
        <h2>Profile</h2>
        <button onClick={() => setOpen(!open)} className='btn btn-outline-warning'><i className='fa-solid fa-caret-down'></i> </button>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text" className='text-center'>
        <form>
          <label>
            <input type="file" style={{ display: 'none' }} />
            <img width={'200px'} height={'200px'} className='img-fluid rounded-circle' src={upload} alt="upload profile pic" />
          </label>
         
            <div className='mb-3'>
            <input type="text" className='rounded p-1 w-75'placeholder='Enter your Github Link Here' />
            </div>
            <div className='mb-3'>
            <input type="text" className='rounded p-1 w-75'placeholder='Enter your Linkedin Link Here' />
            </div>
           <div className='mb-3 d-grid w-75 mx-auto'>
            <button className='btn btn-warning'>Update</button>
           </div>
          </form>
        </div>
      </Collapse>
    </div>
  )
}

export default Profile