import styled from "styled-components";

export const PageStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  input {
    outline: none;
    border: none;
  }
  button {
    outline: none !important;
    border: none;
    background: transparent;
  }

  button,
  input {
    overflow: visible;
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 15rem;
  max-width: 30rem;
  background: #fff;
  border-radius: 2rem;
  overflow: hidden;
  padding: 2rem;
  animation: fadein 5s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Title = styled.span`
  display: block;
  font-size: 39px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 2rem;
  animation: fadein 2s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid #d9d9d9;
  margin-bottom: 23px;
`;

export const Input = styled.input`
  font-size: 16px;
  color: #333333;
  line-height: 1.2;
  display: block;
  width: 100%;
  height: 55px;
  background: transparent;
  padding: 0 7px 0 10px;
`;

export const LabelInput = styled.span`
  font-size: 14px;
  color: #333333;
  line-height: 1.5;
  padding-left: 7px;
`;

export const Button = styled.div`
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .wrapdiv {
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 25px;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0 5px 30px 0px rgb(3 216 222 / 20%);
    -moz-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
    -webkit-box-shadow: 0 5px 30px 0px rgb(3 216 222 / 20%);
    -o-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
    -ms-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
  }

  .color {
    position: absolute;
    z-index: -1;
    width: 300%;
    height: 100%;
    background: #a64bf4;
    background: -webkit-linear-gradient(
      right,
      #00dbde,
      #fc00ff,
      #00dbde,
      #fc00ff
    );
    background: -o-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
    background: -moz-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
    background: linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
    top: 0;
    left: -100%;
  }

  button {
    font-size: 16px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px px;
    width: 100%;
    height: 50px;
    outline: none !important;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.div`
  padding-left: 10px;
  color: grey;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  color: red;
  font-weight: bold;

  .register {
    color: green;
  }
`;

export const SignUp = styled.div`
  padding-top: 80px;
  display: flex;
  gap: 20px;
  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  -ms-flex-direction: column;
  -o-flex-direction: column;
  flex-direction: column;
  -ms-align-items: center;
  align-items: center;

  span {
    font-size: 14px;
    line-height: 1.5;
    color: #666666;
  }

  button {
    font-size: 14px;
    line-height: 1.5;
    color: #333333;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const HiddenUsersLink = styled.a`
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: transparent;
  width: 50px;
  height: 50px;
`;
