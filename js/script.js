let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('pokemon-list');
    let pokemonItem = document.createElement('li');
    pokemonList.classList.add('group-list-item');
    pokemonList.classList.add('col-sm-4', 'col-md-6', 'col-lg-12');
    let buttonItem = document.createElement('button');
    buttonItem.classList.add('pokemonButton');
    buttonItem.innerText = pokemon.name;
    buttonItem.setAttribute('data-toggle', 'modal');
    buttonItem.setAttribute('data-target', '#pokemon-modal');
    pokemonItem.appendChild(buttonItem);
    pokemonList.appendChild(pokemonItem);
  }

  function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types.map((type) => type.type.name).join(',');
    }).catch(function (e) {
      console.error(e);
    });
  }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
    };
  })();

  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });
