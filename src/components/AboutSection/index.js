import React from 'react';
import {AboutBackgroundText, AboutSectionContainer, AboutWrapper, AboutTitle, AboutRow1, Column1, TextWrapper1, ProfileImg, Technologies,Rtro} from './AboutElements';
//import Picture from '../../images/Picture.jpg';
import Console from './Console.js';

const AboutSection = () => {


    return (
        <div>
        <>
        
        <AboutSectionContainer id='About'>
        <AboutBackgroundText>ABOUT</AboutBackgroundText>
        

        <AboutWrapper className="AboutContainer">
        {/* <ProfileImg className="PicContainer" > <img src={Picture} height="98%" width="98%" alt="My Profile Pic" className="profilePic"/> </ProfileImg> */}
        <AboutRow1 className="DescContainer">
                <Rtro className="Rtro">ABOUT trm.</Rtro>
                <p>clintonfabian7@gmail.com <br></br>
                Portfolio v1.0.0 in REACT: Type 👉help for available commands.</p>
        </AboutRow1>

        <Column1 className="Technologies">

            <Console/>


        </Column1>


        {/*<Wrapper className="wrapper">        
        </Wrapper>


            {/* <AboutTitle className="AboutTittle">ABOUT ME</AboutTitle> */}

            {/* <ProfileImg className="PicContainer" > <img src={Picture} height="98%" width="98%" alt="My Profile Pic" className="profilePic"/> </ProfileImg>
            

            
            <TextWrapper1 className="Education">
            Here are a few technologies I've been working with recently:
            <Technologies> <div className="tech">• Javascript</div> <div className="tech">• React</div> <div className="tech">• Python</div> <div className="tech">• Node.js</div> <div className="tech">• C#</div> <div className="tech">• C</div></Technologies>
            </TextWrapper1> 
                */}
        </AboutWrapper>
            
        </AboutSectionContainer>
        </>
        </div>
    )

}

export default AboutSection;