import React from "react";
import {Nav, Navbar, Offcanvas, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";


function NavBara() {

  const navigate = useNavigate();

  return (
    <div id="nav">
      <Navbar fixed="top" bg="dark" variant="dark" className="container mx-auto my-3 py-3 rounded-4 shadow" expand={false}>
        <Container fluid>
          <Link to={"/"}>
            <img src="../img/logo5.png" alt="카카오지도" id="logo" className="me-3" />
          </Link>
          <div className="d-flex" style={styles.move}>
            <Nav.Link href="/ao" style={{color:"white"}}>마크</Nav.Link>
            <Nav.Link href="/bo" style={{color:"white"}}>이미지마크</Nav.Link>
            <Nav.Link href="/co" style={{color:"white"}}>이미지마크2</Nav.Link>
            <Nav.Link href="/do" style={{color:"white"}}>On클릭</Nav.Link>
            <Nav.Link href="/eo" style={{color:"white"}}>Sweetalert</Nav.Link>
            <Nav.Link href="/fo" style={{color:"white"}}>Reactstrap</Nav.Link>
            <Nav.Link href="/go" style={{color:"white"}}>공지사항</Nav.Link>
            <Nav.Link href="/ho" style={{color:"white"}}>공지사항</Nav.Link>
            <Nav.Link href="/io" style={{color:"white"}}>공지사항</Nav.Link>
          </div>
          <Navbar.Toggle className="border-0" aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            backdrop="false"
          >
            <Offcanvas.Header closeButton>
              <Link to={"/"}>
                <img src="../img/logo4.png" alt="카카오지도" id="logo" className="me-3" 
                style={{height:"30px"}}/>
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="border-bottom" href="/post">공지사항</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
  
}
const styles = {
    move : {
      position: 'absolute',
      right: '100px'
  },
}
  


export default NavBara;
