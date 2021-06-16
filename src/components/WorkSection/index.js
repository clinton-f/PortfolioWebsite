import React from 'react';
import {WorkSectionContainer, WorkSample1, WorkSample2, WorkSample3, WorkImage1, WorkImage2, WorkImage3, WorkTxt1, WorkTxt2, WorkTxt3, FeatureProject, AppTitle, AppDescription, LanguagesUsed, ProjectFile, ProjectLink} from './WorkElements';
import Fade from 'react-reveal/Fade';

const WorkSection = () => {


    return (
        <WorkSectionContainer id='Tech'>
            <Fade bottom distance={"50%"}>  
            <WorkSample1>
                
                <WorkImage1 className="cell"><img src="" className="sepia"/></WorkImage1>

                <WorkTxt1>
                    <FeatureProject className="featureProject">Featured Project</FeatureProject>
                    <AppTitle className="appTitle">OctoProfile</AppTitle>
                    <AppDescription className="appDescription">A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.</AppDescription>
                    <LanguagesUsed className="languagesUsed">../C/C++/C#</LanguagesUsed>
                    <ProjectFile className="projectFile">@</ProjectFile>
                    <ProjectLink className="projectLink">@</ProjectLink>

                </WorkTxt1>
            </WorkSample1 >
            </Fade>  

            <Fade bottom> 
            <WorkSample2>

                <WorkImage2 className="cell"><img src="" className="sepia"/></WorkImage2>
                
                <WorkTxt2>
                    <FeatureProject className="featureProject">Featured Project</FeatureProject>
                    <AppTitle className="appTitle">OctoProfile</AppTitle>
                    <AppDescription className="appDescription">A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.</AppDescription>
                    <LanguagesUsed className="languagesUsed">../C/C++/C#</LanguagesUsed>
                    <ProjectFile className="projectFile">@</ProjectFile>
                    <ProjectLink className="projectLink">@</ProjectLink>
                </WorkTxt2>
            </WorkSample2>
            </Fade>

            <Fade bottom>
            <WorkSample3>

                <WorkImage3 className="cell"><img src="" className="sepia"/></WorkImage3>

                <WorkTxt3>
                    <FeatureProject className="featureProject">Featured Project</FeatureProject>
                    <AppTitle className="appTitle">OctoProfile</AppTitle>
                    <AppDescription className="appDescription">A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.</AppDescription>
                    <LanguagesUsed className="languagesUsed">../C/C++/C#</LanguagesUsed>
                    <ProjectFile className="projectFile">@</ProjectFile>
                    <ProjectLink className="projectLink">@</ProjectLink>
                </WorkTxt3>

            </WorkSample3>
            </Fade>

        </WorkSectionContainer>
    )
}

export default WorkSection;