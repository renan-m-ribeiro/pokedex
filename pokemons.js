const pokemon = {
  name: "",
  id: "",
  type1: "",
  type2: "",
  description: "",
  image: ""
} 

const pokemons = async (pokemonId) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const data = await response.json();

  pokemon.name = data.name
  pokemon.id = data.id
  pokemon.type1 = data.types[0].type.name
  pokemon.type2 = data.types[1] ? data.types[1].type.name : ""
  //pokemon.description = data.flavor_text_entries[1].flavor_text
  pokemon.image = data.sprites.front_default

  return pokemon;
}
