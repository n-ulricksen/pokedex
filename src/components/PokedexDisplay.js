import React from 'react';
import './PokedexDisplay.css'

const PokedexDisplay = ({selectedPokemon}) => {
  console.log(selectedPokemon);

  const { id, name, types, height, weight, sprites } = selectedPokemon;

  const getId = () => {
    let newId = '';
    if (id) {
      if (id < 10) {
        newId = "#00" + id;
      } else if (id < 100) {
        newId = "#0" + id;
      } else {
        newId="#" + id;
      }
      return newId;
    }
    return null;
  }

  const getName = () => {
    let newName = '';
    if (name) {
      newName = name.charAt(0).toUpperCase() + name.slice(1);
      return newName;
    }
    return null;
  }

  const getType = () => {
    let type = '';
    if (types) {
      type = types[0].type.name;
      return type.charAt(0).toUpperCase() + type.slice(1);
    }
    return null;
  }

  const getHeight = () => {
    let newHeight = '';
  }

  const getWeight = () => {
    let newWeight = '';
  }

  const getImage = () => {
    let image = '';
    if (sprites) {
      image = sprites.front_default;
      return image;
    }
    return null;
  }
   // TODO: convert to function for each data being displayed
  

  return (
    <div className="pokedex-container">
      <img src={require("../images/pokedex.jpg")} alt="Pokedex"/>
      <div className="pokedex-display">
        <div className="pokedex-display-container">
          <img src={getImage()} alt="Bulbasaur" />
          <hr/>
          <div id="id">{getId()}</div>
          <div id="name">{getName()}</div>
          <div id="type">{getType()}</div>
          <div id="height">
            <div id="height-label">Height</div>
            <div id="height-value">{height}</div>
          </div>
          <div id="weight">
            <div id="weight-label">Weight</div>
            <div id="weight-value">{weight}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokedexDisplay;