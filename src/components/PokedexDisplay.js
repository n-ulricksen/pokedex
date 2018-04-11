import React from 'react';
import SearchList from './SearchList';
import './PokedexDisplay.css';

const PokedexDisplay = ({selectedPokemon}) => {
  // console.log(selectedPokemon);

  const { id, name, types, height, weight, sprites } = selectedPokemon;

  const getId = () => {
    let newId = '';
    if (id) {
      if (id < 10) {
        newId = "#00" + id;
      } else if (id < 100) {
        newId = "#0" + id;
      } else {
        newId= "#" + id;
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
      let numOfTypes = types.length;
      type = types[numOfTypes-1].type.name;
      return type.charAt(0).toUpperCase() + type.slice(1);
    }
    return null;
  }

  const getHeight = () => {
    let newHeight = '';
    let heightInFeet = 0;
    let feet = 0;
    let inches = 0;
    if (height) {
      heightInFeet = height / 3.04799990246;  // decimeters to feet
      feet = Math.floor(heightInFeet);
      inches = Math.round((heightInFeet % 1) * 12);
      newHeight = feet + "'" + inches + '"';
      return newHeight;
    }
    return null;
  }

  const getWeight = () => {
    let newWeight = '';
    if (height) {
      newWeight = Math.round(weight * 0.220462) + " lbs.";
      return newWeight;
    }
    return null;
  }

  const getImage = () => {
    let image = '';
    if (sprites) {
      image = sprites.front_default;
      return image;
    }
    return null;
  }  

  return (
    <div className="pokedex-container">
      <img src={require("../images/pokedex.jpg")} alt="Pokedex"/>
      <div className="pokedex-display">
        <div className="pokedex-display-container">
          <img src={getImage()} alt="pokemon" />
          <hr/>
          <div id="id">{getId()}</div>
          <div id="name">{getName()}</div>
          <div id="type">{getType()}</div>
          <div id="height">
            <div id="height-label">Height</div>
            <div id="height-value">{getHeight()}</div>
          </div>
          <div id="weight">
            <div id="weight-label">Weight</div>
            <div id="weight-value">{getWeight()}</div>
          </div>
        </div>
        <SearchList selectedPokemon={selectedPokemon} />
      </div>
    </div>
  );
}

export default PokedexDisplay;