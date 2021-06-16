import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 0px 50px 0px;
    margin: 0px 50px 0px 50px;
    height: 800px;
    position: relative;
    background: none;
    z-index: 999;

    background: #101d30;
    
    @media screen and (max-width: 768px){
    z-index: 500;
    font-size: 40px;
    text-align: center;
    justify-content: flex-end;
    margin: -10px 60px 0px 0px;
}
  
    @media screen and (max-width: 480px){
    margin: -15px 0px 0px 0px;    
    z-index: 500;
    font-size: 32px;
    text-align: center;
    justify-content: flex-end;
}
`

export const HeroBg = styled.div `
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const HeroContent = styled.div `
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: left;
margin-bottom: 150px;
background: none;
`
export const HeroH1 = styled.h1 `
color: #e4ddc0;
font-size: 80px;
text-align: left;
background-color: rgba(0, 0, 0, 0);
z-index: 6;

@media screen and (max-width: 768px){
    font-size: 40px;
    text-align: center;
}
  
@media screen and (max-width: 480px){
    font-size: 32px;
    text-align: center;
}
`

export const HeroH2 = styled.h2 `
color: #55a08d;
font-size: 70px;
text-align: left;
background-color: rgba(0, 0, 0, 0);
z-index: 6;

@media screen and (max-width: 768px){
    font-size: 40px;
    text-align: center;
}
  
@media screen and (max-width: 480px){
    font-size: 32px;
    text-align: center;
}
`

export const HeroP = styled.p `
margin-top: 30px;
margin-bottom: 25px;
color: #aaaaaa;
font-size: 20px;
text-align: left;
max-width: 600px;
background: none;
z-index: 6;

@media screen and (max-width: 768px){
    font-size: 24px;
    text-align: center;
    margin-bottom: 40px;
}

@media screen and (max-width: 480px){
    font-size: 18px;
    text-align: center;
    margin-bottom: 40px;
}
`

export const HeroBtnWrapper = styled.div `
margin-top: 30px;
display: flex;
justify-content: flex-start;
align-items: left;
z-index: 6;
background: none;
flex-direction: column;
width: 200px;

@media screen and (max-width: 768px){
    font-size: 24px;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 480px){
    font-size: 18px;
    align-self: center;
}
`

export const ArrowForward = styled(MdArrowForward)`
vertical-align: middle;
background-color: rgba(0, 0, 0, 0);
background-color: none;

@media screen and (max-width: 768px){
    display: none;
}
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
background-color: rgba(0, 0, 0, 0);
vertical-align: middle;

@media screen and (max-width: 768px){
    display: none;
    padding: 0px 15px;
}
`
export const EmailSection = styled.div `
    left: 96%;
    width:16px;
    position: fixed;
    z-index: 5;

    @media screen and (max-width: 768px){ 
    left: 97%;
    }
    @media screen and (max-width: 480px){ 
    left: 96%;
}
`;

export const PunkStripe = styled.div `
    left: 96%;
    width:16px;
    position:fixed;
    height: 20vh;
    bottom:0;
    z-index: 5;

    background: repeating-linear-gradient(
    40deg,
    #aaaaaa,
    #aaaaaa 4px,
    rgba(0, 0, 0, 0) 4px,
    rgba(0, 0, 0, 0) 10px);

    @media screen and (max-width: 768px){ 
    left: 97%;}

    @media screen and (max-width: 480px){ 
    left: 96%;
    
}
`;

export const EmailPart = styled.div `
    font-size: 18px;
    background: rgba(0, 0, 0, 0);
    color: #aaaaaa;
    transform: rotate(90deg);
    text-decoration: none;
    cursor: pointer;
    position: sticky;
    margin-top: -80px;
    

@media screen and (max-width: 768px){ 
    margin-top: -130px;
    font-size: 18px;
    padding: 0px 0px 0px 0px;}

    @media screen and (max-width: 480px){ 
    left: 96%;
    margin-top: -120px;
}
`;

export const SocialItems = styled.div `
    bottom: 30px;
    left: 0px;
    position: fixed;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    

    @media screen and (max-width: 960px){
    bottom: 14px;
    z-index: 5;
}
@media screen and (max-width: 480px){
}
`

export const SocialMediaLine = styled.div `
    height: 1px;
    width: 200px;
    background-color:#aaaaaa;
    margin: 0px 30px 0px 0px;
    z-index: 999;

    @media screen and (max-width: 960px){
    width: 50px;
}
`

export const SocialMediaIcon1 = styled(Link)`
    margin: 0px 30px 0px 10px;
    z-index: 999;
    color:#aaaaaa;
    background-color: rgba(0, 0, 0, 0);

    @media screen and (max-width: 960px){
    bottom: 14px;
}
`;

export const SocialMediaIcon2 = styled(Link)`
    margin: 0px 30px 0px 10px;
    z-index: 999;
    color:#aaaaaa;
    background-color: rgba(0, 0, 0, 0);
`;

export const SocialMediaIcon3 = styled(Link)`
    margin: 0px 30px 0px 10px;
    z-index: 999;
    color:#aaaaaa;
    background-color: rgba(0, 0, 0, 0);
`;

export const SocialMediaIcon4 = styled(Link)`
    margin: 0px 30px 0px 10px;
    z-index: 999;
    color:#aaaaaa;
    background-color: rgba(0, 0, 0, 0);
`;