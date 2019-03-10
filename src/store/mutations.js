import {
	SET_MENU,
	SET_USER_INFO,
} from './mutation-types';

export default {
	[SET_MENU](state, menu) {
		state.menu = menu;
	},
	[SET_USER_INFO](state, userInfo) {
		state.userInfo = userInfo;
	}
}
