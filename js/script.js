let pokemonList = [
  {name: 'Pikachu', height: 1.04, type: 'electric'},
  {name: 'Charizard', height:1.7, type: ['fire', 'flying']},
  {name: 'Squirtle', height:.5, type:'water'}
];

for (let i = 0; i < pokemonList.length; i++) {
  if(pokemonList[i].height <1){
  document.write("Name: " + pokemonList[i].name + '<br>' + " Height: " + pokemonList[i].height + " - What a tiny, adorable Pokemon! " + '<br>');}
  else if(pokemonList[i].height >1){
  document.write("Name: " + pokemonList[i].name + '<br>' + " Height: " + pokemonList[i].height + '<br>' + '<p>')
  }
}
