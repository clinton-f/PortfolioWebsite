import styled from 'styled-components'


export const WorkSectionContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 105px;
    padding-bottom: 105px;

    display: grid;
    grid-template-rows: 1fr 1fr 1fr;

    row-gap: 150px;

    @media screen and (max-width: 768px){
}
  
    @media screen and (max-width: 480px){
}
`
export const WorkSample1 = styled.div `
    grid-row-start: 1;
    grid-row-end: 2;
    height: 600px;
    width: 75vw;
    background: white;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;  

    
    @media screen and (max-width: 768px){
    height: 75vh;
    width: 90vw;

}
  
    @media screen and (max-width: 480px){
    height: 60vh;
}
`

export const WorkImage1 = styled.div `
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 7;

@media screen and (max-width: 768px){
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 7;
}

    background: green;
`
export const WorkTxt1 = styled.div `
    grid-column-start: 7;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 7;

    text-align: right;
    align-self: center;

    background: none;

    @media screen and (max-width: 768px){
    grid-column-start: 7;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 7;

    text-align: left;
    align-self: center;
}
    
`


export const WorkSample2 = styled.div `
    grid-row-start: 2;
    grid-row-end: 3;
    height: 600px;
    width: 75vw;
    background: white;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 768px){
    height: 75vh;
    width: 90vw;

}
  
    @media screen and (max-width: 480px){
    height: 60vh;
}
`

export const WorkImage2 = styled.div `
    grid-column-start: 7;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 7;

    background: green;

    @media screen and (max-width: 768px){
    grid-column-start: 7;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 7;
}
`

export const WorkTxt2 = styled.div `
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 7;

    text-align: left;
    align-self: center;
    background: none;

    @media screen and (max-width: 768px){
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 7;
}
`

export const WorkSample3 = styled.div `
    grid-row-start: 3;
    grid-row-end: 4;
    height: 600px;
    width: 75vw;
    background: white;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 768px){
    height: 75vh;
    width: 90vw;

}
  
    @media screen and (max-width: 480px){
    height: 60vh;
}
`

export const WorkImage3 = styled.div `
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 7;

    background: green;

    @media screen and (max-width: 768px){
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 7;
}
`

export const WorkTxt3 = styled.div `
    grid-column-start: 7;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 7;
    
    text-align: right;
    align-self: center;
    background: none;

    @media screen and (max-width: 768px){
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 7;

    text-align: left;
    align-self: center;
}
`
export const FeatureProject = styled.div `
`
export const AppTitle = styled.div `
`
export const AppDescription = styled.div `
`
export const LanguagesUsed = styled.div `
`
export const ProjectFile = styled.div `
`
export const ProjectLink = styled.div `
`