import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Title } from './components/Title'
import {Wrapper} from './components/Wrapper'
import { DarkBackground } from './components/BackgroundDark'
import { LeftRightAlignContainer } from './components/LeftRightAlignContainer'
import { Padding10 } from './components/Padding10'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Wrapper>
    <DarkBackground>
      <Padding10>
      <LeftRightAlignContainer>
       <Title>
      Deposit ATOM
     </Title>
      <span>×</span>
     </LeftRightAlignContainer>
     </Padding10>
     <input></input>
     ->
     <input></input>

     
     <div>
     <span>Select Amount</span>
     <span>Available 2 ATOM</span>
     </div>
     <input></input>
     <div>
      <span>Max</span>
      <span>1/2</span>
      <span>1/3</span>
     </div>
     <div>Estimated time: 20 seconds</div>
     <button>Transfer</button>
     <button>Cancel</button>
     
     </DarkBackground>
     </Wrapper>
    </>
  )
}

export default App
