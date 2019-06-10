
document.addEventListener('DOMContentLoaded', () => {

  const BASE_URL = "http://localhost:3000"
  const TRAINERS_URL = `${BASE_URL}/trainers/`
  const POKEMONS_URL = `${BASE_URL}/pokemons`

const mainTag = document.querySelector('main')
// const
let result = fetch(POKEMONS_URL, {
    method: 'get',
  })
  .then(resp => resp.json())
  .then(pokemons => {
    let trainerId;
    pokemons.forEach(pokemon => {
      trainerId = pokemon.trainer_id;
      // console.log(trainerId)
      return fetch(TRAINERS_URL + trainerId) // make a 2nd request and return a promise
      .then(resp => resp.json())
      .then(data => {
        // mainTag.innerHTML +=
        data.forEach(trainer =>{
            while(trainer.id == pokemon.trainer_id) {
          // debugger
          console.log(trainer)
      }
          // debugger
        // })
        })
      })
      // .catch(error => {
      //   alert('Request failed', error)
      })
    })
  // })


//     trainers.forEach(trainer => {
//       main.innerHTML += `
//         <div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
//           <button data-trainer-id="${trainer.id}">Add Pokemon</button>``
//           <ul>POKELIST</ul>
//         </div>
//       `
//     })
//
// })
//
//



console.log("DOM IS LOADED"); //
})
