import Header from "./Header.js";
import Footer from "./Footer.js";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
//import { Form, Button} from "react-bootstrap";

const Counting = () => {
    //setting row dropdown
    const options = [
        1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
      ];
      console.log(options[0])
      const defaultOption = options[0]  ;
      console.log(defaultOption);
      //setting date
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return ( 
        <div>
            <Header />
            <Container className="counting">
                <div className="login-details">
                    <div className="flex end">
                        <h2>Hello, Eunice Igho</h2>
                        <p>Date: {date} </p>
                    </div>
                    <p>Hospitality Group - First Service</p>
                    <p>Hope Gallery Wing 1</p>
                </div>
                <Stack gap={4} className="col-md-5 mx-auto">
                    
                    <div className="flex">
                        <Form.Label className='label'>Row</Form.Label>
                        <Dropdown 
                        className="dropdown"
                        controlClassName='myControlClassName'
                        options={options} 
                        //{onChange={onSelect} 
                        value= {options[0]}
                        minMenuHeight= "35"
                        height= "35"/>
                    </div>   
                    <div className="flex">
                        <Form.Label className='label'>Male</Form.Label>
                        <Form.Control type="number"  />
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
                    <Button variant="outline-danger">Submit</Button>
                    <Button variant="outline-danger">Sign Out</Button>
                
                </Stack>
            </Container>
            <Footer />
        </div>
     );
}
 
export default Counting;