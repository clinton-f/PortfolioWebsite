import styled from 'styled-components'


export const ContactSectionContainer = styled.div `
    align-content: center;
    text-align: center;
    color: #aaaaaa;
    height: 755px;

    @media screen and (max-width: 768px){
        z-index: 500;
}
  
    @media screen and (max-width: 480px){
    z-index: 500;
}
`

export const ContactPart = styled.div `
color: #aaaaaa;
margin: 0px 400px 100px 400px;
padding-top: 215px;

@media screen and (max-width: 768px){
    margin: 0px 150px 100px 150px;
}
@media screen and (max-width: 480px){
    margin: 0px 0px 0px 0px;
    padding-top: 160px;
}
`
export const ContactP1 = styled.div `
font-size: 1.3rem;
`
export const ContactH1 = styled.div `
font-size: 50px;
font-weight: 900px;
padding: 20px;


@media screen and (max-width: 480px){
    font-size: 30px;
}
`


export const ContactP2 = styled.div `
    padding: 20px;
    font-size: 1.15rem;

@media screen and (max-width: 480px){
    padding: 30px;
}
`


export const ContactButton = styled.div `
    padding: 40px;
`

export const FooterSection = styled.div `
`
export const Signature = styled.div `
padding: 40px;

@media screen and (max-width: 768px){
}
@media screen and (max-width: 480px){
    padding: 70px;
}
`