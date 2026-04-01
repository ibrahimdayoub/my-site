import { useState } from 'react';
import { IconContainerAlt } from './styled-components/Global.styled';
import { Bar, Logo, MainNav, NavBarToggle, NavLi, NavLink } from './styled-components/Navbar.styled';
import { FaAward, FaBars, FaCode, FaCubes, FaDumbbell, FaEnvelope, FaPaperPlane, FaProjectDiagram, FaTimes } from 'react-icons/fa';
import MyLogo from "../assets/logo.webp";

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
            <IconContainerAlt color="blue" size="1.25rem" style={{ marginRight: "0.5rem" }} ><FaCode /></IconContainerAlt>
            Skills
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="#my-projects">
            <IconContainerAlt color="blue" size="1.25rem" style={{ marginRight: "0.5rem" }} ><FaProjectDiagram /></IconContainerAlt>
            Projects
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="#my-achievements">
            <IconContainerAlt color="blue" size="1.25rem" style={{ marginRight: "0.5rem" }} ><FaAward /></IconContainerAlt>
            Achievements
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="#my-contact">
            <IconContainerAlt color="blue" size="1.25rem" style={{ marginRight: "0.5rem" }} ><FaPaperPlane /></IconContainerAlt>
            Contact
          </NavLink>
        </NavLi>
      </MainNav>
    </Bar>
  )
}

export default Navbar;