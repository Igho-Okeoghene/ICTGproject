import { useState } from 'react';

import logo from "./images/logo.png";
const Login = () => {

    const [id, setId] = useState("");

    return ( 
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
                <button>Login</button>
            </form>
        </div>
        </div>
     );
}
 
export default Login;