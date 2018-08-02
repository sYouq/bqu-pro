<template>
<div>
    <!-- 首页头部组件 -->
<home-header></home-header>
<app-content>
</app-content>


    <button id="self" @click="goSelfData">个人资料按钮</button>
    <button id="share" @click="goShare">分享按钮</button>
   <!-- 侧边栏组件 -->
<slide-bar></slide-bar>
</div>
</template>

<script>
//首页头部组件
import HomeHeader from "@/components/home/HomeHeader.vue";
//侧边栏组件
import SlideBar from "@/components/common/SlideBar.vue";
//内容组件
import AppContent from "@/components/common/AppContent.vue";
export default {
    components : {
        HomeHeader,
        SlideBar,
        AppContent
    },
    methods: {
        goShare(){
            this.$router.push({
                name: 'share',
            });

        },
        goSelfData(){
            this.$router.push({
                name: 'selfdata',
            });
        }
    },


}
</script>

<style scoped>
    #share{
        position: absolute;
        top: 100px;
        left: 30px;
        background: #ccc;
        width: 300px;
        height: 30px;
        border: 0;
    }
    #self{
        position: absolute;
        top: 200px;
        left: 30px;
        background: #ccc;
        width: 300px;
        height: 30px;
        border: 0;
    }
</style>
