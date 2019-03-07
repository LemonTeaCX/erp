export default class Util {
	constructor(options) {}
	copyJson(json = {}) {
		return JSON.parse(JSON.stringify(json));
	}
	getCookie(name = '') {
		let cookies = document.cookie.split(';');
		for (let i = cookies.length - 1; i >= 0; i--) {
			let arr = cookies[i].split('=');
			if (arr[0] === name) return arr[1];
		}
		return '';
	}
	setCookie(cname, cvalue, exdays) {
		var date = new Date();
	  date.setTime(date.getTime()+(exdays*24*60*60*1000));
	  var expires = "expires="+date.toGMTString();
	  document.cookie = cname + "=" + cvalue + "; " + expires;
	}
}
