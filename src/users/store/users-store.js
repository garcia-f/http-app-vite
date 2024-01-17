

const state = {
  currentPage: 0,
  users: [],
}

// Cargar la siguiente pagina
const loadNextPage = async() => {
  throw new Error('Not implemented');

}

// Cargar pagina anterior
const loadPreviousPage = async() => {
  throw new Error('Not implemented');

}

// Un usuario cambia
const onUserChanged = () => {
  throw new Error('Not implemented');

}

// Recargar pagina
const reloadPage = async() => {
  throw new Error('Not implemented');

}

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  getUsers: () => [...state.users],
  getCurrentPage: () => state.currentPage,

}