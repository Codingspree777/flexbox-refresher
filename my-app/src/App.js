import React, {useState, useEffect} from 'react';
import { testData } from './data';
import {
  Main,
  Header,
  OuterContainer,
  BarContainer,
  Bar,
  LegendContainer,
  Toppings,
  Text,
  ToolTip
} from './reuseableStyleComp';

function App() {
  
  const [pizzaOrders, setPizzaOrders] = useState();

  useEffect(()=>{
    const fetchData = async () => {
      await fetch('https://www.olo.com/pizzas.json')
        .then(response => response.json())
        .then(data => {
          setPizzaOrders(data)
        })
        .catch(error => alert(error));
    };
    fetchData();
  }, [])
  console.log(pizzaOrders)
  const Bars = testData.map((ele, index) => {
    return <Bar dataHeight={ele.quantity} key={index}>
      <ToolTip> {`qty ${ele.quantity}`}</ToolTip>
    </Bar>;
  });

  const Product = testData.map(ele => {
    return (
      <Toppings key={ele.name}>
        <Text>{ele.name}</Text>
      </Toppings>
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
