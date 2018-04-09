import React, { Component } from 'react';
import { Pokedex } from '../node_modules/pokeapi-js-wrapper/dist/index.js';
import PokedexDisplay from './components/PokedexDisplay';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';
import './App.css';

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
    const P = new Pokedex({protocol: 'https'});

    if (pokemon) {
      P.getPokemonByName(pokemon)
        .then(res => {
          this.setState({selectedPokemon: res});
          // console.log(res);
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
