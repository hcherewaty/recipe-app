import React, { Component } from 'react';
import Recipe from './components/recipe';
import './stylesheets/recipes.css';

class App extends Component {
  render() {
    return (
      <>
        <Recipe 
          title='pasta'
          ingredients={['flour', 'water']}
        />
      </>
    );
  }
}

export default App;
