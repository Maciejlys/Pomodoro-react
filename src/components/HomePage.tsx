import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { logout } from "../store/reducers/auth";
import { TOKEN } from "./constants";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { formatTime } from "../utils/formatTime";
import {
  PageStyle,
  GradientCircle,
  TimerText,
  TimerWrapper,
  WorkDots,
  HiddenDebugButton,
} from "../styled-components/homepage/HomeStyle";
import { Button, Title, Wrapper } from "../styled-components/login/PageStyle";
import { loading, loaded } from "../store/reducers/loading";
import { FaPause, FaPlay } from "react-icons/fa";

enum Modes {
  WORK = "Work",
  SHORT = "Short break",
  LONG = "Long break",
}

enum DebugMode {
  PROD = "prod",
  DEBUG = "debug",
}

const min = 60;

const initialDurations = {
  work: 25 * min,
  short: 5 * min,
  long: 30 * min,
};

const debugDurations = {
  work: 1,
  short: 2,
  long: 3,
};

export const HomePage = () => {
  const [durations, setdurations] = useState(initialDurations);
  const dispatch = useAppDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(durations.work);
  const [currentMode, setCurrentMode] = useState(Modes.WORK);
  const [numberOfWork, setNumberOfWork] = useState<number>(0);
  const [audio, setaudio] = useState(new Audio("audio/ding.mp3"));
  const [mod, setmod] = useState(DebugMode.PROD);

  useEffect(() => {
    audio.volume = 0.1;
  }, []);

  useEffect(() => {
    setdurations(debugDurations);
    if (mod == DebugMode.DEBUG) changeToShort();
  }, [mod]);

  const handleLogout = () => {
    dispatch(loading());
    dispatch(logout());
    localStorage.removeItem(TOKEN);
    let timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      dispatch(loaded());
      return clearTimeout(timeout);
    }, 500);
  };

  const changeToWork = () => {
    setCurrentMode(Modes.WORK);
    setDuration(durations.work);
    if (numberOfWork === 4) setNumberOfWork(0);
  };

  const changeToShort = () => {
    setCurrentMode(Modes.SHORT);
    setDuration(durations.short);
  };

  const changeToLong = () => {
    setCurrentMode(Modes.LONG);
    setDuration(durations.long);
  };
  return (
    <PageStyle>
      <HiddenDebugButton
        onClick={() => {
          setmod(DebugMode.DEBUG);
        }}
      />
      {mod === DebugMode.DEBUG && <div>Debug mode</div>}
      <Wrapper>
        <Title key={currentMode}>{currentMode}</Title>
        <TimerWrapper
          key={currentMode + "a"}
          onClick={() => setIsPlaying(!isPlaying)}>
          <CountdownCircleTimer
            key={duration}
            isPlaying={isPlaying}
            duration={duration}
            isLinearGradient={true}
            size={400}
            trailColor="transparent"
            strokeWidth={30}
            onComplete={() => {
              setIsPlaying(false);
              audio.play();
              switch (currentMode) {
                case Modes.SHORT:
                  changeToWork();

                  break;
                case Modes.WORK:
                  const newNumberOfWork = numberOfWork + 1;
                  setNumberOfWork(newNumberOfWork);
                  newNumberOfWork % 4 === 0 ? changeToLong() : changeToShort();
                  break;
                case Modes.LONG:
                  changeToWork();
              }
              return [true, 0];
            }}
            colors={[
              ["#fc00ff", 0],
              ["#00dbde", 0.5],
            ]}>
            {({ remainingTime }) => {
              return (
                <GradientCircle work={false} size={150}>
                  <div className="wrapdiv">
                    <div className="color"></div>
                    <div className="button">
                      {isPlaying ? <FaPause size="50" /> : <FaPlay size="50" />}
                    </div>
                  </div>
                  <TimerText>{formatTime(remainingTime)}</TimerText>
                </GradientCircle>
              );
            }}
          </CountdownCircleTimer>
        </TimerWrapper>
        <WorkDots>
          {[...Array(numberOfWork)].map((x, i) => (
            <GradientCircle work={true} key={i} size={50}>
              <div className="wrapdiv">
                <div className="color"></div>
                <div className="button"></div>
              </div>
            </GradientCircle>
          ))}
        </WorkDots>
        <Button>
          <div className="wrapdiv">
            <div className="color"></div>
            <button onClick={handleLogout}>Log out</button>
          </div>
        </Button>
      </Wrapper>
    </PageStyle>
  );
};
