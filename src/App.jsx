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
import { ColorGrey } from './components/ColorGrey'
import { Margin2px } from './components/Margin2px'
import { Background222428 } from './components/Background222428'
import { Background141417 } from './components/Background141417'
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
            <ColorGrey>
              <Font12px>From Cosmos Hub</Font12px>
            </ColorGrey>
          </MarginTopBottom4px>
          <Background141417>
            <ColorGrey>
            <img src="./assets/react.svg"/>
            <Font12px>
            atom1xy5y...m6wwz9a
            </Font12px>
            </ColorGrey>
          </Background141417>
        </TopBottomAlignContainer>
          <ColorGrey>
            <TextAlignCenter>-></TextAlignCenter>
          </ColorGrey>
      <TopBottomAlignContainer>
          <MarginTopBottom4px>
            <ColorGrey>
            <Font12px>To Osmosis</Font12px>
            </ColorGrey>
          </MarginTopBottom4px>
         <Background141417>
            <ColorGrey>
            <Font12px>
            osmo1xy5y...w9a
            </Font12px>
            </ColorGrey>
          </Background141417> 
        </TopBottomAlignContainer>
     </LeftRightAlignContainer>
    </Padding10>
      <Padding10>
     <LeftRightAlignContainer>
      <ColorGrey>
        <span>Select Amount</span>
     </ColorGrey>
     <ColorGrey>
     <span>Available 2 ATOM</span>
     </ColorGrey>
     </LeftRightAlignContainer>
     </Padding10>
     <Padding10>
     <input placeholder='1111'></input>
    </Padding10>
    <Padding4>
     <RightAlignContainer>
      <ColorGrey>
      <Margin2px>
        <Background222428>
        <Font8px>Max</Font8px>
        </Background222428>
      </Margin2px>
      <Margin2px>
        <Background222428>
        <Font8px>1/2</Font8px>
        </Background222428>
      </Margin2px>
      <Margin2px>
        <Background222428>
        <Font8px>1/3</Font8px>
        </Background222428>
      </Margin2px>
      </ColorGrey>
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
