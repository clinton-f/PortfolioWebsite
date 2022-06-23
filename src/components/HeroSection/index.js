import React, {useState} from 'react';
import { Button } from '../ButtonElement';
import {HeroContainer, HeroContent, HeroBg, HeroH1, HeroH2, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, EmailSection, PunkStripe, EmailPart, SocialMediaLine, SocialMediaIcon1, SocialMediaIcon2, SocialMediaIcon3, SocialMediaIcon4, SocialItems} from './HeroElements';

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
            <HeroBg>
            </HeroBg>   

            <HeroContent>
                <HeroP className="first-word">Hi, my name is</HeroP>
                <HeroH1 className="second-word">Clinton Fabian</HeroH1>
                <HeroH2 className="third-word">I build things for the web.</HeroH2>
                <HeroP className="fourth-word">I’m a software engineer based in Clayton, NC specializing in building as well as designing outstanding websites, applications, and other tools alike to help improve, solve or add to the web's needs.
                </HeroP>
                    <HeroBtnWrapper className="fifth-word">
                        <Button onClick={()=> window.open("mailto:clintonfabian7@gmail.com?subject=Contacting you from your porfolio site&body=Reason for business%20goes%20here", "_blank")} onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true' dark='true'>
                            Get In Touch {hover ? <ArrowForward/> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
            </HeroContent>

          <EmailSection className="Fade-In-Only">
          <EmailPart onClick={()=> window.open("mailto:clintonfabian7@gmail.com?subject=Contacting you from your porfolio site&body=Reason for business%20goes%20here", "_blank")}>clintonfabian7@gmail.com</EmailPart>
          <PunkStripe className="emailStripes1"></PunkStripe>
          </EmailSection>
          
        <SocialItems className="moveIn-right">
          <SocialMediaLine></SocialMediaLine>
          <SocialMediaIcon1>
                <AiOutlineCodeSandbox className="globalEffect1" size='1.6rem' onClick={()=> window.open("https://codesandbox.io/s/clinton-f", "_blank")}/>
          </SocialMediaIcon1>
          <SocialMediaIcon2>
                <AiOutlineCodepen className="globalEffect1" size='1.6rem' onClick={()=> window.open("https://codepen.io/clintonf7", "_blank")}/>
          </SocialMediaIcon2>
          <SocialMediaIcon3>
                <AiOutlineLinkedin  className="globalEffect1" size='1.6rem' onClick={()=> window.open("https://linkedin.com/in/clinton-f", "_blank")}/>
          </SocialMediaIcon3> 
          <SocialMediaIcon4>
                <RiGithubLine className="globalEffect1" size='1.6rem' onClick={()=> window.open("https://github.com/clinton-f", "_blank")}/>
          </SocialMediaIcon4>
        </SocialItems>

        </HeroContainer>
     );
 };


 export default HeroSection;
 