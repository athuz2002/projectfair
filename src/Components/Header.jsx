import React from 'react'
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

function Header({insideDashBoard}) {
  return (
    <>
    <Navbar style={{width:"100%",backgroundColor:'#90ee90',position:'fixed',top:'0px',zIndex:5}} 
    className="">
        <Container>
          <Navbar.Brand href="/" className='text-light'><i class="fa-solid fa-hands-holding-circle"></i> Projects Fair</Navbar.Brand>
          {
            insideDashBoard&&
            <div className='ms-auto'>
              <button style={{textDecoration:'none'}} className='btn btn-link text-light fw-boldr'>
                <i className='fa-solid fa-gear me-2'></i>Logout</button>

            </div>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header