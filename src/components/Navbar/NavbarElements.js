import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav ` 
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 1000;
background: rgba(16, 29, 48, 0.5);
box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.25);
border-bottom: 1px solid rgba(59, 82, 120, 0.452);
backdrop-filter: blur(5px);

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
    z-index: 999;
    position: sticky;
}
`;

export const NavbarContainer = styled.div `
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%; //if I type auto it places the logo in the middle
padding: 0 8%;
background: rgba(0, 0, 0, 0);
`;


//This is a link from "react scroll" for linking withing the same page.
//Router for linking outside of the page, so here we'll use this to importing both.
export const NavLogo = styled(LinkR)`
color: #ad7c18;
background: #6b0905;
border: 1px solid #ad7c18;
justify-self: flex-start;
margin-top: -1px;
cursor: pointer;
font-size: 3rem;
display: flex;
padding: 0px 15px 5px 15px;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;

export const MobileIcon = styled.div `
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #ad7c18;
    background: rgba(0, 0, 0, 0);
}
`;

export const NavMenu = styled.ul `
display: flex;
align-items: center;
list-style: none;
text-align: center;
background: rgba(0, 0, 0, 0.0);

@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavItem = styled.li `
background: rgba(0, 0, 0, 0.0);
`

export const NavLinks = styled(LinkS)
`
color: #aaaaaa;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 2rem;
height: auto;
cursor: pointer;
background: rgba(0, 0, 0, 0.0);

&.active {
    border-bottom: 3px solid #8C1814;
}
`;

export const NavBtn = styled.nav `
display: flex;
align-items: center;
background: none;

@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavBtnLink = styled(LinkR)
`
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(5px);
box-shadow: 0 25px 45px rgba(0,0,0,0.1);
border: 1px solid#ad7c18;


white-space: nowrap;
padding: 10px 22px;
color: #ad7c18;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(129, 129, 129, 0.466);
    color: #ad7c18;
}
`;