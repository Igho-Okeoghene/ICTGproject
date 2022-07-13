import Container from 'react-bootstrap/Container';
import { Form, Button} from "react-bootstrap";

const Login = () => {
    // to set the input field to accept alphanumeric characters
    // onChangeAlphaNumericInput(e) {
    //     const value = e.target.value;
    //     const regex = /^[0-9a-zA-Z(\-)]+$/; //this will admit letters, numbers and dashes
    //     if (value.match(regex) || value === "") {
    //       this.setState({ inputValue: value });
    //     }
    //   }
    // onBlurValidateFormat(e) {
    //     const value = e.target.value;
    //     const regex = /([a-zA-Z]{4})+-([0-9]{3})+([a-zA-Z]{2})+$/g;
    //     if (!value.match(regex)) {
    //       //Show an error message or put a warning text under the input and set flag to prevent form submit
    //     }
    //   }
    return ( 
        <Container className='login'>
            <div className='details'>
            <h1>Welcome</h1>
            <h2>Counting Portal</h2>
            <Form>
                <Form.Group className="mb-3" controlId="unitId">
                <Form.Label className='label'>Unit ID Card</Form.Label>
                <Form.Control type="text" placeholder="Enter unit ID Card" />
                <div className="d-grid">
                <Button variant="danger" size="lg">
                Login
                </Button>
                </div>
                </Form.Group>
            </Form>
            </div>
            <div className='service'>
                <h2 className='center'>"Seek ye first the kingdom of God and his righteousness and every other thing shall be added unto you" <br/>- Matthew 6:33</h2>
            </div>
        </Container>
     );
}
 
export default Login;