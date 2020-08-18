import React from 'react';
import { testData } from './data';
import './App.css';

function App() {
  const barLegend = testData.map((ele)=>{
    return (
      <div className='bar-legend'>{ele.name}</div>
    )
  })
  const barData = testData.map((ele)=>{
    console.log(ele.quantity)
    return (
        <div className="bar-data" style={{height: ele.quantity}}/>
    )
  })
  return (
    <div className='App'>
      <h1>My Bar</h1>
      <div className='main-container'>
        <div className='bar-container'>
        {barData}
        </div>
      </div>
      <div className='legend-container'>
      {barLegend}
      </div>
    </div>
  );
}

export default App;
