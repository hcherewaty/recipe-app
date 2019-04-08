import React, { Component } from 'react';
import Recipe from './components/recipe';
import './stylesheets/recipes.scss';

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
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
