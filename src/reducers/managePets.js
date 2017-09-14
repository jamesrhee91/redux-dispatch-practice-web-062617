export let state;


export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return { pets: [...state.pets, action.pet] }
    case 'REMOVE_PET':
      const filtered = state.pets.filter(pet => pet.id !== action.id)
      return { pets: filtered }
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const petNames = state.pets.map(pet => `<li>${pet.name}</li>`).join('')
  document.getElementById('container').innerHTML = `<ul>${petNames}</ul>`
}
