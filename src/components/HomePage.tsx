import React from "react";
import { useAppDispatch } from "../store/hooks";
import { logout } from "../store/reducers/auth";
import { TOKEN } from "./constants";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

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
      <CountdownCircleTimer
        isPlaying
        duration={10}
        colors={[
          ["#004777", 0.33],
          ["#F7B801", 0.33],
          ["#A30000", 0.33],
        ]}>
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
      <button onClick={handleLogout}>elo</button>
    </>
  );
};
