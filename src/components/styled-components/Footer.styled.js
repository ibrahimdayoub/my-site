import styled from "styled-components";

export const Footer = styled.footer`
  padding:20px 100px;
  background-color: ${({ theme }) => theme.colors.secondary};
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;

  @media ${({ theme }) => theme.breakpoints.mobile}{
      padding:10px;
  }

  @media(max-width: 350px) {
  padding:5px;
  }
`
export const Contact = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:5px;
  color:${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.breakpoints.mobile}{
    background:${props => props.display === "flex" ? "#131c31" : "none"};
    font-size:12px;
  }

  @media(max-width: 350px) {
      font-size:10px;
      gap:2px;
  }
`
