import {
	GET_MENU,
} from './mutation-types';

export default {
	[GET_MENU](state, {menu}) {
		state.menu = menu;
	}
}
