import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
//import { Link } from 'react-router-dom';

export const HeroContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 50px 0px 50px;
    height: 100vh;
    position: relative;
    background: none;
    z-index: 997;

    background: #101d30;
    
    @media screen and (max-width: 768px){
    margin: 0px 25px 0px 25px;
    z-index: 500;
    font-size: 40px;
    text-align: center;
    justify-content: flex-end;
}
  
    @media screen and (max-width: 480px){  
    z-index: 500;
    font-size: 32px;
    text-align: center;
    justify-content: flex-end;
}
`

export const HeroContent = styled.div `
position: absolute;
//padding: 0rem 2rem 0px 2rem;
margin-left: 5%;
margin-right: 5%;
display: flex;
flex-direction: column;
align-items: left;
margin-top: 3vh;
margin-bottom: 100px;
background: none;

    @media screen and (max-width: 768px){
        padding: 2rem 0rem 0px 0rem;
    }
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
    margin-top: 10px;
}

@media screen and (max-width: 480px){
    font-size: 18px;
    text-align: center;
    margin-bottom: 30px;
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

export const ArrowForward = styled(MdArrowForward)
`

`

export const ArrowRight = styled(MdKeyboardArrowRight)
`

`
export const EmailSection = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 25rem;
    
    width: 20px;
    right: 2.5rem;
    bottom: 0;

    position: fixed;
    z-index: 5;
    @media screen and (max-width: 768px){ 
    right: 1.2rem;

    }
    @media screen and (max-width: 480px){ 
    right: 1.5rem;
    
    }
    @media screen and (max-width: 376px){ 
    }
    @media screen and (max-width: 320px){ 
}
`;

export const PunkStripe = styled.div `
    height: 8rem;
    
    width: 20px;
    bottom: 0;
    
    transform: rotate(0deg);
    background: repeating-linear-gradient(
    40deg,
    #aaaaaa,
    #aaaaaa 4px,
    rgba(0, 0, 0, 0) 4px,
    rgba(0, 0, 0, 0) 10px);

`;

export const EmailPart = styled.div `
    font-size: 18px;
    background: rgba(0, 0, 0, 0);
    color: #aaaaaa;
    transform: rotate(90deg);
    text-decoration: none;
    cursor: pointer;
    

    @media screen and (max-width: 768px){ 
    font-size: 18px;
}

    @media screen and (max-width: 480px){ 
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
    @media screen and (max-width: 320px){
        width: 8px;
    }
`