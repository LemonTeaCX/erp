import ajax from '../util/ajax';

export const getAccountList = (parms) => ajax({
	url: '/api/getAccountList',
	method: 'post',
	data: parms
});
