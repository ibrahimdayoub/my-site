import styled from "styled-components";

export const Bar = styled.nav`
  padding-top:1rem;
  font-size: 18px;
  background:none;
  @media ${({ theme }) => theme.breakpoints.mobile}{
    background:${props => props.display === "flex" ? "#131c31" : "none"}
  }

  @media (min-width: 768px) {
    margin-top:1rem;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
  }
`

export const MainNav = styled.ul`
  list-style-type: none;
  display: ${props => props.display};
  flex-direction: column;
  justify-content:center;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`

export const NavLi = styled.li`
  margin: 10px 50px;

  @media (min-width: 768px) {
    text-align: center;
    margin: 10px auto;
  }
`

export const NavLink = styled.a`
  list-style-type: none;
  display: flex;
  text-decoration: none;
  color: #7eadfc;
  transition:1s;

  @media (min-width: 768px) {    
    margin: 0px 10px;
  }

  &:hover{
    color: #fff;
  }
`

export const Logo = styled.img`
  width: 75px;
  margin-left: 15px;
  margin-top: -10px;

  @media (min-width: 768px) {    
    width: 150px;
    margin-bottom:-50px;
    margin-top: 0px;
  }

  @media (min-width: 1300px) {    
    margin-left:0px;
  }
`

export const NavBarToggle = styled.span`
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer; 
  color: rgba(255,255,255,0.8);
  font-size: 24px;
`