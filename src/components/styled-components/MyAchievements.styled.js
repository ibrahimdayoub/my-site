import styled from "styled-components";

export const AchievementContentContainer = styled.div`
  //
`;

export const AchievementImageContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
`;

export const SkillCard = styled.span`
  display: inline-block;
  margin:0.1rem;
  // background-color: ${({ theme }) => theme.colors.gray}; 
  background-color: ${(props) => props.bg || props.theme.colors.gray}; 
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 14px;

  @media ${({ theme }) => theme.breakpoints.mobile}{
    padding: 0.25rem 0.5rem;
  }

  @media(max-width: 350px) {
    margin:0.05rem;
  }
`

export const AchievementImageLink = styled.a`
  width: 80%;
  height: 300px;
  cursor: pointer;
  overflow:hidden;
  border-radius: 7.5px;
  // opacity:0.75;
  box-shadow: 1px 1px 5px #ddd;
  background-color: ${({ theme }) => theme.colors.secondary};
  @media ${({ theme }) => theme.breakpoints.mobile}{
    width: 100%;
    height: 250px;
    margin:0 auto;
    margin-top: 2rem;
  }
`

export const AchievementImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`