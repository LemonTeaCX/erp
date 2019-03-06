import ajax from '../util/ajax';

export const getMenu = () => ajax({
	url: '/api/getMenu',
	loading: true
});

export * from './login';
export * from './system';
