import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside `
position: fixed;
width: 100%;
height: 100%;
background: #101d30;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out; 
opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};
z-index: 999;
`;

export const CloseIcon = styled(FaTimes)`
color: #fff;

@media screen and (max-width: 768px){
    
}
`;

export const Icon = styled.div `
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div `
color: #fff;
`;

export const SidebarMenu = styled.ul `
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
}
`;

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;
white-space: nowrap;
&:hover{
    color: #ad7c18;
    transition: 0.2s ease-in-out;
}

@media screen and (max-width: 768px){
    margin: 0px 300px 0px 300px;
}

@media screen and (max-width: 480px){
    margin: 0px 150px 0px 150px;
}
`;


export const NavBtnLinkWrap = styled.div `
display: flex;
justify-content: center;
`;

export const NavBtnLinkSmall = styled(LinkR)`
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(5px);
box-shadow: 0 25px 45px rgba(0,0,0,0.1);
border: 1px solid rgba(255, 255, 255, 0.3);
border-right: 1.5px solid rgba(255, 255, 255, 0.2);
border-bottom: 1.5px solid rgba(255, 255, 255, 0.2);
padding: 10px 40px;

border: 1px solid#ad7c18;
white-space: nowrap;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
list-style: none;
color: #fff;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;


&:hover {
    transition: all 0.2s ease-in-out;
    background: #008051;
    color: rgb(173, 124, 24);

    border: 1px solid rgba(231, 158, 0, 0.7);
    border-right: 1.5px solid rgba(206, 134, 0, 0.459);
    border-bottom: 1.5px solid rgba(206, 134, 0, 0.459);
}
`;