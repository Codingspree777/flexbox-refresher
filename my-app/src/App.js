import React from 'react';
import { testData } from './data';
import {
  Main,
  Header,
  OuterContainer,
  BarContainer,
  Bar,
  LegendContainer,
  Products,
  Text,
  ToolTip
} from './reuseableStyleComp';

function App() {
  const Bars = testData.map((ele, index) => {
    return <Bar dataHeight={ele.quantity} key={index}>
      <ToolTip> {`qty ${ele.quantity}`}</ToolTip>
    </Bar>;
  });

  const Product = testData.map(ele => {
    return (
      <Products key={ele.name}>
        <Text>{ele.name}</Text>
      </Products>
    );
  });

  return (
    <Main>
      <Header>My Bar</Header>
      <OuterContainer>
        <BarContainer>{Bars}</BarContainer>
      </OuterContainer>
      <OuterContainer>
        <LegendContainer>{Product}</LegendContainer>
      </OuterContainer>
    </Main>
  );
}

export default App;
