import React from 'react';
import './SearchList.css';

const SearchList = (props) => {
  let search = [{
    image: null,
    name: props.selectedPokemon.name
  }]
  const searchList = search.map(searchItem => {
    return (<li key={searchItem.name}>
              <img src={searchItem.image}/>{searchItem.name}
            </li>);
  });

  return(
    <div className="search-list">
      <ul className="search-list-display">
        {searchList}
      </ul>
    </div>
  );
}

export default SearchList;