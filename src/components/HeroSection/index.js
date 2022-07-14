import React, {useState} from 'react';
import { Button } from '../ButtonElement';
import {HeroContainer, HeroContent, HeroH1, HeroH2, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, EmailSection, PunkStripe, EmailPart, SocialMediaLine, SocialItems} from './HeroElements';

import { AiOutlineCodeSandbox } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";

 const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

     return (
        <HeroContainer id='Home'>

            <HeroContent>
                <HeroP className="first-word">Hi, my name is</HeroP>
                <HeroH1 className="second-word">Clinton Fabian</HeroH1>
                <HeroH2 className="third-word">I solve problems with code.</HeroH2>
                <HeroP className="fourth-word">I’m a software engineer based in Clayton, NC specializing in building as well as designing outstanding websites, applications, and other tools alike to help improve, solve or add to the web's needs.
                </HeroP>
                    <HeroBtnWrapper className="fifth-word">
                        <Button onClick={()=> window.open("mailto:clintonfabian7@gmail.com?subject=Contacting you from your porfolio site&body=Reason for business%20goes%20here", "_blank")} onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true' dark='true'>
                            Get In Touch {hover ? <ArrowForward  style={{background: 'none', verticalAlign: 'middle'}}/> : <ArrowRight  style={{background: 'none', verticalAlign: 'middle'}}/>}
                        </Button>
                    </HeroBtnWrapper>
            </HeroContent>

          <EmailSection className="Fade-In-Only">
          <EmailPart onClick={()=> window.open("mailto:clintonfabian7@gmail.com?subject=Contacting you from your porfolio site&body=Reason for business%20goes%20here", "_blank")}>clintonfabian7@gmail.com</EmailPart>
          <PunkStripe className="emailStripes1"></PunkStripe>
          </EmailSection>
          
        <SocialItems className="moveIn-right">
          <SocialMediaLine></SocialMediaLine>
                <AiOutlineCodeSandbox className="globalEffect1" id="globalEFX" alt="Clinton's codesandbox" size='1.6rem' onClick={()=> window.open("https://codesandbox.io/u/clinton-f", "_blank")}/>

                <AiOutlineCodepen className="globalEffect1" id="globalEFX" alt="Clinton's codepen" size='1.6rem' onClick={()=> window.open("https://codepen.io/clintonf7", "_blank")}/>

                <AiOutlineLinkedin  className="globalEffect1" id="globalEFX" alt="Clinton's linkedin" size='1.6rem' onClick={()=> window.open("https://linkedin.com/in/clinton-f", "_blank")}/>

                <RiGithubLine className="globalEffect1" id="globalEFX" alt="Clinton's github" size='1.6rem' onClick={()=> window.open("https://github.com/clinton-f", "_blank")}/>

        </SocialItems>

        </HeroContainer>
     );
 };


 export default HeroSection;
 