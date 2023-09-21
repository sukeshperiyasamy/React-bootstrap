import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css"; 

function BasicExample() {
  return (
    <Navbar expand="lg"   className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h2 className="text-danger" ><span ><i className="bi bi-fingerprint"></i>Mj Sports Wear</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link href="#home" className="fw-bold">Home</Nav.Link>
            <Nav.Link href="#about" className="fw-bold">about</Nav.Link>
            <Nav.Link href="#product" className="fw-bold">product</Nav.Link>
            <Nav.Link href="#payment" className="fw-bold">payment</Nav.Link>
            <Nav.Link href="#contact us" className="fw-bold">contact us</Nav.Link>
           
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;