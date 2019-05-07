function Tool(){

}
//Object类工具---------------------->>>>>>>>>>>>>

Tool.prototype.createObj=function(objstr){//返回<div class='a'></div> a的dom对象

　　 var objE = document.createElement("div");

　　 objE.innerHTML = arg;

　　 return objE.childNodes[0];
}

Tool.prototype.type=function(arg){ //返回所有种类的数据类型

	return Object.prototype.toString.call(arg).split(' ')[1].replace("]","");//返回任意参数的类型,包含数组,日期,或者正则

}

//-----对象深拷贝
Tool.prototype.deepCopy=function(obj){
	var _obj=obj.constructor == Object ? {} : [] ;
	for(var i in obj){
		_obj[i]= typeof obj[i] == "object" ? deepCopy(obj[i]) :  obj[i]
	}	
	return _obj
}


//Object类工具<<<<<<<<<<<<<<<<<<----------------------



//算法类工具-------------------------------->>>>>>>>>>>>>>
Tool.prototype.BubbleSort=function(arr){//冒泡排序

	for(var i=0 ; i < arr.length-1 ; i++){// 总共交换length-1次  ,每次都有一位相对最大值被确定好了
		for(var j=0; j < arr.length-1-i ; j++){//二次比较的次数为数组长度减再减一次比较的次数
			if( arr[j] > arr[j+1] ){
				var max;
				max=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=max;
			}
		}
	}
	return arr;
}
Tool.prototype.quickSort=function(arr){  //快速排序

	if(arr.length<=1) {
	    return arr[0];
	}

	let leftArr = [];//定义左侧为小于参照值的数组
	let rightArr = [];//定义右侧为大于参照值的数组
	let q = arr[0]; //定义第一位为参照值
	for(let i = 1,l=arr.length; i<l; i++) {// 按照规则进行两边分类
	    if(arr[i]>q) {
	        rightArr.push(arr[i]);
	    }else{
	        leftArr.push(arr[i]);
	    }
	}
	return [].concat(quickSort(leftArr),[q],quickSort(rightArr));//通过递归,不停拆分组合,合成最终排序

}

Tool.prototype.selectSort=function(arr){//选择排序
	var len=arr.length;
    var temp;
    for(var i=0;i<len-1;i++){//从第一个开始比较,
	    for(var j=i+1; j<len; j++){//和第二三四个比,
	        if(arr[j] < arr[i]){ //如果前面的更大就交换位置,确保前面的是最小的,最终从小到大
	            temp=arr[j];
	            arr[j]=arr[i];
	            arr[i]=temp;
	        }
	    }
    }
    return arr;
}

//算法类工具<<<<<<<<<<<<<<<<<<<<<<<<-----------------



//数组操作类  去重------------------>>>>>>>>>>>>>
Tool.prototype.rmDuplicate1=function(arr){//数组去重,es6方法,Set是元素不重复的数组

	return [...new Set(arr)] //new Set()内传入数组可以去重,再用拓展运算符...去壳得到数组

}


Tool.prototype.rmDuplicate2=function(arr){//数组去重,使用 indexOf()

	var _arr=[];
	for(var i in arr){
		if(_arr.indexOf(arr[i]) == -1){ //利用不存在某元素返回-1的特性
			_arr.push(arr[i]);
		}
	}
	return _arr;

}

Tool.prototype.rmDuplicate2=function(arr){//数组去重,使用对象的属性名不重复特性,和 in关键字判断
	var _arr=[],obj={};
	for(var i in arr){
		if( arr[i] in obj){   //存在这个属性就跳过
			continue;
		}else{    //不存在就
			obj[arr[i]]=0;
			_arr.push(arr[i])
		}
	}
	return _arr
}

//数组操作类  去重<<<<<<<<<<<<<<<<-----------------









// 数据正则处理类--------------------->>>>>>>>>   ---ERROR---
/*
	str  传入的字符串
	@params start   开始位置
	@params end     结束位置
	@params include 是否 *包含*开始和结束的字符,默认包含
	eg:var a=" 112233, 112233, 112233,";
	传参 (a,' 1','33,',false) 返回122  
 */
Tool.prototype.Sub=function(str,start,end,include=true){// 按条件截取字符串(正则提取)

	var  sindex,eindex,_str;

	if(start.length > 1 ){
		sindex=str.indexOf(start[0]);
	}else{
		sindex=str.indexOf(start);
	}

	if(end.length > 1 ){
		eindex=str.indexOf(end[end.length - 1]);
	}else{
		eindex=str.indexOf(end);
	}

	if(!include){
		_str=str.substring(sindex , eindex+1).replace(start,'').replace(end,'')
	}else{
		_str=str.substring(sindex , eindex+1)
	}
	return _str
}

Tool.prototype.loopSub=function(){//循环提取符合条件的字符串  (循环提取)

	



}



// 数据正则处理类<<<<<<<<<<---------------------



