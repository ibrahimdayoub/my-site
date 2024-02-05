import styled, {keyframes} from "styled-components";

const loading = keyframes`   
  from {
    width:0%;
  }
  to {
    width:100%;
  }
`

export const LoaderParent = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  height:100vh;
`

export const LoaderLogo = styled.img`
  width: 200px;
  @media (min-width: 768px) {    
    width: 400px;
  }
`

export const LoadingBar = styled.div`
  width: 50%;
  height: 10px;
  background: #ffffff00;
  margin: 10px auto;
  border: 2px solid #7eadfc;
  border-radius: 4px;
  
  & > div {
  animation: ${loading} 2.5s linear 1;
    background: #7eadfc;
    height:100%;
  }

  @media (min-width: 768px) {    
    margin: 25px auto;
    width: 25%;
  }
`