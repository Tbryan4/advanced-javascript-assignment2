import styled from 'styled-components';

const Container = styled.div`
    display: flex ;
    justify-content: center ;
    flex-direction:column ;

body {
    background-color: lightgray;
}

h1 {
    font-size:13rem ;
    font-weight: bold ;
}
p {
    text-align:center ;
    font-size: 2rem;
    font-family: 'Courier New', Courier, monospace;
    color: white;
}

Button {
    margin-top: 2rem;
    margin-left: 6.5rem; 
}

Button:hover {
    width: 11rem;
    height: 4rem;
    transition: 0.5s ease-in-out;
    background-color: white;
    color: black;
}
`

const ContainerFlex = styled.div`
  justify-content: center ;
  display: flex ;
  height: 100vh;
`;




const LeftContainer = styled.div`
  background-color: crimson;
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
      width:50rem;
  }
`
;


const RightContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;

  h1 {
      color: crimson;
  }
`;






export {Container,ContainerFlex,LeftContainer,RightContainer} ;