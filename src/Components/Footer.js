import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
const Footer = () => {
    return ( 
        <Navbar bg="light" variant="light" fixed="bottom">
        <Container>
          <Nav className="me-auto small">
            <Nav.Link href="#">Privacy Policy</Nav.Link>
            <Nav.Link href="#">Terms of Use</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     );
}
 
export default Footer;