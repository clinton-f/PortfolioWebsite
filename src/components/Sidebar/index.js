import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, NavBtnLinkWrap, NavBtnLinkSmall} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return ( 
    <SidebarContainer isOpen={isOpen} toggle={toggle}> 
        <Icon onClick={toggle}>
        <CloseIcon/>
        </Icon> 
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="Home" smooth={true} duration={700} spy={true} exact='true' offset={-80} onClick={toggle}>INTRO</SidebarLink>
                <SidebarLink to="About" smooth={true} duration={700} spy={true} exact='true' offset={-50} onClick={toggle} onClick={toggle}>ABOUT</SidebarLink>
                <SidebarLink to="Tech" smooth={true} duration={700} spy={true} exact='true' offset={10} onClick={toggle} onClick={toggle} onClick={toggle}>TECH</SidebarLink>
                <SidebarLink to="Contact" smooth={true} duration={700} spy={true} exact='true' offset={10} onClick={toggle} onClick={toggle} onClick={toggle}>CONTACT</SidebarLink>
                <NavBtnLinkWrap>
                <NavBtnLinkSmall to="/resume" onClick={toggle}>RESUME</NavBtnLinkSmall>
                </NavBtnLinkWrap>
            </SidebarMenu> 
        </SidebarWrapper>
    </SidebarContainer>
    );
};

export default Sidebar;