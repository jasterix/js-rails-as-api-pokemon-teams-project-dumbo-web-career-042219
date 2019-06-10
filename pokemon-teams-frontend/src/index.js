
document.addEventListener('DOMContentLoaded', () => {

  const BASE_URL = "http://localhost:3000"
  const TRAINERS_URL = `${BASE_URL}/trainers`
  const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.querySelector('main')

fetch(TRAINERS_URL)
.then(response => response.json())
.then(trainers => {
    console.log(trainers);

    trainers.forEach(trainer => {
      main.innerHTML += `
        <div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
          <button data-trainer-id="${trainer.id}">Add Pokemon</button>
          <ul></ul>
        </div>
      `
    })

})





//
// function getPokemons {  fetch(POKEMONS_URL)
//   .then(response => response.json())
//   .then(data => console.log(data))
//
//   const pokemonLi = `
//     <li>
//       ${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button>
//     </li>
//   `}



console.log("DOM IS LOADED"); //
})
