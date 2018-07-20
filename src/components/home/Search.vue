<template>
    <div class="search-wrapper">
        <h1>search</h1>

        <button @click="closeSearch()">取消</button>
    </div>
</template>

<script>
export default {
    methods :{
        //点击取消按钮，返回首页，样式自行修改
        closeSearch(){
            this.$pubsub.$emit("closeSearch");
        }
    }
}
</script>

<style scoped>
    .search-wrapper{
        position: absolute;
        z-index: 4;
        width: 100%;
        height: 100%;
        background: #fff;
    }
    h1{
        font-size: 50px;
    }
</style>
