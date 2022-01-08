import styled from "styled-components";

export const PageStyle = styled.div`
  background-image: url("./img/bg.jpg");
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

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
  width: 400px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 55px;
`;

export const Title = styled.span`
  display: block;
  font-family: Poppins-Bold;
  font-size: 39px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 20px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid #d9d9d9;
  margin-bottom: 23px;
`;

export const Input = styled.input`
  font-family: Poppins-Medium;
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
  font-family: Poppins-Regular;
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
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  button {
    font-family: Poppins-Medium;
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
  font-family: "Arial";
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
    font-family: Poppins-Regular;
    font-size: 14px;
    line-height: 1.5;
    color: #666666;
  }

  button {
    font-family: Poppins-Regular;
    font-size: 14px;
    line-height: 1.5;
    color: #333333;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
