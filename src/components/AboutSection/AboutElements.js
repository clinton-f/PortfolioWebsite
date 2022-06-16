import styled from 'styled-components'

export const AboutSectionContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    background: #101d30; 
    z-index: 998;

    /* Add :before styles  */
    @media screen and (max-width: 768px){
        /* z-index: 500;
        height: 1000px; */
}
  
    @media screen and (max-width: 480px){
    /* font-size: 32px;
    z-index: 500;
    height: auto; */
}
`
export const AboutBackgroundText = styled.div `
color: rgba(167, 167, 167, 0.2);
background: none;
background: rgba(0, 0, 0, 0);
font-weight: bold;
font-size: 30vw;
position: absolute;
vertical-align: auto;
z-index: 1;

@media screen and (max-width: 480px){
    color: rgba(167, 167, 167, 0.5);
}
`

export const AboutWrapper = styled.div `
    background-color: #6b0905;
    color: #aaaaaa;
    background: rgba(16, 29, 48, 0.089);
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.25);
    border-left: 1px solid rgba(59, 82, 120, 0.452);
    border-bottom: 1px solid rgba(59, 82, 120, 0.452);
    border-right: 1px solid rgba(59, 82, 120, 0.25);
    border-top: 1px solid rgba(59, 82, 120, 0.25);
    backdrop-filter: blur(5px);
    /* display: flex;
    justify-content: center;
    align-items: center; */

    z-index: 1;

    position: absolute;

    height: 80vh;
    width: 78vw;

    @media screen and (max-width: 768px){


    /* grid-template-columns: 6fr 6fr 6fr 6fr 6fr 6fr;
    grid-template-rows: 1fr 2fr 2fr 4fr 4fr 7fr;



    background: rgba(16, 29, 48, 0.089);
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.25);
    border-left: 1px solid rgba(59, 82, 120, 0.452);
    border-bottom: 1px solid rgba(59, 82, 120, 0.452);
    border-right: 1px solid rgba(59, 82, 120, 0.25);
    border-top: 1px solid rgba(59, 82, 120, 0.25);
    backdrop-filter: blur(5px); */
}
  
    @media screen and (max-width: 480px){
    /* margin-top: 20px;
    margin-bottom: 20px;
    height: 1400px;
    width: 90vw;

    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */

    height: 700px;
    width: 80vw;
}
`

export const AboutTitle = styled.div `
/* color: #e4ddc0;
border: 1px solid #e4ddc0;
background-color: none;
margin-left: 20px solid #e4ddc0;
align-content: center;
text-align: center;
font-size: 40px;
z-index: 2; */


@media screen and (max-width: 768px){
    /* grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 2; */

}
  
    @media screen and (max-width: 480px){

    /* grid-column-start: 1;
    grid-column-end: 10;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: 20px 20px 0px 20px; */
}
`

export const ProfileImg = styled.image `

background: rgba(16, 29, 48, 0.4);
box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.25);
border-left: 1px solid rgba(59, 82, 120, 0.452);
border-bottom: 1px solid rgba(59, 82, 120, 0.452);
border-right: 1px solid rgba(59, 82, 120, 0.25);
border-top: 1px solid rgba(59, 82, 120, 0.25);
backdrop-filter: blur(5px);

// Image container sizes

    /* grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4; */
    //margin: 20px 0px 0px 20px;


z-index: 998;

@media screen and (max-width: 768px){
    
    /* grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 5;
    margin: 0px 20px 0px 20px; */

    background: rgba(16, 29, 48, 0.4);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.25);
    border-left: 1px solid rgba(59, 82, 120, 0.452);
    border-bottom: 1px solid rgba(59, 82, 120, 0.452);
    border-right: 1px solid rgba(59, 82, 120, 0.25);
    border-top: 1px solid rgba(59, 82, 120, 0.25);
    backdrop-filter: blur(2px);
}
  
    @media screen and (max-width: 480px){

    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;

    margin: 10px;

    /* grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 2;
    grid-row-end: 8;
    margin: 0px 20px 0px 20px; */
}

`

export const AboutRow1 = styled.div `
background-color: transparent;
/* background: rgba(16, 29, 48, 0.4);
box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.25);
border-left: 1px solid rgba(59, 82, 120, 0.452);
border-bottom: 1px solid rgba(59, 82, 120, 0.452);
border-right: 1px solid rgba(59, 82, 120, 0.25);
border-top: 1px solid rgba(59, 82, 120, 0.25);
backdrop-filter: blur(5px); */

