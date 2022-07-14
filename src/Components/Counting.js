import Header from "./Header.js";
import Footer from "./Footer.js";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
//import { Form, Button} from "react-bootstrap";

const Counting = () => {
    return ( 
        <div>
            <Header />
            <Container className="counting">
                <div className="login-details">
                    <div className="flex end">
                        <h2>Hello, Eunice Igho</h2>
                        <p>Date: 14/07/22</p>
                    </div>
                    <p>Hospitality Group - First Service</p>
                    <p>Hope Gallery Wing 1</p>
                </div>
                <Stack gap={4} className="col-md-5 mx-auto">
                    
                    <div className="flex">
                        <Form.Label className='label'>Row</Form.Label>
                        <Form.Control type="number" />
                    </div>   
                    <div className="flex">
                        <Form.Label className='label'>Male</Form.Label>
                        <Form.Control type="number" />
                    </div>
                    <div className="flex">
                        <Form.Label className='label'>Female</Form.Label>
                        <Form.Control type="number" />
                    </div>
                    <div className="flex">
                        <Form.Label className='label'>Children</Form.Label>
                        <Form.Control type="number" />
                    </div>
                    <div className="flex">
                        <Form.Label className='label'>Total:</Form.Label>
                        <Form.Control type="number" />
                    </div>
                    <div className="vr" />
                    <Button variant="outline-danger">Submit</Button>
                    <Button variant="outline-danger">Sign Out</Button>
                
                </Stack>
            </Container>
            <Footer />
        </div>
     );
}
 
export default Counting;