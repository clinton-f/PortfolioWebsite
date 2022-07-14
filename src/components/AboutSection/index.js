import React from 'react';
import {AboutBackgroundText, AboutSectionContainer, AboutWrapper, AboutRow1, Column1, Rtro} from './AboutElements';
//import Picture from '../../images/Picture.jpg';
import Console from './Console.js';

const AboutSection = () => {


    return (
        <div>
        <>
        
        <AboutSectionContainer id='About'>
        <AboutBackgroundText>ABOUT</AboutBackgroundText>
        

        <AboutWrapper className="AboutContainer" style={{marginTop: '25px'}}>
            <AboutRow1 className="DescContainer">
                <Rtro className="Rtro">ABOUT trm.</Rtro>
                <p style={{flex: 1, flexWrap: 'wrap'}}>Portfolio v1.0.0 in REACT: Type 👉help for available commands.</p>
        </AboutRow1>

        <Column1 className="Technologies">

            <Console/>


        </Column1>

        </AboutWrapper>
            
        </AboutSectionContainer>
        </>
        </div>
    )

}

export default AboutSection;