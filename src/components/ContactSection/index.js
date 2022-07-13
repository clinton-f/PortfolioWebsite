import { Button } from '../ButtonElement';
import {ContactSectionContainer, ContactPart, ContactP1, ContactH1, ContactP2, ContactButton, FooterSection, Signature} from './ContactElements';
import React, {useState, useRef, useEffect} from 'react';

const ContactSection = (props) => {

const [isVisible, setVisible] = useState(false);

const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting && setVisible(true));
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

    return (
        <ContactSectionContainer id='Contact'>

            <ContactPart ref={ domRef } className={ `first-wordS ${ isVisible ? 'is-visible' : '' }` }>
            
                <ContactP1>What's Next?</ContactP1>
                <ContactH1>Get In Touch</ContactH1>
                <ContactP2>I am currently open and looking for new opportunity offers, but if you have questions or just want to say hello👋, my inbox is always open so feel free to send me an email and I’ll get back to you.</ContactP2>
            
                <ContactButton>
                    <Button onClick={()=> window.open("mailto:clintonfabian7@gmail.com?subject=Contacting you from your porfolio site&body=Reason for business%20goes%20here", "_blank")}>   
                    Get In Touch
                    </Button>
                </ContactButton>
                { props.children }
            </ContactPart>
            
            <FooterSection >
            <Signature >Design & Built by Clinton Fabian</Signature>  
            </FooterSection>

            
        </ContactSectionContainer>
    )
}
export default ContactSection;

