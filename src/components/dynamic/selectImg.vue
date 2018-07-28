<template>
   <div>
        <div id="selectImg"></div>
        <transition name="slide">
            <div class="select" v-if="showSelect">
                <p @click="album()">从手机上选择</p>
                <p @click="photograph()">拍摄</p>
                <p class="cancel" @click="cancelAction()">取消</p>
            </div>
        </transition>
   </div>
</template>
<script>
export default {
    data(){
        return {
            showSelect: false,
        }
    },
    methods:{
        //点击取消退出选择
        cancelAction(){
            this.showSelect = false;
            this.$router.back()
        },
        //从相册选择照片
        album(){
            console.log("从相册选择照片")
        },
        //拍照上传照片
        photograph(){
            console.log("拍照上传照片")
        }
    },
    mounted(){
        this.showSelect = true;
    }
}
</script>

<style scoped>
#selectImg{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: black;
    opacity: 0.3;
}
.select{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}
.select p{
    width: 100%;
    height: 1.02rem;
    line-height: 1.02rem;
    text-align: center;
    background: #fff;
    color: #333;
    font-size: .28rem;
}
.select .cancel{
    background: #f1457c;
    color: #fff;
}
@keyframes slideIn {
    0%{transform: translateY(100%);}
    100%{transform: translateY(0%);}
}
@keyframes slideOut {
    0%{transform: translateY(0%);}
    100%{transform: translateY(100%);}
}
.slide-enter-active{
    animation: slideIn 300ms;
}
.slide-leave-active{
    animation: slideOut 300ms;
}
</style>

