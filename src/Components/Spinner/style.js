import styled from 'styled-components'

export const Loader = styled.svg`
  animation: rotate 2s linear infinite;
  width: 60px;
  height: 60px;

  & .path {
    stroke: ${(props) =>
      props.theme.isLight ? 'hsl(0, 0%, 60%)' : 'hsl(0, 0%, 100%)'};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`
