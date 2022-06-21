import { useState } from 'react';
import altar from "./images/altar.png"
import logo from "./images/logo.png";
const Login = () => {

    const [id, setId] = useState("");

    return ( 
        < div className="container">
            <div className='boxed'>
                <img src={altar} alt="winners altar" className="altar"/>
            </div>
        <div className="box">
            <div className="header">
                <img src={logo} alt="winners logo" className="logo" />
            </div>
            <div className="body">
                <h1>Welcome</h1>
                <p>Counting Portal</p>

                <form>
                    <label>Unit ID Card:
                        <input
                        type="text" 
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Enter unit ID card"
                        />
                    </label>
                    <input
                    type="submit"
                    value="Login"
                    className='button'
                    />
                </form>
            </div>
            <div className='bottom'>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                </ul>
                <p>2022 Living Faith Church</p>
            </div>
        </div>
        
    </div>
     );
}
 
export default Login;