
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
    h1 {
        font-family: 'Times New Roman', Times, serif ;
        margin-left: 19rem;
        margin-bottom: 2rem ;
        margin-top: 4rem ;
        font-size: 1.3rem ;
        }
    a {
        text-decoration:none ;
    }
    `

    const Container = styled.div `
        
    `


export {
    Wrapper,
    Location,
    Container  
  }