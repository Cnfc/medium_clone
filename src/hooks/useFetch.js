import { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

export default url => {
  const baseUrl = "https://conduit.productionready.io/api";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage("token");

  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    const requestoptions = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : ""
        }
      }
    };
    if (!isLoading) {
      return;
    }
    axios(baseUrl + url, requestoptions)
      .then(res => {
        console.log("success", res);
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
        setError(error.response.data);
      });
  }, [isLoading, options, url]);

  return [{ isLoading, response, error }, doFetch];
};