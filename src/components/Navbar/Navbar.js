import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../images/logo.png"

function Header() {
  return (
    <Navbar expand="lg" className="navbar" style = {{ backgroundColor: '#C10D4C'}}>
        <Container fluid>
            <div className = "nav-content">
                <img src = {logo } alt = "Movie" style = {{ width: "40px", height: "40px"}}/>                
            </div>
            <Navbar.Brand href="/homepage" style = {{ color: '#fff', fontWeight: '600', fontSize: '24px'}}>Movie Time.</Navbar.Brand>           
        </Container>
    </Navbar>
  )
}

export default Header