import axios from 'axios';

axios.defaults.baseURL ='http://localhost:8080';

export default function ajax(options) {
	return new Promise((resolve, reject) => {
		let confing = Object.assign({
			method: 'get'
		}, options);

		axios(confing)
		.then(response => {
			resolve(response.data);
		})
		.catch(error => {
			reject(error);
		});
	});
}
