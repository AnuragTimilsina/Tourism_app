import './adminlogin.sass'
import { useState } from 'react';


function AdminLogin() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [message, setMessage] = useState('');
    

   
    return (
        
        <div className="login">
            <h1>Login As Service</h1>
            <input
                type="textbox"
                placeholder="Username"
                onChange={(event) => {
                    setusername(event.target.value)
                }} />
            <input
                type="password"
                placeholder="Password"
                onChange={(event) => {
                    setpassword(event.target.value)
                }} />
            <p style={{ color: "red" }}> {message} </p>
            
            <button className="sumbit">Continue</button>
            
        </div>
        
    )
}
export default AdminLogin;