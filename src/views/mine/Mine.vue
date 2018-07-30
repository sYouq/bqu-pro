<template>
<div>
    <!-- 首页头部组件 -->
<home-header></home-header>
<app-content>
</app-content>
   <!-- 侧边栏组件 -->
<slide-bar></slide-bar>
</div>
</template>

<script>
//首页头部组件
import HomeHeader from "@/components/home/HomeHeader.vue";
//侧边栏组件
import SlideBar from "@/components/common/SlideBar.vue";
export default {
    components : {
        HomeHeader,
        SlideBar
    }
}
</script>

<style scoped>

</style>
