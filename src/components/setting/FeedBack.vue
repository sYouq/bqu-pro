<template>
    <div id="feedback-wrap">

        <div id="feedback">

            <header>
                <i @click="goBack" class="return iconfont icon-fanhui"></i>
                <h1>意见反馈</h1>
                <i @click="saveData" class="save">保存</i>
            </header>

            <div id="input-wrap">
                <textarea  v-model="userText">
                </textarea>
            </div>
            <i @click="clearInput" class="clear iconfont icon-shezhi"></i>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userText : "说点什么吧。。。。。。"
        }

    },
    methods:{
        goBack(){
            history.back();
        },
        clearInput(){
            this.userText = "";
        },
        saveData(){
            alert("已保存")
        }
    }
}
</script>

<style scoped>
#feedback-wrap{
    position: relative;
    background: #fff;
    width: 100%;
    height: 13.34rem;
}
#feedback{
    top: 0;
    left: 0;
    position: absolute;
    z-index: 20;
    width: 100%;
    height: 13.34rem;
    background: #fff;
}
#feedback header{
    background: #f1457c;
    height: 1.28rem;
    text-align: center;
}
#feedback header .return{
    color: #fff;
    position: absolute;
    top: .7rem;
    left: .3rem;
    font-size: .28rem;
}
#feedback header h1{
    position: absolute;
    top: .6rem;
    left: 3.08rem;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: .34rem;
    line-height: .48rem;

}
#feedback header .save{
    color: #fff;
    position: absolute;
    top: .7rem;
    left:  6.6rem;
    font-size: .3rem;
    font-family: PingFangSC-Regular;
    line-height: .42rem;
    font-style: normal;
}
#feedback #input-wrap{
    display: block;
    width: 6.64rem;
    height: 2.42rem;
    position: absolute;
    left: .43rem;
    top: 1.51rem;
}
#feedback textarea{
    display: block;
    border: 0;
    width: 6.64rem;
    height: 2.42rem;

    font-family: PingFangSC-Regular;
    font-size: .26rem;
    color: #999;
    line-height: .62rem;
    outline: none;
}
#feedback #input-wrap::after{
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
#feedback .clear{
    position: absolute;
    top: 1.7rem;
    right: .3rem;
    color: #999;
    font-size: .3rem;
}
</style>