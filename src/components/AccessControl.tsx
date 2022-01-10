import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { login, logout, selectAuth } from "../store/reducers/auth";
import { loading, loaded } from "../store/reducers/loading";
import { PATH, TOKEN } from "./constants";
import { authService } from "../services/auth.service";

export const AccessControl: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const currentState = useAppSelector(selectAuth);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN) || "";
    if (token === "") return;
    dispatch(loading());
    authService
      .verify(token)
      .then(() => {
        dispatch(
          login({
            token,
            isLogged: true,
          })
        );
      })
      .catch(() => {
        localStorage.removeItem(TOKEN);
        dispatch(logout());
      })
      .finally(() => dispatch(loaded()));
  }, [currentState.auth, dispatch]);

  if (pathname == "/*") {
    return <Navigate to={PATH.LOGIN} />;
  }
  if (pathname !== PATH.LOGIN && !currentState.auth.isLogged) {
    return <Navigate to={PATH.LOGIN} />;
  }
  if (currentState.auth.isLogged && pathname === PATH.LOGIN) {
    return <Navigate to={PATH.HOME} />;
  }

  return <>{children}</>;
};
