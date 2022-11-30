const pokeApi = async (pokemonId) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const result = await data.json();
  return result.forms;
};

pokeApi(4).then((res) => res.forEach((poke) => console.log(poke.name)));

const promises = [
  fetch(`https://pokeapi.co/api/v2/pokemon/8`)
    .then((res) => res.json())
    .then((data) => data.forms),
  fetch(`https://pokeapi.co/api/v2/pokemon/43`)
    .then((res) => res.json())
    .then((data) => data.forms),
  fetch(`https://pokeapi.co/api/v2/pokemon/12r`) // Sale error
    .then((res) => res.json())
    .then((data) => data.forms),
];

Promise.allSettled(promises)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
