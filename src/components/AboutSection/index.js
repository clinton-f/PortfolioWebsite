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
                <Rtro className="Rtro">RETRO.io</Rtro>
                <p>retro@gmail.com</p>
                <p>Portfolio v1.0.0 in REACT</p>
        </AboutRow1>

        <Column1 className="Technologies">

            <Console/>


        </Column1>
{/*
        <Overlay className="overlay"></Overlay>
        <Scanline className="scanline"></Scanline> 
        <Wrapper className="wrapper">        
        <content_clearfix className="content clearfix">
        <site_clearfix className="site clearfix">
			<div class="col two">
				<h4>591 Systems (tm) <br /> <b>H</b>euristically <b>E</b>ncrypted <b>R</b>eal-Time <b>O</b>perating <b>S</b>ystem (HEROS)</h4>
				<p>----------------------------------------</p>
				<p>HEROS v 1.0.0</p>
				<p>(c)2021 591 Industries</p>
				<p>- Server 591 -</p>
			</div>
        </site_clearfix>
        <site_clear className="site clear">
            <ul>
				<li><a href="#" title="">Return Home</a></li>
				<li><a href="#" title="">Our Clients</a></li>
				<li><a href="#" title="">Contact Us</a></li>
			</ul>
        </site_clear>
        <p>System Administrator Integrated Message System (SAIMS)</p>
		<p>System Administrator (SYSADM) - Mack Richardson</p>

		<p class="clear"><br /></p>

		<p>Welcome to the System Administrator Integrated Message System (SAIMS). Fill out the fields below and press the SUBMIT button. The system administrator (SYSADM) will respond to your query after an appropriate amount of quiet contemplation. Thank you for contacting the System Administrator's Office.</p><br />
        
        <form>
			<label>Name </label><input type="text" /><br />
			<label>Email </label><input type="text" /><br />
			<label>Subject </label><input type="text" /><br />
			<label>Message </label><textarea id="text" rows="1"></textarea><br /><br /><br />
			<input type="submit" value="Submit" />
			<a class="button" alt="" href="index.html">Cancel</a>
		</form> 
        </content_clearfix>
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