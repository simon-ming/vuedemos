<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.svg">
    <HelloWorld msg="Welcome to my demos"/>
    <!-- <Logo /> -->
    <List/>  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Logo from '@/components/Logo.vue';
import List from '@/pages/List.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Logo,
    List
  },
  created(){
  }
}
</script>
<style type="text/css">
	img{
		width: 400px;
    height: 400px;
    object-fit: contain;
	}
</style>
