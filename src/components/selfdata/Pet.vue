<template>
    <div id="pet-wrap">

        <div id="pet">

            <header>
                <i @click="goBack" class="return iconfont icon-fanhui"></i>
                <h1>修改昵称</h1>
                <i class="save">保存</i>
            </header>

            <div id="input-wrap">
                <input type="text" v-model="userPet">
            </div>
            <i class="close iconfont icon-shezhi"></i>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userPet : "小柒"
        }

    },
    methods:{
        goBack(){
            history.back();
        },
    }
}
</script>

<style scoped>
#pet-wrap{
    position: relative;
    background: #fff;
    width: 100%;
    height: 13.34rem;
}
#pet{
    top: 0;
    left: 0;
    position: absolute;
    z-index: 20;
    width: 100%;
    height: 13.34rem;
    background: #fff;
}
#pet header{
    background: #f1457c;
    height: 1.28rem;
    text-align: center;
}
#pet header .return{
    color: #fff;
    position: absolute;
    top: .7rem;
    left: .3rem;
    font-size: .28rem;
}
#pet header h1{
    position: absolute;
    top: .6rem;
    left: 3.1rem;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: .34rem;
    line-height: .48rem;

}
#pet header .save{
    color: #fff;
    position: absolute;
    top: .7rem;
    left:  6.6rem;
    font-size: .3rem;
    font-family: PingFangSC-Regular;
    line-height: .42rem;
    font-style: normal;
}
#pet #input-wrap{
    display: block;
    width: 6.64rem;
    height: .62rem;
    position: absolute;
    left: .43rem;
    top: 1.51rem;
}
#pet input{
    display: block;
    border: 0;
    width: 6.64rem;
    height: .62rem;

    font-family: PingFangSC-Regular;
    font-size: .26rem;
    color: #999;
    line-height: .62rem;
    outline: none;
}
#pet #input-wrap::after{
    height: 1px;
    width: 100%;
    content: '';
    border-bottom: 1px solid #ccc;
    position: absolute;
    bottom: -1px;
    left: 0;
    transform: scaleY(0.5);
    -webkit-transform: scaleY(0.5);
}
#pet .close{
    position: absolute;
    top: 1.7rem;
    right: .3rem;
    color: #999;
    font-size: .3rem;
}
</style>