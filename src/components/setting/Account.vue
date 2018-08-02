<template>
    <div id="account">


        <header>
            <i @click="goBack" class="return iconfont icon-fanhui"></i>
            <h1>账号管理</h1>
            <i class="modify">编辑</i>
        </header>

        <ul>
            <li>
                <i class="userpic"></i>
                <span class="name">小柒</span>
                <span class="id">伴趣ID：264852346</span>
                <i class="select iconfont icon-back-copy"></i>
            </li>
            <li class="oneborder"></li>
            <li>
                <i class="add iconfont icon-jiahao"></i>
                <span>添加或注册账号</span>
            </li>
            <li class="oneborder"></li>
        </ul>



    </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            history.back();
        },
    }
}
</script>

<style scoped>
#account{
    top: 0;
    left: 0;
    position: relative;
    z-index: 20;
    width: 100%;
    height: 13.34rem;
    background: #f5f5f5;
}
#account header{
    background: #f1457c;
    height: 1.28rem;
    text-align: center;
}
#account header .return{
    color: #fff;
    position: absolute;
    top: .7rem;
    left: .3rem;
    font-size: .28rem;
}
#account header .modify{
    color: #fff;
    position: absolute;
    top: .7rem;
    left:  6.6rem;
    font-size: .3rem;
    font-family: PingFangSC-Regular;
    line-height: .42rem;
    font-style: normal;
}
#account header h1{
    position: absolute;
    top: .6rem;
    left: 3.1rem;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: .34rem;
    line-height: .48rem;

}
#account ul{
    position: absolute;
    left: 0;
    top: 1.68rem;
    background: #fff;
    width: 100%;
    min-height:5.38rem ;
}
#account ul li{
    background: #fff;
    box-sizing: border-box;
    height: .98rem;
    width: 100%;
    padding:0 .3rem 0 .28rem;
    font-family: PingFangSC-Regular;
    color: #333;
    font-size: .3rem;
    line-height: .98rem;
    position: relative;


}
#account ul .oneborder{
    content: "";
    background: #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    height: 1px;
    width: 100%;
    transform: scaleY(0.5);
    -webkit-transform: scaleY(.5);
}
#account ul li .userpic{
    width: .88rem;
    height: .88rem;
    position: absolute;
    top: .05rem;
    left: .3rem;
    background: #eee;
}
#account ul li:nth-child(1) .name{
    position: absolute;
    top: .16rem;
    left: 1.36rem;
    font-family: PingFangSC-Regular;
    font-size: .3rem;
    line-height: .42rem;
    color: #333;
}
#account ul li:nth-child(1) .id{
    position: absolute;
    top: .54rem;
    left: 1.36rem;
    font-family: PingFangSC-Regular;
    font-size: .26rem;
    line-height: .36rem;
    color: #999;
}
#account ul li:nth-child(1) .select{
    position: absolute;
    top: .32rem;
    left: 6.76rem;
    line-height: .32rem;
}
#account ul li:nth-child(3) .add{
    position: absolute;
    top: .3rem;
    left: .56rem;
    font-size: .36rem;
    line-height: .36rem;
    color: #d8d8d8;
}
#account ul li:nth-child(3) span{
    position: absolute;
    top: .3rem;
    left: 1.4rem;
    font-family: PingFangSC-Regular;
    color: #999;
    line-height: .36rem;
    font-size: .26rem;
}
</style>