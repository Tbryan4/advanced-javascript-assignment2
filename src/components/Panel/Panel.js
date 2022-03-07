import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Location, Container } from './styles'

 function Panel() {
  return (
    <>
        
        <Container>
          <Location>
            {/* <Link to={"/dashboard"}><h1 className='main-page-header'>Home</h1></Link> */}
          </Location>
          {/* <Wrapper>
            <div></div>
          </Wrapper> */}
        </Container>
    </>
  )
}

export default Panel
