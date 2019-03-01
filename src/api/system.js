import ajax from '../util/ajax';

export const getAccountList = () => ajax({
	url: '/api/getAccountList'
});
