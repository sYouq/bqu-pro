<template>
    <div id="share">
            <transition name="slideInfo">
        <div id="tab">
            <span id="title">分享给</span>

                <div id="item-wrap">
                    <div class="item">
                        <i>
                            <span class="iconfont icon-xin1"></span></i>
                        <span>微信好友</span>
                    </div>
                    <div class="item">
                        <i><span class="iconfont icon-xin1"></span></i>
                        <span>朋友圈</span>
                    </div>
                    <div class="item">
                        <i><span class="iconfont icon-xin1"></span></i>
                        <span>微博</span>
                    </div>
                    <div class="item">
                        <i><span class="iconfont icon-xin1"></span></i>
                        <span>QQ好友</span>
                    </div>
                    <div class="item">
                        <i><span class="iconfont icon-xin1"></span></i>
                        <span>QQ空间</span>
                    </div>
                    <div class="item">
                        <i><span class="iconfont icon-xin1"></span></i>
                        <span>复制链接</span>
                    </div>
                </div>
            <span id="cancel" @click="goBack">取消</span>
        </div>
            </transition>
    </div>
</template>

<script>
export default {
    methods: {
        goBack(){
            history.back();
        }
    }
}
</script>

<style scoped>
#share{
    background: rgba(0,0,0,.2);
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;
}
#tab{
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 20;
    background: #fff;
    width: 100%;
    height: 5.48rem;

}
#tab #title{
    position: absolute;
    left: 3.30rem;
    bottom: 4.84rem;
    color: #333;
    font-family: PingFangSC-Regular;
    font-size: .3rem;
    line-height: .42rem;
    font-weight: bolder;

}
#tab #item-wrap{
    position: relative;
    width: 100%;
    height: 5.48rem;
}
@keyframes slideIn {
    from{bottom : -5.48rem;}
    to{bottom : 0;}
}
@keyframes slideOut {
    from{bottom : 0;}
    to{bottom : -5.48rem;}
}
.slideInfo-enter-active{
    animation: slideIn 3000ms;
}
.slideInfo-leave-active{
    animation: slideOut 3000ms;
}
#tab #item-wrap .item{
    position: absolute;
    width: .92rem;
    height: 1.44rem;
}
#tab #item-wrap .item:nth-child(1){
    top: .94rem;
    left: .3rem;
}
#tab #item-wrap .item:nth-child(2){
    top: .94rem;
    left: 1.8rem;
}
#tab #item-wrap .item:nth-child(3){
    top: .94rem;
    left: 3.3rem;
}
#tab #item-wrap .item:nth-child(4){
    top: .94rem;
    left: 4.78rem;
}
#tab #item-wrap .item:nth-child(5){
    top: .94rem;
    left: 6.28rem;
}
#tab #item-wrap .item:nth-child(6){
    bottom: 1.02rem;
    left: .3rem;
}
#tab #item-wrap .item i{
    display: block;
    width: .92rem;
    height: .92rem;
    border-radius: 50%;
}
#tab #item-wrap .item i .iconfont{
    color: #979797;
    text-align: center;
    font-size: .52rem;
    line-height: .93rem;
    margin: 0;
}
#tab #item-wrap .item:nth-child(1) i{
    background: #3ABB05;
}
#tab #item-wrap .item:nth-child(2) i{
    background: #9ECE16;
}
#tab #item-wrap .item:nth-child(3) i{
    background: #F55768;
}
#tab #item-wrap .item:nth-child(4) i{
    background: #38AEFC;
}
#tab #item-wrap .item:nth-child(5) i{
    background: #FCCC52;
}
#tab #item-wrap .item:nth-child(6) i{

    border: 1px solid #D8D8D8;
}
#tab #item-wrap .item span{
    display: block;
    margin-top: .2rem;
    font-size: .22rem;
    line-height: .32rm;
    text-align: center;
    color: #999;
    font-family: PingFangSC-Regular;
}
#tab #cancel::before{
    height: 1px;
    width: 100%;
    content: '';
    border-top: 1px solid #979797;
    position: absolute;
    top: -1px;
    left: 0;
    transform: scaleY(0.5);
    -webkit-transform: scaleY(0.5);
}
#tab #cancel{
    display: block;
    position: absolute;
    width: 6.76rem;
    height: .74rem;
    left: .36rem;
    bottom: 0;
    text-align: center;
    font-size: .3rem;
    line-height: .74rem;
    color: #333;
    font-family: PingFangSC-Regular;

}
</style>