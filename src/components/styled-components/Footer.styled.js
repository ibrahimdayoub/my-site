import styled from "styled-components";

export const Footer = styled.footer`
  padding: 15px 50px;
  background: ${({ theme }) => theme.colors.primary_light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};

  @media ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 25px 10px;
  }
`;


export const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  a {
    width: 35px;
    height: 35px;
    background: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    transition: 0.25s;
    &:hover {
      opacity: 0.75;
    }
  }
`;

export const Copyright = styled.div`
  color:#fff;
  font-size: 14px;
  letter-spacing: 1px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 12px;
  }
`;