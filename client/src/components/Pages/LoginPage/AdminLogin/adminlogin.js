import "./adminlogin.sass";
import { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../../../common/config/httpsConfig";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [message, setMessage] = useState("");

  function loginData() {
    setUsernameError("");
    setpasswordError("");
    setMessage("");
    axios
      .post(BaseUrl + "agencies/api/authenticate/", {
        username,
        password,
      })
      .then((res) => {
        if (res.data.Error) {
          setMessage(res.data.Error);
        } else {
          localStorage.setItem("agencyToken", res.data.token);
          navigate("/agencyhome");
        }
      })
      .catch((e) => {
        if (e.response.data.non_field_errors) {
          setMessage(e.response.data.non_field_errors[0]);
        } else if (e.response.data.username) {
          setUsernameError(e.response.data.username.toString());
        } else if (e.response.data.password) {
          setpasswordError(e.response.data.password.toString());
        }
      });
  }

  return (
    <div className="login">
      <h1>Login As Agency</h1>
      <p style={{ color: "red", fontSize: "12px" }}>{usernameError}</p>
      <input
        type="textbox"
        placeholder="Username"
        onChange={(event) => {
          setusername(event.target.value);
        }}
      />
      <p style={{ color: "red", fontSize: "12px" }}>{passwordError}</p>
      <input
        type="password"
        placeholder="Password"
        onChange={(event) => {
          setpassword(event.target.value);
        }}
      />
      <p style={{ color: "red" }}> {message} </p>

      <button className="sumbit" onClick={loginData}>
        Continue
      </button>
    </div>
  );
}
export default AdminLogin;
