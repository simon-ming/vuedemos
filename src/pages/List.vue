<template>
	<div class="list">
		<ul>
			<li></li>
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
				this.data=data
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