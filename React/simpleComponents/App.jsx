import React from 'react'
import styled from 'styled-components'
import Greeting from './Greeting.jsx'

const App = () => {
  return (
   <Greeting name='Fifi'/>
  )
}

const Button = styled.button`
  font-size: 2rem;
`

export default App