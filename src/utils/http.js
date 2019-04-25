import axios from "axios";
import API from "@/api"

export default  function http({url,method,data}){
	let options={
		url,
		method,
		//baseURL:API.SAT_HOST,//开发api **使用mock的情况下禁用baseurl
		timeout:5000,//超时时间
		withCredentials:false //是否携带证书
	}
	if(method == "GET"){
		options.params=data; //get方式传参到url
	}else if(method == "POST"){
		options.data = data  //data数据的传参数方式
	}
	return axios(options);
}