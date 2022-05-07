import "./loginstyle.sass";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { BaseUrl } from "../../../common/config/httpsConfig";
import { GrFormAdd } from "react-icons/gr";
import { TiTick } from "react-icons/ti";

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
  const [image, setImage] = useState();

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
    let formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);
    formdata.append("password2", password2);
    formdata.append("email", email);
    formdata.append("address", address);
    formdata.append("profile_pic", image);
    setusernameError("");
    setpasswordError("");
    setpassword2Error("");
    setemailError("");
    axios.post(BaseUrl + "tourists/api/register/", formdata).then((res) => {
      if (Object.keys(res.data.error).length !== 0) {
        if (res.data.error.username) {
          setusernameError(res.data.error.username[0]);
        } else if (res.data.error.password) {
          setpasswordError(res.data.error.password[0]);
        } else if (res.data.error.password2) {
          setpasswordError(res.data.error.password2[0]);
        } else if (res.data.error.email) {
          setemailError(res.data.error.email[0]);
        }
      } else {
        console.log("here");
        localStorage.setItem("token", res.data.token);
        console.log(res.data.token);
        navigate("/");
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
          <p style={{ color: "red" }}> {loginError} </p>

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
        </div>
        <div className="Register">
          <h1>Signup</h1>
          <div className="inputImage">
            <CgProfile size={100} />
            <div className="smallIcon">
              {!image ? <GrFormAdd size={18} /> : <TiTick size={18} />}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.files);
              }}
            />
          </div>
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
