import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './style.css'

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" className="navbar" >
      <Container>
        <Navbar.Brand><Link to="/" className='nav-link' >e-Client</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/usuarios" className='nav-link'>Página Inicial</Link>
            <Link to="/clientes" className='nav-link'>Clientes</Link>
            <Link to="/cats" className='nav-link'>HTTP Cats</Link>
            <Link to='/dogs' className='nav-link'>Random Dogs</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;