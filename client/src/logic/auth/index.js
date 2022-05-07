import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../../common/config/httpsConfig";
import axios from "axios";
const useAuth = () => {
  const navigate = useNavigate();
  const checkauth = () => {
    axios
      .post(BaseUrl + "tourists/api/verifytoken/", {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        if (res.data.token_verified !== true) {
          navigate("/login");
        }
      })
      .catch(() => {
        navigate("/login");
      });
  };
  const checkAgencyAuth = () => {
    axios
      .post(BaseUrl + "agencies/api/verifyagencytoken/", {
        token: localStorage.getItem("agencyToken"),
      })
      .then((res) => {
        if (res.data.token_verified !== true) {
          navigate("/admin");
        }
      })
      .catch(() => {
        navigate("/admin");
      });
  };
  return { checkauth, checkAgencyAuth };
};
export default useAuth;
