<template>
	<div class="list">
		<ul>
			<li v-for="(item,i) in data" :key="i" >
				<img :src="item.avatar">
				<p>name:{{item.name}}</p>
				<p>age:{{item.age}}</p>
				<p>birthday:{{item.birthday}}</p>
				<p>city:{{item.city}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
import {getUsers} from "@/services/user";
	export default {
		props:{},
		data () {
			return {
				data:[]
			};
		},
		methods: {

		},
		created(){
			getUsers().then((data)=>{
				this.data=data.user
				console.log(this.data)
			})
		}
	};
</script>
<style lang="scss" scoped>
.list{
	ul{
		li{
			
		}
	}
}
</style>