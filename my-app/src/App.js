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
  const [sortedToppings, setSortToppings] = useState(initialState);
  const [top20, setTop20] = useState(initialState);

  useEffect(() => {
    // const options = {
    //   method: 'GET',
    //   mode: 'no-cors',
    //   'Content-Type': 'binary/octet-stream'
    // };
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
      setSortToppings(tallyToppings);

      const getTop20 = Object.values(tallyToppings)
        .sort((a, b) => b - a)
        .slice(0, 20);
      setTop20(getTop20);
    }
  };

  let Bars;
  if (top20) {
    Bars = top20.map((ele, index) => {
      return (
        <Bar dataWidth={ele / 10} key={index}>
          <ToolTip> {`${ele} orders`}</ToolTip>
        </Bar>
      );
    });
  }

  let Product;
  if (top20) {
    Product = top20.map(ele => {
      const key = Object.keys(sortedToppings).find(
        key => sortedToppings[key] === ele
      );
      return (
        <Toppings key={ele}>
          <Text>{key}</Text>
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
