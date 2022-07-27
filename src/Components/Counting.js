import Header from "./Header.js";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Link } from "react-router-dom";



const Counting = () => {
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
            <div className="counting">
                    <div className="login-details">
                    <h2>Hello, Eunice Igho</h2>
                        <div className="end">
                            <p>Hospitality Group - First Service</p>
                            <p>Date: {date} </p>
                        </div>
                        <p>Hope Gallery Wing 1</p>
                    </div>
                <div className="contain">
                        <div className="item">
                            <Form.Label>Row</Form.Label>
                            <Form.Control type="number" placeholder="0" />
                        </div>  

                        <div className="item">
                            <Form.Label>Male</Form.Label>
                            <Form.Control type="number" 
                            placeholder="0"
                            value={male} 
                            onChange={e => setMale(+e.target.value)}/>
                        </div>

                        <div className="item">
                            <Form.Label>Female</Form.Label>
                            <Form.Control type="number" 
                            placeholder="0"
                            value={female}
                            onChange={e => setFemale(+e.target.value)}/>
                        </div> 

                        <div className="item">
                            <Form.Label>Children</Form.Label>
                            <Form.Control type="number" 
                            placeholder="0"
                            value={children}
                            onChange={e => setChildren(+e.target.value)}/>
                        </div>
                    
                        <Button onClick={grandSum}>Compute</Button>

                        <div className="item">
                            <Form.Label>Total Adults</Form.Label>
                            <p className="score" placeholder="0">{adultsTotal}</p>
                        </div>
                            
                        <div className="item">
                            <Form.Label>Grand Total</Form.Label>
                            <p className="score">{sum}</p>
                            </div>
                        
                        <Link to="/">
                            <Button variant="outline-danger">Sign Out</Button>
                        </Link>  
                </div> 
            </div>
    </div>
     );
}
 
export default Counting;