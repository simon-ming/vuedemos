import API from "@/api"
import http  from "@/utils/http"


export function getUsers(){
	return new Promise((resolve,reject)=>{
		http({
			url:API.GET_USERS_API,
			method:"GET"
		})
		.then(({data,status})=>{
			if(!status==200){
				console.log("请求失败!")
			}else{
				//请求成功
				resolve(data)//返回data
				// console.log(data)
			}
		})
	})
}