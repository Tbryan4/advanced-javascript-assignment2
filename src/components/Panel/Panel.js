import React from 'react'
import { Location, Container,PannelBody } from './styles'

 function Panel(title, ...props) {
  return (
    <>
        
        <Container>
          <Location>
            <h2>{ "Display Pannel"}</h2>
            <p>hello</p>
          </Location>
          <PannelBody>

          </PannelBody>

        </Container>
    </>
  )
}

export default Panel
