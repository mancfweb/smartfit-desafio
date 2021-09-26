import styled from 'styled-components'

export const Container = styled.span`
  display: block;

  width: 30px;
  height: 30px;
  margin: 0;

  animation: 1.4s linear 0s infinite normal none running rotator;

  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .circle {
    stroke: black;
    stroke-dasharray: 80px, 200px;
    stroke-dashoffset: 0;
    animation: circle 1.4s ease-in-out infinite;
  }

  @keyframes circle {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px;
    }
    100% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -125px;
    }
  }
`
