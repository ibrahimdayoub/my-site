import styled from "styled-components";

export const Bar = styled.nav`
  padding-top:1rem;
  background: ${({ $open, theme }) => $open && theme.colors.primary_light};

  @media (min-width: 768px) {
    margin-top:1rem;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    background: none;
  }
`;

export const Hamburger = styled.div`
  width: 25px;
  height: 18px;
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 2px;
    left: 0;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  span:nth-child(1) {
    top: ${({ $open }) => ($open ? "7px" : "0")};
    transform: ${({ $open }) =>
    $open ? "rotate(45deg)" : "rotate(0)"};
  }

  span:nth-child(2) {
    top: 7px;
    opacity: ${({ $open }) => ($open ? 0 : 1)};
  }

  span:nth-child(3) {
    top: ${({ $open }) => ($open ? "7px" : "14px")};
    transform: ${({ $open }) =>
    $open ? "rotate(-45deg)" : "rotate(0)"};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MainNav = styled.ul`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  list-style-type: none;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transform: ${({ $open }) =>
    $open ? "translateY(0)" : "translateY(-20px)"};

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};

  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  @media (min-width: 768px) {
    transform: none;
    opacity: 1;
    pointer-events: all;

    margin-right: 25px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const NavLi = styled.li`
  margin: 10px 25px;
  transform: ${({ $open }) => $open ? "translateY(0)" : "translateY(-10px)"};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  letter-spacing: 1px;

  &:nth-child(1) { margin-top: 25px; transition-delay: 0.1s; }
  &:nth-child(2) { transition-delay: 0.2s; }
  &:nth-child(3) { transition-delay: 0.3s; }
  &:nth-child(4) { transition-delay: 0.5s; }

  @media (min-width: 768px) {
    transform: none;
    opacity: 1;
    margin: 10px auto;

    &:nth-child(1) { margin: 10px auto}
  }
`;

export const NavLink = styled.a`
  list-style-type: none;
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary}; 
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
  margin-top: -7.5px;
  margin-left: 15px;

  @media (min-width: 768px) {    
    width: 150px;
    margin-top: 50px;
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