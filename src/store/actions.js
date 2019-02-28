import {
	GET_MENU,
} from './mutation-types';

import {
	getMenu
} from '../api'

export default {
	async getMenu({commit}) {
		const result = await getMenu();
		commit(GET_MENU, {menu: result.data});
	}
}
