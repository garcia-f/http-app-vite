import { loadUsersByPage } from "../use-cases/load-users-by-page.js";


const state = {
  currentPage: 0,
  users: [],
}

// Cargar la siguiente pagina
const loadNextPage = async() => {
  const users =  await loadUsersByPage( state.currentPage + 1 );
  if( users.length === 0 ||  state.currentPage === 5 ) return;
  state.currentPage += 1;
  state.users = users;
}

// Cargar pagina anterior
const loadPreviousPage = async() => {
  if ( state.currentPage === 1 ) return;
  const users = await loadUsersByPage( state.currentPage - 1 );
  state.users = users;
  state.currentPage -= 1;
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

  /**
   * 
   * @returns {User[]}
   */
  getUsers: () => [...state.users],

  /**
   * 
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage,

}