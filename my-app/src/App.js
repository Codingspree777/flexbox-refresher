import React from 'react';
import { testData } from './data';
import {Main, Header, OuterContainer, BarContainer, Bar} from './reuseableStyleComp';

function App() {
  const Bars = testData.map((ele)=>{
    return (
      <Bar dataHeight={ele.quantity}></Bar>
    )
  })
  return (
    <Main>
      <Header>My Bar</Header>
      <OuterContainer>
        <BarContainer>
          {Bars}
        </BarContainer>
      </OuterContainer>
    </Main>
  );
}

export default App;
