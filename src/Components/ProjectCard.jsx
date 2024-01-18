import React,{useState} from 'react'
import { Card ,Modal,Row,Col} from 'react-bootstrap'
function ProjectCard() {
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Card style={{ width: '25rem' }} onClick={handleShow}>
      <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20201028/pngtree-abstract-technology-background-technical-electric-image_443494.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img className='img-fluid' src="https://png.pngtree.com/thumb_back/fh260/background/20201028/pngtree-abstract-technology-background-technical-electric-image_443494.jpg" alt="Project Image" />
            </Col>
            <Col sm={12} md={6}>
              <h2 className="fw-bolder text-warning">Title</h2>
              <p>Project Overview: <span className='fw-bolder'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ratione corrupti ipsa quas totam eveniet id? Recusandae in alias, accusantium adipisci dignissimos dolores tempore ut deleniti rerum unde culpa voluptate?</span></p>
              <p>Language Used: <span className="fw-bolder text-danger">HTML,CSS,JS</span></p>
            </Col>
          </Row>
          <div className='mt-3'>
              <a href="" target='_blank' style={{cursor:'pointer',color:'black'}}><i style={{height:'34px'}} className='fa-brands fa-github fa-2x'></i></a>
              <a href="" target='_blank' style={{cursor:'pointer',color:'black'}} className='ms-5'><i style={{height:'34px'}} className='fa-solid fa-link fa-2x'></i></a>

          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard