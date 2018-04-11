import React, { Component } from 'react';
import { Pokedex } from '../node_modules/pokeapi-js-wrapper/dist/index.js';
import PokedexDisplay from './components/PokedexDisplay';
import SearchBar from './components/SearchBar';
import './App.css';

const P = new Pokedex({protocol: 'https'});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      pokemon: [],
      selectedPokemon: {}
    });
    this.getPokemon = this.getPokemon.bind(this);

    this.getPokemon(1);   // load bulbasaur as initial selected pokemon
  }

  getPokemon(pokemon) {
    if (pokemon) {
      P.getPokemonByName(pokemon)
        .then(res => {
          this.setState({selectedPokemon: res});
        })
        .catch(err => {
          console.log(err);
          alert("Pokemon '" + pokemon + "' not found! \nCheck your spelling and try again.");
        });
      }
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.getPokemon} />
        <PokedexDisplay selectedPokemon={this.state.selectedPokemon}/>
      </div>
    );
  }
}

export default App;
