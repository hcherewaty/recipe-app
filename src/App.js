import React, { Component } from 'react';
import Navbar from './components/nav';
import RecipeList from './components/recipes';
import './stylesheets/recipes.scss';

class App extends Component {
  render() {
    return (
      <>
      <div>
        <Navbar />
        <RecipeList />
      </div>
      </>
    );
  }
}

export default App;
