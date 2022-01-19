import React, { useState, useEffect, useRef } from "react";
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
  SettingsButton,
} from "../styled-components/homepage/HomeStyle";
import { Button, Title, Wrapper } from "../styled-components/login/PageStyle";
import { loading, loaded } from "../store/reducers/loading";
import { FaPause, FaPlay } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import Modal from "react-modal";
import {
  FooterStyles,
  MainStyles,
} from "../styled-components/ModalStyles/ModalStyles";
import Select from "react-select";

const min = 60;

const options = [
  { value: 5 * min, label: "5 min" },
  { value: 10 * min, label: "10 min" },
  { value: 15 * min, label: "15 min" },
  { value: 20 * min, label: "20 min" },
  { value: 25 * min, label: "25 min" },
  { value: 30 * min, label: "30 min" },
];

enum Modes {
  WORK = "Work",
  SHORT = "Short break",
  LONG = "Long break",
}

const initialDurations = {
  work: 25 * 60,
  short: 5 * 60,
  long: 30 * 60,
};

export const HomePage = () => {
  const [durations, setdurations] = useState(initialDurations);
  const dispatch = useAppDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(durations.work);
  const [currentMode, setCurrentMode] = useState(Modes.WORK);
  const [numberOfWork, setNumberOfWork] = useState<number>(0);
  const [audio, setaudio] = useState(new Audio("audio/ding.mp3"));
  const [isOpened, setisOpened] = useState(false);
  const [workLength, setworkLength] = useState(initialDurations.work);
  const [shortLenth, setshortLength] = useState(initialDurations.short);
  const [longLenth, setlongLength] = useState(initialDurations.long);

  useEffect(() => {
    audio.volume = 0.1;
  }, []);

  useEffect(() => {
    changeToWork();
  }, [durations]);

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

  const workChange = (e: any) => {
    setworkLength(e.value);
  };

  const shortChange = (e: any) => {
    setshortLength(e.value);
  };

  const longChange = (e: any) => {
    setlongLength(e.value);
  };

  const handleSave = () => {
    setdurations({ work: workLength, short: shortLenth, long: longLenth });
    setisOpened(!isOpened);
  };

  const customStyles = {
    content: {
      maxHeight: "50%",
    },
    overlay: { zIndex: 1000 },
  };

  return (
    <PageStyle>
      <Wrapper>
        <SettingsButton>
          <FiSettings size={30} onClick={() => setisOpened(!isOpened)} />
        </SettingsButton>
        <Modal
          isOpen={isOpened}
          style={{
            content: {
              borderRadius: "2rem",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              height: "90%",
              width: "70%",
            },
            overlay: {
              zIndex: 1000,
            },
          }}
          ariaHideApp={false}>
          <h1 style={{ textAlign: "center" }}>Settings</h1>
          <MainStyles>
            <div>Work length:</div>
            <Select
              onChange={workChange}
              options={options}
              defaultValue={{
                value: workLength,
                label: (workLength / 60).toString() + " min",
              }}
              className="select"
              isSearchable={false}
            />
            <div>Short break length:</div>
            <Select
              onChange={shortChange}
              options={options}
              defaultValue={{
                value: shortLenth,
                label: (shortLenth / 60).toString() + " min",
              }}
              className="select"
              isSearchable={false}
            />
            <div>Long break length:</div>
            <Select
              onChange={longChange}
              options={options}
              defaultValue={{
                value: longLenth,
                label: (longLenth / 60).toString() + " min",
              }}
              className="select"
              isSearchable={false}
            />
          </MainStyles>
          <FooterStyles>
            <div className="cancel" onClick={() => setisOpened(!isOpened)}>
              Cancel
            </div>
            <div className="save" onClick={handleSave}>
              Save
            </div>
          </FooterStyles>
        </Modal>
        <Title key={currentMode}>{currentMode}</Title>
        <TimerWrapper
          key={currentMode + "a"}
          onClick={() => setIsPlaying(!isPlaying)}>
          <CountdownCircleTimer
            key={duration}
            isPlaying={isPlaying}
            duration={duration}
            isLinearGradient={true}
            size={350}
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
                <GradientCircle work={false} size="big">
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
            <GradientCircle work={true} key={i} size="small">
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
