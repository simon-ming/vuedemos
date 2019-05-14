<template>
	<div class="user">
		<el-main>
			<span class="hd-sex">性别:</span>
			<el-radio v-model="sex" label="1"  @change="log()" >男</el-radio>
			<el-radio v-model="sex" label="2"  @change="log()" >女</el-radio>
			<br/>
			<span class="hd-sex">地址:</span>

			<el-radio-group v-model="address">
		      <el-radio-button label="上海"></el-radio-button>
		      <el-radio-button label="北京"></el-radio-button>
		      <el-radio-button label="广州"></el-radio-button>
		      <el-radio-button label="深圳"></el-radio-button>
		    </el-radio-group>	
		</el-main>
	</div>
</template>
<script>
	import City from "@/utils/city.js"
	export default {
		data(){
			return {
				sex: "1",
				address:"上海"
			};
		},
		methods: {
			log(){
				console.log(this.sex)
			}
		},
		created(){
				console.log(City.city)
		}
	};
</script>
<style lang="scss" scoped>
.user{
	.hd-sex{
		padding-right: 20px
	}
}

</style>