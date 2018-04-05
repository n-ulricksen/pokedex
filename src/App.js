import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import PokemonList from './components/PokemonList';

class App extends Component {
  render() {
    return (
      <div className="App">
        
            <Pokedex />
          
      </div>
    );
  }
}

export default App;
