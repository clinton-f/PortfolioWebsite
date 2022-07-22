import React, {useState, useEffect} from 'react';
import {BsGrid3X3Gap} from 'react-icons/bs';
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink} from './NavbarElements';



const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

const changeNav = () => {
    if (window.scrollY >= 80){
        setScrollNav(true);
    }  else   {
        setScrollNav(false);
    }
};

useEffect(() => {
    window.addEventListener('scroll', changeNav);
    
}, []);

const toggleHome = () => {
    scroll.scrollToTop();
};
    return ( 
        <>
          <Nav scrollNav={scrollNav} className="nav-dropdown">
              <NavbarContainer>
                  <NavLogo to='/' onClick={toggleHome}>R</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <BsGrid3X3Gap/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks className="globalEffect1" to="Home" smooth={true} duration={600} /*spy={true}*/ exact="true" offset={-90}>INTRO</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks className="globalEffect1" to="About" smooth={true} duration={600} /*spy={true}*/ exact="true" offset={-1}>ABOUT</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks className="globalEffect1" to="Tech" smooth={true} duration={600} /*spy={true}*/ exact="true" offset={-1}>TECH</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks className="globalEffect1" to="Contact" smooth={true} duration={600} /*spy={true}*/ exact="true" offset={-1}>CONTACT</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtnLink to='/' style={{margin: '20px'}} onClick={()=> window.open("https://www.dropbox.com/s/u1kcvgnmcc93hya/resume.docx?dl=0", "_blank")}>RESUME</NavBtnLink>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar;