let pokemonRepository = (function() {
  let pokemonList = [
    {name: 'Pikachu', height: 1.04, type: 'electric'},
    {name: 'Charizard', height:1.7, type: ['fire', 'flying']},
    {name: 'Squirtle', height:.5, type:'water'},
    {name: 'Rapidash', height: 5, type: 'fire'},
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function () {
    showDetails(pokemon);
    });
  }

  function showDetails(pokemon){
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
  })();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
