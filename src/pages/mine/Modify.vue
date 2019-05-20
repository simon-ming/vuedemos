<template>
	<div class="user">
		<el-main>
			<h1>user-message-editck;a啦啦啦啦啦</h1>
			<div class="msg-box">
				<div class="hd-cat">性别:</div>
				<el-radio  v-model="sex" label="1"  @change="log()" >男</el-radio>
				<el-radio v-model="sex" label="2"  @change="log()" >女</el-radio>
			</div>

			<div class="msg-box">
				<div class="hd-cat">地址:</div>
				<el-radio-group v-model="address" @change="log()" style="margin-top: 20px;">
			      <el-radio-button label="上海"></el-radio-button>
			      <el-radio-button label="北京"></el-radio-button>
			      <el-radio-button label="广州"></el-radio-button>
			      <el-radio-button label="深圳"></el-radio-button>
			    </el-radio-group>	
			</div>
			<div class="msg-box">
				<div class="hd-cat">是否会员</div>
				<el-checkbox v-model="checked">会员</el-checkbox>

				<el-checkbox-group v-model="checkList" @change="log" style="margin-top: 20px">
				   <el-checkbox label="中国"></el-checkbox>
				   <el-checkbox label="日本"></el-checkbox>
				   <el-checkbox label="美国"></el-checkbox>
				   <el-checkbox label="俄国" disabled></el-checkbox>
				   <el-checkbox label="英国" disabled></el-checkbox>
				 </el-checkbox-group>

				 <el-checkbox-group v-model="checkboxGroup" @change="log"  style="margin-top: 20px">
				       <el-checkbox-button v-for="city in province" :label="city.label" :key="city.label">{{city.label}}</el-checkbox-button>
				     </el-checkbox-group>
			</div>
			<div class="msg-box" style="width: 400px">
				<div class="hd-cat">用户名:</div>

				<el-input
				  placeholder="请输入用户名..."
				  v-model="input"
				  clearable>
				</el-input>
				<div class="hd-cat">密码:</div>

				<el-input placeholder="请输入密码" v-model="input" show-password></el-input>
				属性方式：
				 <el-input
				   placeholder="请选择日期"
				   suffix-icon="el-icon-date"
				   v-model="input1">
				 </el-input>
				 <el-input
				   placeholder="请输入内容"
				   prefix-icon="el-icon-search"
				   v-model="input2">
				 </el-input>
				 <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
				    <el-select v-model="select" slot="prepend" placeholder="请选择">
				      <el-option label="餐厅名" value="1"></el-option>
				      <el-option label="订单号" value="2"></el-option>
				      <el-option label="用户电话" value="3"></el-option>
				    </el-select>
				    <el-button slot="append" icon="el-icon-search"></el-button>
				  </el-input>
			</div>
		</el-main>
	</div>
</template>
<script>
	import City from "@/utils/city.js"
	export default {
		data(){
			return {
				sex: "1",
				address:"上海",
				checked:true,
				checkList:["中国","美国"],
				checkboxGroup:[],
				province:City.city,
				input:"",
				input3:"",
				input1:"",
				input2:"",
				select:""
			};
		},
		methods: {
			log(){
				console.log(this.checkboxGroup)
			}
		},
		created(){
				console.log(City.city)
		}
	};
</script>
<style lang="scss" scoped>
	@font-face
	{
		font-family: myFirstFont;
		src: url('/utils/xing.ttf')
	}
.user{
	font-family:myFirstFont;
	.msg-box{
		margin-top: 15px;
		.hd-cat{
			padding-right: 20px;
			display: inline-block;
		}
		h1{
			font-size: 30px;
			margin-bottom: 30px;
		}
	}
}

</style>
<style lang="scss">
.user{//修改饿了么样式的方法,scoped下不起作用,要在要修改的样式组件前加上其父标签以限制组件样式的范围
	// .el-radio-button__orig-radio:checked+.el-radio-button__inner {
	// 	color: red;
	// 	border-color: blue;
	// 	background-color: blue;
	// }
}
</style>