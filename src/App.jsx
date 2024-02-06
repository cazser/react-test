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
import { RightAlignContainer } from './components/RightAlignContainer'
import { Font8px } from './components/Font8px'
import { Padding8 } from './components/Padding8'
import { Padding4 } from './components/Padding4'
import { LineButton } from './components/LineButton'
import { MarginTopBottom10px } from './components/MarginTopBotton10px'
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
      <Padding10>
     <LeftRightAlignContainer>
     <span>Select Amount</span>
     <span>Available 2 ATOM</span>
     </LeftRightAlignContainer>
     </Padding10>
     <Padding10>
     <input placeholder='1111'></input>
    </Padding10>
    <Padding4>
     <RightAlignContainer>
      <Font8px>Max</Font8px>
      <Font8px>1/2</Font8px>
      <Font8px>1/3</Font8px>
     </RightAlignContainer>
     </Padding4>
     <Padding4>
      <Font12px>
     <span>Estimated time: 20 seconds</span>
     </Font12px>
     </Padding4>
     <Padding10>
      
     <LineButton>Transfer</LineButton>
     <MarginTopBottom10px>
     <LineButton>Cancel</LineButton>
     </MarginTopBottom10px>
     </Padding10>
     </DarkBackground>
     </Wrapper>
    </>
  )
}

export default App
