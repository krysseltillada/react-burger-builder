import React, { Component } from 'react';
import './App.css';
import Layout from './containers/layout/Layout';
import BurgerBuilder from './containers/burger-builder/BurgerBuilder';

class App extends Component{
  render(){
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
