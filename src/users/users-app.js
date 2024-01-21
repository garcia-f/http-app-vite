import { RenderAddButton } from './presentation/render-add-button/render-add-button.js';
import { RenderButtons } from './presentation/render-buttons/render-buttons.js';
import { renderTable } from './presentation/render-table/render-table.js';
import usersStore from './store/users-store.js';


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UserApp = async( element ) => {

  element.innerHTML = 'Loading...';
  await usersStore.loadNextPage();

  element.innerHTML = '';

  renderTable( element );
  RenderButtons( element );
  RenderAddButton( element );

}