import { useEffect, useContext } from "react";

import useFetch from "../../hooks/useFetch";
import { CurrentUserContext } from "../../context/currentUser";
import useLocalStorage from "../../hooks/useLocalStorage";

const CurrentUserChecker = ({ children }) => {
  const [{ response }, doFetch] = useFetch("/user");
  const [, dispatch] = useContext(CurrentUserContext);
  const [token] = useLocalStorage("token");

  useEffect(() => {
    if (!token) {
      dispatch({ type: "SET_UNAUTH" });
      return;
    }

    doFetch();
    dispatch({ type: "LOADING" });
  }, [token, dispatch, doFetch]);

  useEffect(() => {
    if (!response) {
      return;
    }

    dispatch({ type: "SET_AUTH", payload: response.user });
  }, [response, dispatch]);

  return children;
};
export default CurrentUserChecker;
