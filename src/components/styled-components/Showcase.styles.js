import styled from "styled-components";

export const ShowcaseImageCard = styled.div`
  border: 1px solid #fff;
  width: 250px;
  height: 250px;
  border-radius: 100%;
  position: relative;
  overflow: hidden;
  background: #131c31;
  display:flex;
  justify-content:center;
  align-items:center;

  @media(min-width: 768px) {  
    width:350px;
    height:350px;    
  }

  & > img {
    width:85%;
    margin-bottom: -25px
  }
`

export const ShowcaseParticleContainer = styled.div`
  position:relative;

  @media ${({ theme }) => theme.breakpoints.mobile}{
    // display: none;
  }
`

export const IconContainerAlt = styled.a`
  font-size: 1.5rem;
  color: #fff;
  transition: all 0.2s ease;
  cursor: pointer;
  margin:0 0.25rem;
  
  &:hover{
      color: ${({ theme }) => theme.colors.secondary};
  }

  @media(max-width: 350px) {
    margin:0 0.125rem;
  }
`