import React, { useRef, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { authService } from "../services/auth.service";
import { login } from "../store/reducers/auth";
import { TOKEN } from "./constants";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { loading, loaded } from "../store/reducers/loading";

import {
  Button,
  Container,
  Icon,
  Info,
  Input,
  InputWrapper,
  LabelInput,
  PageStyle,
  SignUp,
  Title,
  HiddenUsersLink,
  Wrapper,
} from "../styled-components/login/PageStyle";

enum Modes {
  LOGIN = "Login",
  REGISTER = "Register",
}

export const LoginPanel = () => {
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [invalidInput, setInvalidInput] = useState(false);
  const [registrationSucces, setregistrationSucces] = useState(false);
  const [currentMode, setcurrentMode] = useState(Modes.LOGIN);

  const switchMode = () => {
    setInvalidInput(false);
    setregistrationSucces(false);
    setcurrentMode(currentMode === Modes.LOGIN ? Modes.REGISTER : Modes.LOGIN);
    clearInputs();
  };

  const clearInputs = () => {
    loginRef.current!.value = "";
    passwordRef.current!.value = "";
  };

  const handleLogin = () => {
    dispatch(loading());
    authService
      .login(loginRef.current?.value || "", passwordRef.current?.value || "")
      .then((token) => {
        localStorage.setItem(TOKEN, token);
        dispatch(
          login({
            token: token,
            isLogged: true,
          })
        );
      })
      .catch((err) => {
        setInvalidInput(true);
        dispatch(loaded());
      })
      .finally(() => {
        let timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
          dispatch(loaded());
          return clearTimeout(timeout);
        }, 1000);
      });
  };

  const handleRegister = () => {
    if (loginRef.current!.value === "") return;
    if (passwordRef.current!.value === "") return;
    dispatch(loading());
    authService
      .register(loginRef.current?.value || "", passwordRef.current?.value || "")
      .then(() => {
        clearInputs();
        setregistrationSucces(true);
      })
      .catch((err) => {
        setInvalidInput(true);
      })
      .finally(() => dispatch(loaded()));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInvalidInput(false);
    if (currentMode === Modes.LOGIN) handleLogin();
    if (currentMode === Modes.REGISTER) handleRegister();
  };

  return (
    <PageStyle>
      <Wrapper>
        <Title>{currentMode}</Title>
        <Info>
          {invalidInput && currentMode === Modes.LOGIN && (
            <label>Invalid login or password</label>
          )}
          {invalidInput && currentMode === Modes.REGISTER && (
            <label>This username is already taken</label>
          )}
          {registrationSucces && currentMode === Modes.REGISTER && (
            <label className="register">Registered</label>
          )}
        </Info>
        <form
          onSubmit={(e) => handleSubmit(e)}
          onClick={() => setInvalidInput(false)}>
          <InputWrapper>
            <LabelInput>Username</LabelInput>
            <Container>
              <Icon>
                <AiOutlineUser size="25" />
              </Icon>
              <Input
                placeholder="Type your username"
                type="text"
                ref={loginRef}
              />
            </Container>
          </InputWrapper>
          <InputWrapper>
            <LabelInput>Password</LabelInput>
            <Container>
              <Icon>
                <AiFillLock size="25" />
              </Icon>
              <Input
                placeholder="Type your password"
                type="password"
                name="password"
                autoComplete="password"
                ref={passwordRef}
              />
            </Container>
          </InputWrapper>
          <Button>
            <div className="wrapdiv">
              <div className="color"></div>
              <button type="submit">{currentMode}</button>
            </div>
          </Button>
        </form>

        <SignUp>
          {currentMode === Modes.LOGIN && (
            <>
              <span>Sign up using</span>
              <button onClick={switchMode}>sign up</button>
            </>
          )}
          {currentMode === Modes.REGISTER && (
            <>
              <span>Back to login</span>
              <button onClick={switchMode}>Log in</button>
            </>
          )}
        </SignUp>
      </Wrapper>
      <HiddenUsersLink
        href="https://python-small-auth.herokuapp.com/users"
        target="_blank"></HiddenUsersLink>
    </PageStyle>
  );
};
