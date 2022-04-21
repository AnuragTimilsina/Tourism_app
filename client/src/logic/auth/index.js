import { useNavigate } from "react-router-dom";
const useAuth = () => {
  const navigate = useNavigate();
  const checkauth = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  };
  return { checkauth };
};
export default useAuth;
