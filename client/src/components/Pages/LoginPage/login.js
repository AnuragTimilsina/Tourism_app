import "./loginstyle.sass";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password2, setpassword2] = useState("");
  const [floatingClass, setFloatingClass] = useState(
    "FloatingComponentActive FloatingComponent"
  );
  let history = useNavigate();

 
  
  return (
    

    <div className="LoginPage">
      <div className="Components">
        <div className="Login">
          <h1>Login</h1>
          <input
            type="textbox"
            placeholder="Username"
            onChange={(event) => {
              setusername(event.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setpassword(event.target.value);
            }}
          />
          <p className="forgot">
            If you have forgotten your password,
            <Link className="link" to="/forget">
              click here!
            </Link>{" "}
          </p>
          <p style={{ color: "red" }}> {message} </p>
          {/* <Link to="/"> */}
          <button className="sumbit" >
            Login
          </button>
          <br />
          <h1 className="OR">OR</h1>
          <p className="forgot">
            If you want to login as Admin,
            <Link className="link" to="/admin">
              click here!
            </Link>{" "}
          </p>
        
          <div>
            {" "}
           
          </div>
          <div>
          
          </div>
        </div>
        <div className="Register">
          <h1>Signup</h1>
          <input
            type="textbox"
            placeholder="Name"
            onChange={(event) => {
              setname(event.target.value);
            }}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            onChange={(event) => {
              setemail(event.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setpassword(event.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(event) => {
              setpassword2(event.target.value);
            }}
          />
          <p style={{ color: "red" }}> {message} </p>

          <button  className="sumbit">
            Continue
          </button>
        </div>
        <div
          className={floatingClass}
          onClick={() => {
            if (floatingClass === "FloatingComponent") {
              setFloatingClass("FloatingComponentActive FloatingComponent");
            } else {
              setFloatingClass("FloatingComponent");
            }
          }}
        >
          {floatingClass === "FloatingComponent" ? (
            <div>
              <h1>LOGIN </h1>
              <h1>INTO</h1>
              <h1>TOURIST APP</h1>
              <button>Login now</button>
            </div>
          ) : (
            <div>
              <h1>SIGNUP</h1>
              <h1>INTO</h1>
              <h1>TOURIST APP</h1>
              <button>Register now</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Login;
