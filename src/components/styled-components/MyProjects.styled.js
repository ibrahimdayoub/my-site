import styled from "styled-components";

export const ProjectContentContainer = styled.div`
  //
`;

export const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify };
`;

export const TechStackCard = styled.span`
  display: inline-block;
  margin:0.1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  @media ${({ theme }) => theme.breakpoints.mobile}{
    font-size:14px;
    padding: 0.25rem 0.5rem;
  }

  @media(max-width: 350px) {
    margin:0.05rem;
  }
`

export const ProjectImage = styled.img`
  border: 1px solid #fff;
  width: 80%;
  height: 300px;
  object-fit: fill;
  border-radius: 8px;
  opacity:0.75;
  padding:2px;

  @media ${({ theme }) => theme.breakpoints.mobile}{
    width: 100%;
    margin:0 auto;
    margin-top: 2rem;
  }
`