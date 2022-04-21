import "./loginstyle.sass";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../../common/config/httpsConfig";

function Login() {
  //login states
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //loginerrors
  const [LoginusernameError, setLoginusernameError] = useState("");
  const [LoginpasswordError, setLoginpasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  //signup states
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [address, setAddress] = useState("");
  const [password2, setpassword2] = useState("");

  //signuperrors
  const [usernameError, setusernameError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [password2Error, setpassword2Error] = useState("");
  const [emailError, setemailError] = useState("");

  const [floatingClass, setFloatingClass] = useState(
    "FloatingComponentActive FloatingComponent"
  );

  let navigate = useNavigate();

  function loginData() {
    setLoginusernameError("");
    setLoginError("");
    setLoginpasswordError("");
    axios
      .post(BaseUrl + "tourists/api/authenticate/", {
        username: loginUsername,
        email: loginUsername,
        password: loginPassword,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((e) => {
        console.log(e.response);
        if (e.response.data.non_field_errors) {
          setLoginError(e.response.data.non_field_errors[0]);
        } else if (e.response.data.username) {
          setLoginusernameError(e.response.data.username[0]);
        } else if (e.response.data.password) {
          setLoginpasswordError(e.response.data.password[0]);
        }
      });
  }

  function signupData() {
    setusernameError("");
    setpasswordError("");
    setpassword2Error("");
    setemailError("");
    axios
      .post(BaseUrl + "tourists/api/register/", {
        username,
        password,
        email,
        password2,
        address,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e.response);
        if (e.response.data.username[0]) {
          setusernameError(e.response.data.username[0]);
        } else if (e.response.data.password[0]) {
          setpasswordError(e.response.data.password[0]);
        } else if (e.response.data.password2[0]) {
          setpasswordError(e.response.data.password2[0]);
        } else if (e.response.data.email[0]) {
          setpasswordError(e.response.data.email[0]);
        }
      });
  }

  return (
    <div className="LoginPage">
      <div className="Components">
        <div className="Login">
          <h1>Login</h1>
          <p style={{ color: "red", fontSize: "12px" }}>{LoginusernameError}</p>
          <input
            type="textbox"
            placeholder="Username or Email"
            onChange={(event) => {
              setLoginUsername(event.target.value);
            }}
          />
          <p style={{ color: "red", fontSize: "12px" }}>{LoginpasswordError}</p>
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <p className="forgot">
            If you have forgotten your password,
            <Link className="link" to="/forget">
              click here!
            </Link>{" "}
          </p>
          <p style={{ color: "red" }}> {loginError} </p>
          {/* <Link to="/"> */}
          <button className="sumbit" onClick={loginData}>
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

          <div> </div>
          <div></div>
        </div>
        <div className="Register">
          <h1>Signup</h1>
          <p style={{ color: "red", fontSize: "12px" }}>{usernameError}</p>
          <input
            type="textbox"
            placeholder="Name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            required
          />
          <p style={{ color: "red", fontSize: "12px" }}>{emailError}</p>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(event) => {
              setemail(event.target.value);
            }}
            required
          />
          <input
            type="text"
            placeholder="Address"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            required
          />
          <p style={{ color: "red", fontSize: "12px" }}>{passwordError}</p>
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setpassword(event.target.value);
            }}
            required
          />
          <p style={{ color: "red", fontSize: "12px" }}>{password2Error}</p>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(event) => {
              setpassword2(event.target.value);
            }}
          />

          <button className="sumbit" onClick={signupData}>
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
