import Header from "./Header.js";
import Footer from "./Footer.js";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { useState } from "react";
//import Dropdown from 'react-dropdown';
//import 'react-dropdown/style.css';
//import { Form, Button} from "react-bootstrap";

const Counting = () => {
    //setting row dropdown- removed mot necessary
    // const options = [
    //     1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
    //   ];
    //   console.log(options[0])
    //   const defaultOption = options[0]  ;
    //   console.log(defaultOption);

    //setting current date
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    //using useState to track changes made to the attendance.
     const [male, setMale] = useState("");
     const [female, setFemale] = useState("");
     const [children, setChildren] = useState("");
     const [sum, setSum] = useState(0);
     const [adultsTotal, setadultsTotal] = useState(0);

     function grandSum () {
        setSum(male + female + children)
        setadultsTotal(male + female)
     }
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

                <Stack gap={4} className="col-md-4 mx-auto">
                    
                    <div className="flex">
                        <Form.Label className='label'>Row</Form.Label>
                        {/* <Dropdown 
                        className="dropdown"
                        controlClassName='myControlClassName'
                        options={options} 
                        //{onChange={onSelect} 
                        value= {options[0]}
                        minMenuHeight= "35"
                        height= "35"/> */}
                         <Form.Control type="number" placeholder="0" />
                    </div>  

                    <div className="flex">
                        <Form.Label className='label'>Male</Form.Label>
                        <Form.Control type="number" 
                        placeholder="0"
                        value={male} 
                        onChange={e => setMale(+e.target.value)}/>
                    </div>

                    <div className="flex">
                        <Form.Label className='label'>Female</Form.Label>
                        <Form.Control type="number" 
                        placeholder="0"
                        value={female}
                        onChange={e => setFemale(+e.target.value)}/>
                    </div> 

                    <div className="flex">
                        <Form.Label className='label'>Children</Form.Label>
                        <Form.Control type="number" 
                        placeholder="0"
                        value={children}
                        onChange={e => setChildren(+e.target.value)}/>
                    </div>
                  
                    <div className="flex">
                    <Form.Label className='sumLayout' >Total Adults:<span className="boxed" placeholder="0">{adultsTotal}</span></Form.Label>
                    <Form.Label>Grand Total:<span className="boxed">{sum}</span></Form.Label>
                   </div>
                    
                    <Button variant="outline-danger" onClick={grandSum}>Compute</Button>
                    
                    <Button variant="outline-danger">Sign Out</Button>
                
                </Stack>
            </Container>
            <Footer />
        </div>
     );
}
 
export default Counting;