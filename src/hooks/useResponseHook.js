import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useResponseHook = (axios) => {
  const [is401, set401] = useState(false);
  const navigate = useNavigate();
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (401 === error.response.status || 403 === error.response.status) {
        localStorage.clear();
        navigate("/");
        set401(true);
      }
      return Promise.reject(error);
    }
  );
  return is401;
};

export default useResponseHook;
