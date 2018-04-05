import React, { Component } from 'react';
import './Pokedex.css'

class PokedexDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      currentPokemon: {}
    });
  }

  render() {
    return(

        <div className="pokedex-container">
          <img src={require("../images/pokedex.jpg")} alt="Pokedex"/>
          <div className="pokedex-display">
            <div className="pokedex-display-container">
              <img src={require("../images/bulbasaur.png")} alt="Bulbasaur" />
              <hr/>
              <div id="id">#01</div>
              <div id="name">Bulbasaur</div>
              <div id="type">Grass</div>
              <div id="height">
                <div id="height-label">Height</div>
                <div id="height-value">1'4"</div>
              </div>
              <div id="weight">
                <div id="weight-label">Weight</div>
                <div id="weight-value">15 lbs</div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default PokedexDisplay;