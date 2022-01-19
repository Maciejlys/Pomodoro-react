import styled from "styled-components";

export const PageStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: opacity 2s;
`;

export const TimerText = styled.div`
  top: 70%;
  position: absolute;
  font-family: roboto;
  font-size: 3rem;
  color: black;
`;

export const TimerWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  border-radius: 50%;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: opacity 1s;
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

/**
Interface that definies prop used in GradientCircle style
@size {number}
**/
interface GradientCircleSizeProp {
  size: number;
  work: boolean;
}

export const WorkDots = styled.div`
  margin-top: 2rem;
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 2rem;
`;

export const GradientCircle = styled.div<GradientCircleSizeProp>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: ${(props) => props.size}%;
  animation: ${(props) => (props.work ? "fadein" : null)} 2s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  aspect-ratio: 1;
  .wrapdiv {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    border-radius: 50%;
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

  .button {
    display: flex;
    flex-direction: column;
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

export const HiddenDebugButton = styled.div`
  cursor: pointer;
  right: 0;
  top: 0;
  position: absolute;
  background-color: transparent;
  width: 50px;
  height: 50px;
`;
