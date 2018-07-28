<template>
<div>
    <app-content id="dynamic">
        <primary></primary>
    </app-content>
    <router-view></router-view>
</div>
</template>

<script>
import primary from '../../components/dynamic/primary.vue'
export default {
    components:{
        primary
    }
}
</script>

<style scoped>
#dynamic{
    top: 0;
}
</style>
