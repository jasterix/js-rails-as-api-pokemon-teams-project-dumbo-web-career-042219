
document.addEventListener('DOMContentLoaded', () => {

  const BASE_URL = "http://localhost:3000"
  const TRAINERS_URL = `${BASE_URL}/trainers`
  const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.querySelector('main')
const

function getPokemons() {
  fetch(POKEMONS_URL)
  .then(response => response.json())
  .then(pokemons => {

    console.log(pokemons);

pokemons.forEach(pokemon => {
  if pokemon.trainer_id === trainer.id

  `<li>
      ${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button>
    </li>

  `})
})



document.querySelector('ul')

fetch(TRAINERS_URL)
.then(response => response.json())
.then(trainers => {
    console.log(trainers);

    trainers.forEach(trainer => {
      main.innerHTML += `
        <div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
          <button data-trainer-id="${trainer.id}">Add Pokemon</button>``
          <ul>POKELIST</ul>
        </div>
      `
    })

})





console.log("DOM IS LOADED"); //
})
