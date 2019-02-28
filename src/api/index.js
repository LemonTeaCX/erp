import ajax from './ajax';

export const getMenu = () => ajax({
	url: '/api/getMenu'
});
