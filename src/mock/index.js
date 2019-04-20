import Mock from "mockjs";

Mock.mock('/api/users' , (require,response)=>{
		//返回对象
	return Mock.mock({
		"user|1-10":[{
			"name":"cname",
			"id|+1":1,
			"age|10-60": 0,  //10-60之内的随机数, 0用来确定类型
			"birthday":"@date(yyy-MM-dd)",
			"city":"@city(true)"  //中国城市 
		}]
	}) 
})