margin: 5px 20px 0px 20px;

top: 0px;
right: 0px;

border-bottom: 2px dashed;
p {
    background-color: transparent;
}

font-size: 20px;
//padding: 12px;
    @media screen and (max-width: 768px){
    /* grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 2;
    grid-row-end: 5;
    margin: 0px 20px 0px 20px;

    background: rgba(16, 29, 48, 0.4);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.25);
    border-left: 1px solid rgba(59, 82, 120, 0.452);
    border-bottom: 1px solid rgba(59, 82, 120, 0.452);
    border-right: 1px solid rgba(59, 82, 120, 0.25);
    border-top: 1px solid rgba(59, 82, 120, 0.25);
    backdrop-filter: blur(2px);

    font-size: 17px; */
}
  
    @media screen and (max-width: 480px){


    /* grid-column-start: 1;
    grid-column-end: 10;
    grid-row-start: 8;
    grid-row-end: 12;
    margin: 0px 20px 0px 20px;

    //About Description
    font-size: 20px;
    padding: 12px; */

    
    
}
`

export const Rtro = styled.div `
`


export const Column1 = styled.div `
    background-color: transparent;
    /* background: rgba(16, 29, 48, 0.4);
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.25);
    border-left: 1px solid rgba(59, 82, 120, 0.452);
    border-bottom: 1px solid rgba(59, 82, 120, 0.452);
    border-right: 1px solid rgba(59, 82, 120, 0.25);
    border-top: 1px solid rgba(59, 82, 120, 0.25); */
    backdrop-filter: blur(5px);
    //position: absolute;


    font-weight: 600;
    margin: 10px;
    font-size: 18px;
    

    /* box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box; */

    /* grid-column-start: 3;
    grid-column-end: 7;
    grid-row-start: 3;
    grid-row-end: 4; */
    margin: 20px 20px 0px 20px;
    @media screen and (max-width: 768px){
    /* grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 5;
    grid-row-end: 6;

    margin: 0px 20px 0px 20px;

    background: rgba(16, 29, 48, 0.4);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.25);
    border-left: 1px solid rgba(59, 82, 120, 0.452);
    border-bottom: 1px solid rgba(59, 82, 120, 0.452);
    border-right: 1px solid rgba(59, 82, 120, 0.25);
    border-top: 1px solid rgba(59, 82, 120, 0.25);
    backdrop-filter: blur(2px);
    font-size: 17px; */
}
  
    @media screen and (max-width: 480px){


    /* grid-column-start: 1;
    grid-column-end: 10;
    grid-row-start: 12;
    grid-row-end: 16;

    //2nd About Description
    font-size: 20px;
    padding: 12px; */
}
`

export const TextWrapper1 = styled.div `
/* background: rgba(16, 29, 48, 0.4);
box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.25);
border-left: 1px solid rgba(59, 82, 120, 0.452);
border-bottom: 1px solid rgba(59, 82, 120, 0.452);
border-right: 1px solid rgba(59, 82, 120, 0.25);
border-top: 1px solid rgba(59, 82, 120, 0.25);
backdrop-filter: blur(5px);

font-size: 20px;
padding: 12px;

z-index: 2; */

    /* grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 4;
    grid-row-end: 6;
    margin: 0px 20px 20px 20px; */

    @media screen and (max-width: 768px){
    /* grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 6;
    grid-row-end: 7;
     

    background: rgba(16, 29, 48, 0.4);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.25);
    border-left: 1px solid rgba(59, 82, 120, 0.452);
    border-bottom: 1px solid rgba(59, 82, 120, 0.452);
    border-right: 1px solid rgba(59, 82, 120, 0.25);
    border-top: 1px solid rgba(59, 82, 120, 0.25);
    backdrop-filter: blur(2px);
    font-size: 17px; */
}
  
    @media screen and (max-width: 480px){


    /* grid-column-start: 1;
    grid-column-end: 10;
    grid-row-start: 16;
    grid-row-end: 18;

    font-size: 16px;
    padding: 12px; */
}
`
export const Technologies = styled.div `
/* color:#55a08d;
font-size: 18px;

display: grid;
margin-top: 5px;
justify-items: center;
grid-template-columns: auto auto auto auto auto auto;

@media screen and (max-width: 768px){

}
@media screen and (max-width: 480px){
    grid-template-columns: auto auto auto;
    grid-row: 2;
    
} */
`

export const Logo = styled.div `

`