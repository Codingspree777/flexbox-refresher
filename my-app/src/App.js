import React, { useState, useEffect } from 'react';
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
  const [sortedToppings, setSortToppings] = useState();

  useEffect(() => {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://www.olo.com/pizzas.json';
    const fetchData = async () => {
      await fetch(proxyUrl + targetUrl)
        .then(response => response.json())
        .then(data => setPizzaOrders(data))
        .catch(error => alert(error));
    };
    fetchData();
  }, []);

  const setPizzaOrders = pizzaOrders => {
    if (pizzaOrders) {
      const tallyToppings = new Map();

      pizzaOrders.forEach(ele => {
        if (!tallyToppings.has(ele)) {
          tallyToppings.set(ele, 1);
        } else {
          tallyToppings.set(ele, tallyToppings.get(ele) + 1);
        }
      });
      setSortToppings(tallyToppings);
    }
  };

  if(sortedToppings) {
    console.log(sortedToppings)
  }

  const Bars = testData.map((ele, index) => {
    return (
      <Bar dataHeight={ele.quantity} key={index}>
        <ToolTip> {`qty ${ele.quantit}`}</ToolTip>
      </Bar>
    );
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
