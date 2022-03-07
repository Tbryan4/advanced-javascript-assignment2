import styled from 'styled-components';

const Container = styled.div`
    display: flex ;
    justify-content: center ;
    flex-direction:column ;

h1 {
    font-size:13rem ;
    font-weight: bold ;
}
p {
    text-align:center ;
}

img {
    height: 300px ;
    width: 300px ;
    margin-right:5rem ;
}
`;

const ContainerFlex = styled.div`
  justify-content: center ;
  align-items: center ;
  top: 50% ;
  transform: translateY(75%);
  display: flex ;
`;

const HomeLink = styled.div `
    display:flex ;
    justify-content: center ;
    margin-top:15rem ;
`

document.body.style = 'background: wheat;';



export {Container,ContainerFlex,HomeLink} ;