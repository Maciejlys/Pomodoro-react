import React, { useRef, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { authService } from "../services/auth.service";
import { login } from "../store/reducers/auth";
import { TOKEN } from "./constants";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";

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
  Wrapper,
} from "../styled-components/login/PageStyle";
import { Loader } from "./Loader";

enum Modes {
  LOGIN = "Login",
  REGISTER = "Register",
}

export const LoginPanel = () => {
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const [registrationSucces, setregistrationSucces] = useState(false);
  const [currentMode, setcurrentMode] = useState(Modes.LOGIN);

  const switchMode = () => {
    setInvalidInput(false);
    setregistrationSucces(false);
    setcurrentMode(currentMode == Modes.LOGIN ? Modes.REGISTER : Modes.LOGIN);
    clearInputs();
  };

  const clearInputs = () => {
    loginRef.current!.value = "";
    passwordRef.current!.value = "";
  };

  const handleLogin = () => {
    setIsLoading(true);
    authService
      .login(loginRef.current?.value || "", passwordRef.current?.value || "")
      .then((token) => {
        localStorage.setItem(TOKEN, token);
        console.log(token);

        dispatch(
          login({
            token: token,
            isLogged: true,
          })
        );
      })
      .then(() => setIsLoading(false))
      .catch((err) => {
        setInvalidInput(true);
        setIsLoading(false);
      });
  };

  const handleRegister = () => {
    if (loginRef.current!.value == "") return;
    if (passwordRef.current!.value == "") return;
    setIsLoading(true);
    authService
      .register(loginRef.current?.value || "", passwordRef.current?.value || "")
      .then(() => {
        clearInputs();
        setregistrationSucces(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setInvalidInput(true);
        setIsLoading(false);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInvalidInput(false);
    if (currentMode === Modes.LOGIN) handleLogin();
    if (currentMode === Modes.REGISTER) handleRegister();
  };

  return (
    <PageStyle>
      {isLoading && <Loader />}
      <Wrapper>
        <Title>{currentMode}</Title>
        <Info>
          {invalidInput && currentMode == Modes.LOGIN && (
            <label>Invalid login or password</label>
          )}
          {invalidInput && currentMode == Modes.REGISTER && (
            <label>This username is already taken</label>
          )}
          {registrationSucces && currentMode == Modes.REGISTER && (
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
                name="login"
                autoComplete="login"
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
    </PageStyle>
  );
};
