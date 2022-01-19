import styled from "styled-components";

export const MainStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70%;
  gap: 2rem;

  .select {
    width: 80%;
  }
`;

export const FooterStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  .save,
  .cancel {
    width: 8rem;
    appearance: none;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 1rem;
    box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 1rem;
    font-weight: 600;
    line-height: 2rem;
    padding: 1rem 2rem;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
  }

  .save {
    background-color: #2ea44f;
  }
  .cancel {
    background-color: #a42e2e;
  }
  > div:focus:not(:focus-visible):not(.focus-visible) {
    box-shadow: none;
    outline: none;
  }

  .save:hover {
    background-color: #217238;
  }
  .cancel:hover {
    background-color: #742222;
  }
`;
