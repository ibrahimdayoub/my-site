import { useState } from 'react';
import { IconContainerAlt } from './styled-components/Global.styled'
import { Bar, Logo, MainNav, NavBarToggle, NavLi, NavLink } from './styled-components/Navbar.styled';
import { FaBars, FaCubes, FaDumbbell, FaEnvelope, FaTimes } from 'react-icons/fa';
import MyLogo from "../assets/logo.png"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
      <Bar display={openMenu ? "flex" : "none"}>
        <NavBarToggle onClick={() => setOpenMenu(!openMenu)}>
          <IconContainerAlt color="blue" size="1.5rem">
            {
              openMenu ?
                <FaTimes /> :
                <FaBars />
            }
          </IconContainerAlt>
        </NavBarToggle>
      <Logo src={MyLogo} alt="Logo"></Logo>
        <MainNav display={openMenu ? "flex" : "none"}>
          <NavLi>
            <NavLink href="#my-skills">
              <IconContainerAlt color="blue" size="1.5rem" style={{marginRight:"0.5rem"}} ><FaDumbbell /></IconContainerAlt>
              My Skills
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="#my-projects">
              <IconContainerAlt color="blue" size="1.5rem" style={{ marginRight: "0.5rem" }} ><FaCubes /></IconContainerAlt>
              My Projects
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="#my-contact">
              <IconContainerAlt color="blue" size="1.5rem" style={{ marginRight: "0.5rem" }} ><FaEnvelope /></IconContainerAlt>
              My Contact
            </NavLink>
          </NavLi>
        </MainNav>
      </Bar>
  )
}

export default Navbar