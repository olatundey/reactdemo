import logo from './logo.svg';
import './App.css';
// import { Component } from 'react';
// import Addition from './Components/addition';
// import Sum from './Components/sum';
// import Product from './Product';
import React, { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
       <img src={logo} className="App-logo" alt="logo" />
         <Addition></Addition>
         <Addition></Addition>
         <Sum></Sum>
         {/* <Product></Product> */}
         <Product name="multiplication"/>
         <Product name="addition"/>
         <Product name="subtraction"/>
      </div>
    );
  }
}

export default App;
