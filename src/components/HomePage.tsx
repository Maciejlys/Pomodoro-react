import React from "react";
import { useAppDispatch } from "../store/hooks";
import { logout } from "../store/reducers/auth";
import { TOKEN } from "./constants";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem(TOKEN);
  };

  return (
    <>
      <div>HomePage</div>
      <button onClick={handleLogout}>elo</button>
    </>
  );
};
