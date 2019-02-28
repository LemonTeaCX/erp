import Mock from 'mockjs';

Mock.setup({
    timeout: 1000
})

Mock.mock('http://localhost:8080/api/getMenu', 'get', {
	"code": 0,
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
	],
  "msg": "success"
});
