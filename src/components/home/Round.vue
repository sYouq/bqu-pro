<template>
	<div>
		<h1>test3</h1>
	</div>
</template>

<script>
	import Vuex from "vuex";

	export default {
	    data(){
	        return {

	        	list:true,
	        }
	    },
	    computed:Vuex.mapState({
	        playIndex:val=>val.Home.playIndex,
	    }),
	    watch:{
	    	playIndex(newVal){
	    		if(newVal==2&&this.list){
	    			this.list=false;
	    			console.log("可以请求数据附近")
	    		}
	    	}
	    },
	    created(){

	    }
	}

</script>

<style scoped>
	h1{
		background: blue;
		height: 17rem;
	}
</style>
