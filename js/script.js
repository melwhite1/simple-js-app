let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let pokemonItem = document.createElement("li");
    pokemonList.classList.add("group-list-item");
    pokemonList.classList.add("col-sm-4", "col-md-6", "col-lg-12");
    let buttonItem = document.createElement("button");
    buttonItem.classList.add("pokemonButton");
    buttonItem.innerText = pokemon.name;
    buttonItem.setAttribute("data-toggle", "modal");
    buttonItem.setAttribute("data-target", "#pokemon-modal");
    $(buttonItem).addClass('button-class btn-block btn m1');
    pokemonItem.appendChild(buttonItem);
    pokemonList.appendChild(pokemonItem);
    buttonItem.addEventListener("click", function (event) {
     showDetails(pokemon);

    });
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
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $('<h1>' + pokemon.name + '</h1>');
    let imageElement = $('<img class="pokemon-img">')
    imageElement.attr("src", pokemon.imageUrl);
    let heightElement = $('<p>' + 'Height : ' + pokemon.height + '</p>');
    let weightElement = $('<p>' + 'Weight : ' + pokemon.weight + '</p>');
    let typeElement = $('<p>' + 'Types : ' + pokemon.types + '</p>');
    let abilitiesElement = $('<p>' + 'Abilities : ' + pokemon.abilities + '</p>');

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typeElement);
    modalBody.append(abilitiesElement);

}


    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
    };
  })();

  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });
