import axios from 'axios';
import Qs from 'qs';
import LoadingUtil from './loading';
import router from '../router';
import Util from '../util/util';

let { getCookie } = new Util();
let loadingUtil = new LoadingUtil();

console.log(getCookie('lemon'));

axios.defaults.timeout = 30000;
axios.defaults.baseURL ='http://localhost:3000';
axios.defaults.withCredentials = true;

//http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.loading) loadingUtil.startLoading();
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  response => {
    loadingUtil.endLoading();
    if (response.data && response.data.code === 0) {
      // 没权限、登录过期
      // router.replace({
      //   path: '/login',
      //   query: { redirect: router.currentRoute.path },
      // });
    }
    return response.data;
  },
  error => {
    loadingUtil.endLoading();
    return Promise.reject(error);
  }
);

export default function ajax(options) {
	return new Promise((resolve, reject) => {
		let config = Object.assign({
			method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Auth-Token': '123'
      }
		}, options);

    config.data = Qs.stringify(config.data);

		axios(config)
		.then(response => {
			resolve(response);
		})
		.catch(error => {
			reject(error);
		});
	});
}
