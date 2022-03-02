import styled from 'styled-components';

const Button = styled.button`
 
background-color: ${props => props.bc || "transparent"}; ;
border: ${props => props.border || 'none'};;
border-radius: ${props => props.radius || "3px"};;
margin: ${props => props.margin || "0"};
box-shadow: 0 0 3px 0px rgb(220, 220, 220);
padding: ${props => props.padding || "0.25rem 1.5rem"};;
color: ${props => props.color || "grey"};
font-size: ${props => props.fs || "1rem"};;
width: ${props => props.width || "100%"};
cursor: pointer;

`;
const IconButton = styled.button`   
        border:none;
        background-color: transparent;
`;


const SubmitButton = styled(Button)`
    background-color: ${props => props.bgcolor || 'black'};
    color: ${props => props.color || '#f8fafc'}; 
    font-weight: ${props => props.fw || '700'}; 
    font-size: ${props => props.fs || '14px'};
    box-shadow: 0 0 3px 0px black;

    &&:hover {
        background-color: #A7252C;
        color: white;
        transition: ease-in-out 0.5s;
        transform: translateY(-2px)
    }
`

export {Button, IconButton, SubmitButton}


 
 