const URL = 'https://xfiles-api.herokuapp.com/api/v1/characters';

export const getCharacters = () => {
  return fetch(URL)
    .then(res => res.json())
    .then(({ characters }) => characters.map(character => ({
      ...character,
      image: character.imager || 'https://images-na.ssl-images-amazon.com/images/I/61-5p5GsDGL._S%2061-5p5GsDGL._SY879_.jpg'
    })));
};
