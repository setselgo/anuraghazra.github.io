import React, { useState, useEffect } from 'react';
import logo from 'src/static/logo.svg';

import Link from "gatsby-link"
import { Burger, NavContent, NavItems, NavItem, NavWrapper } from './Navbar.style'
import { Link as ScrollLink } from 'react-scroll';

import ToggleSwitch from 'src/components/common/ToggleSwitch';


const NavItemsSmoothLinks = () => (
  <>
    <NavItem><ScrollLink smooth offset={-100} hashSpy={true} to="home">home</ScrollLink></NavItem>
    <NavItem><ScrollLink smooth offset={-100} hashSpy={true} to="about">about me</ScrollLink></NavItem>
    <NavItem><ScrollLink smooth offset={-100} hashSpy={true} to="projects">projects</ScrollLink></NavItem>
    <NavItem><ScrollLink smooth offset={-100} hashSpy={true} to="creative-coding">creative coding</ScrollLink></NavItem>
    <NavItem><ScrollLink smooth offset={-100} hashSpy={true} to="concepts">concepts</ScrollLink></NavItem>
    <NavItem><ScrollLink smooth offset={-100} hashSpy={true} to="contact">contact</ScrollLink></NavItem>
  </>
)

const NavItemsGatsbyLinks = () => (
  <>
    <NavItem><Link to="/">home</Link></NavItem>
    <NavItem><Link to="/#about">about me</Link></NavItem>
    <NavItem><Link to="/#projects">projects</Link></NavItem>
    <NavItem><Link to="/#creative-coding">creative coding</Link></NavItem>
    <NavItem><Link to="/#concepts">concepts</Link></NavItem>
    <NavItem><Link to="/#contact">contact</Link></NavItem>
  </>
)

const Navbar = ({ handleDarkModeToggle, toggleRef }) => {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [path, setPath] = useState(null);

  const handleSidebar = () => {
    setSidebar(prev => !prev);
  }

  useEffect(() => {
    setPath(window.location.pathname);
  }, [])

  return (
    <NavWrapper>
      <NavContent as="div">
        <ScrollLink className="logo" smooth offset={-100} hashSpy={true} to="home">
          <img src={logo} alt="Anurag Hazra" />
        </ScrollLink>

        <Burger onClick={handleSidebar} className={isSidebarOpen ? 'open' : ''}>
          <span></span>
          <span></span>
          <span></span>
        </Burger>
        <nav>
          <NavItems isSidebarOpen={isSidebarOpen}>
            {path === '/' ? <NavItemsSmoothLinks /> : <NavItemsGatsbyLinks />}
            
            <NavItem><Link to="/blog">blog</Link></NavItem>
            <NavItem><ToggleSwitch inputRef={toggleRef} onChangeInput={handleDarkModeToggle} /></NavItem>
          </NavItems>
        </nav>

      </NavContent>

    </NavWrapper>
  )
}

export default Navbar;