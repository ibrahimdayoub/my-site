import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0%   { width: 0%; }
  20%  { width: 35%; }
  40%  { width: 55%; }
  60%  { width: 72%; }
  75%  { width: 82%; }
  85%  { width: 88%; }
  92%  { width: 92%; }
  100% { width: 100%; }
`;

const shine = keyframes`
  0% { left: -40%; }
  100% { left: 120%; }
`;

export const LoaderParent = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  height:100vh;
`

export const LoaderLogo = styled.img`
  width: 250px;
  @media (min-width: 768px) {    
    width: 350px;
  }
`

export const LoadingBar = styled.div`
  width: 250px;
  height: 10px;
  margin: 50px auto;
  border-radius: 999px;
  overflow: hidden;

  background: rgba(255,255,255,0.05);
  border: 1px solid ${({ theme }) => theme.colors.secondary};

  backdrop-filter: blur(5px);

  & > div {
    position: relative;
    height: 100%;
    border-radius: inherit;

    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.secondary},
      #ffffff,
      ${({ theme }) => theme.colors.secondary}
    );

    animation: ${loading} 2.5s ease-out forwards;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.secondary}, 0 0 25px ${({ theme }) => theme.colors.secondary};
    overflow: hidden;
  }

  & > div::after {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 50%;
    height: 100%;

    background: linear-gradient(
      120deg,
      transparent,
      rgba(255,255,255,0.8),
      transparent
    );

    animation: ${shine} 1.25s infinite;
  }

  @media (min-width: 768px) {
    margin: 50px auto;
  }
`;