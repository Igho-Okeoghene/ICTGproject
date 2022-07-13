import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./logo.png"

const Header = () => {
    return ( 
        <Navbar bg="light" variant="light" className='nav'>
        <Container>
            <img
              alt="winners logo"
              src={Logo}
              width="50"
              height="50" 
            />
            LIVING FAITH CHURCH WORLDWIDE
        </Container>
      </Navbar>
     );
}
 
export default Header;