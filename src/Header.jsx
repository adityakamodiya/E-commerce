import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from './components/Search';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>  
    
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>LOGO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/about'>about</Link></Nav.Link>
            <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
            <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
      
          </Nav>
      <Search></Search>
          {/* <input type="text" /> */}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;