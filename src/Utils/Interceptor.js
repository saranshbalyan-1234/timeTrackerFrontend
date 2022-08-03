import axios from "axios";
import { message } from "antd";
import { api_base_url } from "./constants";
import { useNavigate } from "react-router-dom";

export default function Interceptor({ children }) {
  const navigate = useNavigate();
  axios.interceptors.request.use((request) => {
    request.url.includes(api_base_url)
      ? (request.headers.Authorization = `Bearer ${localStorage.getItem(
          "token"
        )}`)
      : (request.headers.Authorization = JSON.parse(
          localStorage.getItem("appToken")
        )?.value);

    return request;
  });
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      console.log("errorResponse", err.response);
      if (err.response.data.message == "Unauthenticated.") {
        localStorage.clear();
        navigate("/login");
        message.error("Please Login Again, Token Expired");
        return err.response;
      }
    }
  );

  return <>{children}</>;
}
