import styled from 'styled-components';
import { Link } from 'react-scroll';


export const Button = styled(Link)`
    vertical-align: middle;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    box-shadow: 0 25px 45px rgba(0,0,0,0.1);
    border: 1px solid #ad7c18;
    white-space: nowrap;
    padding: 10px 30px;
    color: #ad7c18;
    font-size: 18px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(129, 129, 129, 0.466);
    color: #ad7c18;}
    margin-bottom: 40px;


    @media screen and (max-width: 768px){
    justify-content: center;
}
`;