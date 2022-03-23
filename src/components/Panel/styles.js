
import styled from 'styled-components';
const Wrapper = styled.div `
    div {
        margin-left:19rem ;
        margin-right: 2rem ;
        background: rgba(0,0,0,0.1);
        height: 76vh ;
        border-radius: 10px ;
        box-shadow: 0px 0px 6px 0px #000000;
        display: flex ;
        justify-content: center ;
    }
    `
    const Location = styled.div `

    margin-top: 4rem ;
    h2 {
        font-family: 'Times New Roman', Times, serif ;
        padding: 1rem;
        font-size: 1rem ;
        align-items: center;
        font-family:Arial, Helvetica, sans-serif;
        }
    a {
        text-decoration:none ;
    }
    `

    const Container = styled.div `
        background-color:  #f6f6f6;
        margin-left: 16rem;
        margin-right:3.5rem;
        height: 82vh;
        border-radius: 2px;
        box-shadow: 1px 1px 5px 0px #000000;
    `

    
    const PannelBody  = styled.div`
      
    `;

    const HeaderContainer = styled.div `
    display: flex;
    justify-content: flex-end;
    background-color: white;

    span {
        cursor: pointer;
    }
    `

    export default PannelBody ;


export {
    Wrapper,
    Location,
    Container,
    PannelBody,
    HeaderContainer
  }