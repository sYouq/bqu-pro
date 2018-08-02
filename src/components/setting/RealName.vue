<template>
<div id="realname">
    <header>
        <i @click="goBack" class="return iconfont icon-fanhui"></i>
        <h1>实名认证</h1>
    </header>
    <div id="list">
        <div id="input-wrap">
            <span>真实姓名</span>
            <input type="text" v-model="realname">
        </div>

        <div id="input-wrap">
            <span>手机号</span>
            <input type="text" v-model="tel">
        </div>

        <div id="input-wrap">
            <span>验证码</span>
            <input type="text" v-model="verification">
        </div>

    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            realname: '刘依',
            tel: '15270184846',
            verification: '未填写'
        }
    },
    methods:{
        goBack(){
            history.back()
        }
    }
}
</script>
<style scoped>
#realname{
    top: 0;
    left: 0;
    position: relative;
    z-index: 20;
    width: 100%;
    height: 13.34rem;
    background: #f5f5f5;
}
#realname header{
    background: #f1457c;
    height: 1.28rem;
    text-align: center;
}
#realname header .return{
    color: #fff;
    position: absolute;
    top: .7rem;
    left: .3rem;
    font-size: .28rem;
}

#realname header h1{
    position: absolute;
    top: .58rem;
    left: 3.08rem;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: .34rem;
    line-height: .48rem;

}
#realname #list{
    width: 100%;
    height: 3.04rem;
    position: relative;
    top: .4rem;
    left: 0;
}
#realname #input-wrap{
    display: block;
    width: 100%;
    height: 0.98rem;
    background: #fff;
    position: relative;
}
#realname #input-wrap span{
    position: absolute;
    top: 0;
    left: .28rem;
    line-height: .98rem;
    font-family: PingFangSC-Regular;
    color: #333;
    font-size: .3rem;
}
#realname input{
    position: absolute;
    top: 0;
    right: .26rem;
    display: block;
    border: 0;
    width: 5rem;
    height: .98rem;
    text-align: right;
    font-family: PingFangSC-Regular;
    font-size: .26rem;
    color: #999;
    line-height: .62rem;
    outline: none;
}
#realname #input-wrap::after{
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

</style>

