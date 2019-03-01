import Mock from 'mockjs';
import Util from '../util/util';

Mock.setup({
    timeout: 1000
});

let { copyJson } = new Util();
let BASE_URL = 'http://localhost:8080';
let resWrap = {
	"code": 0,
  "data": {},
	"msg": "success"
};
let mergeRes = (json, ...moreJson) => {
	return Object.assign(copyJson(resWrap), json, ...moreJson);
};

Mock.mock(`${BASE_URL}/api/getMenu`, 'get', mergeRes({
  "data": [
		{
	    "id": 1,
			"menu": "系统",
			"icon": "el-icon-location",
			"subMenu": [
				{
					"id": 4,
					"parentId": 1,
					"menu": "账号管理",
					"path": "/system/account"
				},
				{
					"id": 5,
					"parentId": 1,
					"menu": "权限管理",
					"path": "/system/auth"
				}
			]
		},
		{
	    "id": 2,
			"menu": "菜单2",
			"icon": "el-icon-menu"
		},
		{
	    "id": 3,
			"menu": "菜单3",
			"icon": "el-icon-document"
		}
	]
}));

Mock.mock(`${BASE_URL}/api/getAccountList`, 'get', mergeRes({
  "data": {
		"list|3-20": [
			{
		    "id|+1": 1,
				"name": "@cname",
				"email": "@email",
				"status|1": false,
				"auth": ["权限1", "权限2", "权限3"],
				"role|1": ["超级管理员", "普通用户"],
				"remark": "@sentence"
			}
		],
		"total|20-100": 1 
	}
}));
