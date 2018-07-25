<template>
	<div>
		<h1>test1</h1>
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
        //轮播下标的属性
        playIndex:val=>val.Home.playIndex,
    }),
    watch:{
        //监听轮播下标
        playIndex(newVal){
            if(newVal==0&&this.list){
                this.list=false;
                console.log("可以请求关注数据")
            }
        }
    },
    created(){

    }
}
</script>

<style scoped>
h1{
	height: 20rem;
	background: red;
}

</style>
