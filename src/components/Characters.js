import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';


const Characters = ({ characters }) => {
  const charElements = characters.map(character => (
    <li key={character.name}>
      <Character {...character}/>
    </li>
  ));

  return (
    <ul>
      {charElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
