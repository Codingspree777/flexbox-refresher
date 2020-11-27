import React, { useState, useEffect } from 'react';
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

const initialState = [];

function App() {
  const [top20, setTop20] = useState(initialState);

  useEffect(() => {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://www.olo.com/pizzas.json';
    const fetchData = () => {
      fetch(proxyUrl + targetUrl)
        // fetch(targetUrl, options)
        .then(response => response.json())
        .then(data => setPizzaOrders(data))
        .catch(error => alert(error));
    };
    fetchData();
  }, []);

  const setPizzaOrders = pizzaOrders => {
    if (pizzaOrders) {
      const tallyToppings = pizzaOrders.reduce((temp, key) => {
        if (!temp[key.toppings]) {
          temp[key.toppings] = 0;
        }
        temp[key.toppings]++;
        return temp;
      }, {});

      const getTop20 = Object.entries(tallyToppings)
        .sort((a, b) => {
          if (a[1] > b[1]) return -1;
        })
        .slice(0, 20);
      setTop20(getTop20);
    }
   
  };
  
  let Bars;
  if (top20) {
    Bars = top20.map((ele, index) => {
      return (
        <Bar dataWidth={ele[1] / 10} key={index}>
          <ToolTip> {`${ele[1]} orders`}</ToolTip>
        </Bar>
      );
    });
  }

  let Product;
  if (top20) {
    Product = top20.map(ele => {
      return (
        <Toppings key={ele}>
          <Text>{ele[0]}</Text>
        </Toppings>
      );
    });
  }

  return (
    <Main>
      <Header>Top 20 Pizza Toppings Orders</Header>
      <OuterContainer>
        <LegendContainer>{Product}</LegendContainer>
        <BarContainer>{Bars}</BarContainer>
      </OuterContainer>
    </Main>
  );
}

export default App;
