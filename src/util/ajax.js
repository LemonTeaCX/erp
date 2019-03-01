import axios from 'axios';
import LoadingUtil from './loading';

let loadingUtil = new LoadingUtil();

axios.defaults.baseURL ='http://localhost:8080';

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'applicaiton/json'
    }
    // const token = getCookie('名称');
    // if(token) config.params = {'token':token}
    
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
    /*if(response.data.errCode ==2){
      router.push({
        path:"/login",
        querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
      })
    }*/
    return response.data;
  },
  error => {
    return Promise.reject(error)
  }
);

export default function ajax(options) {
	return new Promise((resolve, reject) => {
		let config = Object.assign({
			method: 'get'
		}, options);

		axios(config)
		.then(response => {
			resolve(response);
		})
		.catch(error => {
			reject(error);
		});
	});
}
