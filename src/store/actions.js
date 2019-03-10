import {
	SET_MENU,
	SET_USER_INFO
} from './mutation-types';

import {
	getMenu
} from '../api'

export default {
	async setMenu({commit}) {
		const result = await getMenu();
		commit(SET_MENU, result.data);
	},
	setUserInfo({commit}, userInfo) {
		window.localStorage.setItem('userInfo', JSON.stringify(userInfo) || '');
		commit(SET_USER_INFO, userInfo);
	}
}
