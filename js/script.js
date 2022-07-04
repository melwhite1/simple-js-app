let pokemonRepository = (function() {
  let pokemonList = [
    {name: 'Pikachu', height: 1.04, type: 'electric'},
    {name: 'Charizard', height:1.7, type: ['fire', 'flying']},
    {name: 'Squirtle', height:.5, type:'water'}
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

let pokemonList= pokemonRepository.getAll();


pokemonList.forEach(function (pokemon) {
    if (pokemon.height >= 1.5) {
        document.write(`Name: ${pokemon.name} <br> Height: ${pokemon.height} - Wow, thats's big! <br> <p>`)
    } else if (pokemon.height > 1.0 && pokemon.height < 3.0) {
        document.write(`Name: ${pokemon.name} <br> Height: ${pokemon.height} - Medium <br> <p>`)
    } else {
        document.write(`Name: ${pokemon.name} <br> Height: ${pokemon.height} - Small <br> <p>`)
    }
})
