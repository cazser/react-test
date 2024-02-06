import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Title } from './components/Title'
import {Wrapper} from './components/Wrapper'
import { DarkBackground } from './components/BackgroundDark'
import { LeftRightAlignContainer } from './components/LeftRightAlignContainer'
import { Padding10 } from './components/Padding10'
import { TopBottomAlignContainer } from './components/TopBottomAlignContainer'
import { Font12px } from './components/Font12px'
import { MarginTopBottom4px } from './components/MarginTopBottom4px'
import { TextAlignCenter } from './components/TextAlignCenter'

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
     <Padding10>
      <LeftRightAlignContainer>
        <TopBottomAlignContainer>
          <MarginTopBottom4px>
          <Font12px>From Cosmos Hub</Font12px>
          </MarginTopBottom4px>
          <input></input>
        </TopBottomAlignContainer>
           <TextAlignCenter>-></TextAlignCenter>
      <TopBottomAlignContainer>
          <MarginTopBottom4px>
          <Font12px>To Osmosis</Font12px>
          </MarginTopBottom4px>
          <input></input>
        </TopBottomAlignContainer>
     </LeftRightAlignContainer>
    </Padding10>

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
