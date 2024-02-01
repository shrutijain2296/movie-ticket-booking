// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

// function Header() {
//   return (
//     <Navbar expand="lg" className="navbar" style = {{ backgroundColor: '#C10D4C'}}>
//         <Container fluid>
//             <Navbar.Brand href="/homepage" style = {{ color: '#fff', fontWeight: '600', fontSize: '24px'}}>Movie Time.</Navbar.Brand>           
//         </Container>
//     </Navbar>
//   )
// }

// export default Header
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="navbar" style={{ backgroundColor: '#C10D4C' }}>
      <Container fluid>
        <Navbar.Brand href="/homepage" style={{ color: '#fff', fontWeight: '600', fontSize: '24px' }}>Movie Time.</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
