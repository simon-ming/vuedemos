import Mock from "mockjs";

Mock.mock('/api/users' , ()=>{
		//返回对象
	return Mock.mock({
		"user|1-20":[{
			"avatar":Mock.Random.image("100x100"),
			"name":"@cname()",
			"id|+1":1,
			"age|10-60": 0,  //10-60之内的随机数, 0用来确定类型
			"birthday":"@datetime('yyyy-MM-dd  HH:mm:ss')",
			"city":"@city(true)"  //中国城市 
		}]
	}) 
})