import React, { Component } from 'react';
import Navbar from './components/nav';
import Recipe from './components/recipe';
import './stylesheets/recipes.scss';

class App extends Component {
  render() {
    return (
      <>
      <div>
        <Navbar />
        <Recipe 
          title='pasta'
          ingredients={['flour', 'water']}
          instructions='mix together'
          img='spaghetti.jpg'
        />
      </div>
      </>
    );
  }
}

export default App;
