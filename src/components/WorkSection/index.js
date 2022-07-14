import React from 'react';
import {WorkSectionContainer, WorkSample1, WorkSample2, WorkImage1, WorkImage2, WorkTxt1, WorkTxt2, FeatureProject, AppTitle, AppDescription, LanguagesUsed} from './WorkElements';
import Fade from 'react-reveal/Fade';
import HeroHomePageWide from '../../images/HeroHomePageWide.jpg';
import HRHomePageWide from '../../images/HRHomePageWide.jpg';
import FitnessDirectory from '../../images/FitnessDirectory.jpg';
import { AiOutlineLink } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";

const WorkSection = () => {


    return (
        <WorkSectionContainer id='Tech'>
            <Fade bottom distance={"50%"}> 
            
            <WorkSample1>

            <WorkImage1 className="cell"><img src={HeroHomePageWide} className="sepia" alt="CMS Website" /></WorkImage1>


            <WorkTxt1 style={{position: 'relative'}}>
                <FeatureProject className="featureProject" >Featured Project</FeatureProject>
                <AppTitle className="appTitle"  style={{color: '#26693a'}}>Cobblestone Place</AppTitle>
                <AppDescription className="appDescription" >C.P. is a Full-Stack Angular application that lets neighbors create events, digital business cards, and post gigs, as well as edit the front page content and more, built using tech like JWT, MongoDB, and TS.</AppDescription>
                <LanguagesUsed className="languagesUsed" >
                <a style={{marginRight: '20px', background: 'transparent', color: '#ad7c18', textDecorationLine: 'none'}} href="https://heroku.com" target="_blank" rel='noopener noreferrer'>Heroku</a>
                <a style={{marginRight: '20px', background: 'transparent', color: '#ad7c18', textDecorationLine: 'none'}} href="https://app.netlify.com/" target="_blank" rel='noopener noreferrer'>Netlify</a>
                <a style={{marginRight: '20px', background: 'transparent', color: '#ad7c18', textDecorationLine: 'none'}} href="https://expressjs.com/" target="_blank" rel='noopener noreferrer'>Express.js</a>
                <a style={{marginRight: '20px', background: 'transparent', color: '#ad7c18', textDecorationLine: 'none'}} href="https://nodejs.org/en/" target="_blank" rel='noopener noreferrer'>Node.js</a>
                <a style={{marginRight: '20px', background: 'transparent', color: '#ad7c18', textDecorationLine: 'none'}} href="https://mongoosejs.com/" target="_blank" rel='noopener noreferrer'>Mongoose</a>
                </LanguagesUsed>
                <AiOutlineLink style={{margin: '20px'}} className="globalEffect1" size='1.6rem' onClick={()=> window.open("https://cobblestone-place.netlify.app/", "_blank")} />
                <RiGithubLine style={{margin: '20px 20px 20px 0px'}} className="globalEffect1" size='1.6rem' onClick={()=> window.open("https://github.com/clinton-f/Community-Website", "_blank")}/>
            </WorkTxt1>

            </WorkSample1 >
            </Fade>  

            <Fade bottom> 
            <WorkSample2>

                <WorkImage2 className="cell"><img src={HRHomePageWide} className="sepia2" alt="Python HR App" /></WorkImage2>
                
                <WorkTxt2 style={{position: 'relative'}}>
                    <FeatureProject className="featureProject">Featured Project</FeatureProject>
                    <AppTitle className="appTitle" style={{color: '#6b0905'}}>HR Management</AppTitle>
                    <AppDescription className="appDescription">This Python multi-page application allows the user in an HR position to keep track of employees, add, remove, pay, or edit their information.It was built using Python bags, sets, stacks, and more.</AppDescription>
                    <LanguagesUsed className="languagesUsed">
                        <a style={{marginRight: '20px', background: 'transparent', color: '#ad7c18', textDecorationLine: 'none'}} href="https://streamlit.io/" target="_blank" rel='noopener noreferrer'>Streamlit</a>
                        <a style={{marginRight: '20px', background: 'transparent', color: '#ad7c18', textDecorationLine: 'none'}} href="https://pandas.pydata.org/" target="_blank" rel='noopener noreferrer'>Pandas</a>
                        <a style={{marginRight: '20px', background: 'transparent', color: '#ad7c18', textDecorationLine: 'none'}} href="https://numpy.org/" target="_blank" rel='noopener noreferrer'>Numpy</a>
                    </LanguagesUsed>
                    <AiOutlineLink style={{margin: '20px'}} className="globalEffect1" size='1.6rem' onClick={()=> window.open("https://clinton-f-python-hr-system-app-k15f3u.streamlitapp.com/", "_blank")} />
                    <RiGithubLine style={{margin: '20px 20px 20px 0px'}} className="globalEffect1" size='1.6rem' onClick={()=> window.open("https://github.com/clinton-f/Python-HR-System", "_blank")}/>
                </WorkTxt2>
            </WorkSample2>
            </Fade>

            <Fade bottom>
            <WorkSample1>

            <WorkImage1 className="cell"><img src={FitnessDirectory} className="sepia" alt="CMS Website" /></WorkImage1>


            <WorkTxt1 style={{position: 'relative'}}>
                <FeatureProject className="featureProject" >Featured Project</FeatureProject>
                <AppTitle className="appTitle"  style={{color: '#FF2625'}}>Fitness Directory</AppTitle>
                <AppDescription className="appDescription" >Fitness Directory is a React.js website I built using a workout API, JavaScript, and more where you can search for more than 1000 workouts you can do both at home or at the gym.</AppDescription>
                <LanguagesUsed className="languagesUsed" >
                <a style={{marginRight: '20px', background: 'transparent', color: '#ad7c18', textDecorationLine: 'none'}} href="https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/details" target="_blank" rel='noopener noreferrer'>ExerciseDB-API</a>
                <a style={{marginRight: '20px', background: 'transparent', color: '#ad7c18', textDecorationLine: 'none'}} href="https://github.com/heroku" target="_blank" rel='noopener noreferrer'>Heroku</a>
                <a style={{marginRight: '20px', background: 'transparent', color: '#ad7c18', textDecorationLine: 'none'}} href="https://www.npmjs.com/package/react-router-dom" target="_blank" rel='noopener noreferrer'>React-Router-DOM</a>
                <a style={{ background: 'transparent', color: '#ad7c18', textDecorationLine: 'none'}} href="https://mui.com/" target="_blank" rel='noopener noreferrer'>MUI</a>
                </LanguagesUsed>
                <AiOutlineLink style={{margin: '20px'}} className="globalEffect1" size='1.6rem' onClick={()=> window.open("https://fitnessdirectory.netlify.app", "_blank")} />
                <RiGithubLine style={{margin: '20px 20px 20px 0px'}} className="globalEffect1" size='1.6rem' onClick={()=> window.open("https://github.com/clinton-f/react_fitness_directory_website", "_blank")}/>
            </WorkTxt1>

            </WorkSample1 >
            </Fade>

        </WorkSectionContainer>
    )
}

export default WorkSection;