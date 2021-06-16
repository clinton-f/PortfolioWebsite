import React from 'react';
import {AboutBackgroundText, AboutSectionContainer, AboutWrapper, AboutTitle, AboutRow1, Column1, TextWrapper1, ProfileImg, Technologies} from './AboutElements';
import Picture from '../../images/Picture.jpg';

const AboutSection = () => {

    return (
        <div>
        <>
        
        <AboutSectionContainer id='About'>
        <AboutBackgroundText>ABOUT</AboutBackgroundText>
        

        <AboutWrapper className="AboutContainer">

            <AboutTitle className="AboutTittle">ABOUT ME</AboutTitle>

            <ProfileImg className="PicContainer" > <img src={Picture} height="98%" alt="My Profile Pic" className="profilePic"/> </ProfileImg>
            
            <AboutRow1 className="DescContainer">
            Clinton is the name and I'm a cyberspace enthusiast. I found interest in developing for the web in 2012 when I started editing and creating themes in CSS & HTML for myself and eventually for clients. That’s when I decided to further my career and become a computer scientist.            
            </AboutRow1>

            <Column1 className="Technologies">
            After being blessed with some good years of real world experience working with clients meeting their deadlines and expectations as well as receiving well worth university level discipline and education, here I am looking to create new connections and start my next adventure.
            </Column1>
            
            <TextWrapper1 className="Education">
            Here are a few technologies I've been working with recently:
            <Technologies> <div className="tech">• Javascript</div> <div className="tech">• React</div> <div className="tech">• Python</div> <div className="tech">• Node.js</div> <div className="tech">• C#</div> <div className="tech">• C</div></Technologies>
            </TextWrapper1>
                
        </AboutWrapper>

        </AboutSectionContainer>
        </>
        </div>
    )
}

export default AboutSection;
