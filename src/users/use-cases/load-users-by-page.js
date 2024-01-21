import { User } from "../models/user.model.js";
import { localhostUserToModel } from "../mappers/localhost-user.mapper.js"


/**
 * 
 * @param {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async( page = 1 ) => {

	const url  = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`;
	const res  = await fetch( url );
	const data = await res.json();

	const users = data.data.map( localhostUserToModel );

	return users;

}

