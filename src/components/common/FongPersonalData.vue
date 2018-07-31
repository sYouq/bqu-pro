<template>
<div id="selfdata-wrap">
    <keep-alive>
        <router-view>

        </router-view>
    </keep-alive>

    <div id="selfdata">

        <header>
            <i @click="goBack" class="return iconfont icon-fanhui"></i>
            <h1>个人资料</h1>

        </header>

        <ul>
            <li class="userpic">头像
                <span></span>
                <i class="select iconfont icon-back-copy"></i></li>
            <li class="oneborder"></li>
            <li class="pet" @click="modifyPet">昵称
                <span>小柒</span>
                <i class="select iconfont icon-back-copy"></i></li>
            <li class="oneborder"></li>
            <li class="sex" @click="modifySex">性别
                <span>女</span>
                <i class="select iconfont icon-back-copy"></i></li>
            <li class="oneborder"></li>
            <li class="id">伴趣ID
                <span>264852346</span>
                <i class="select iconfont icon-back-copy"></i></li>
            <li class="oneborder"></li>
            <li class="qrcode" @click="modifyQrcode">二维码名片
                <span class="iconfont icon-erweima"></span>
                <i class="select iconfont icon-back-copy"></i></li>
            <li class="oneborder"></li>
            <li class="birth" @click="modifyBirth">出生日期
                <span>1995-10-05</span>
                <i class="select iconfont icon-back-copy"></i></li>
            <li class="oneborder"></li>
            <li class="area" @click="modifyArea">地区
                <span>深圳市-南山区</span>
                <i class="select iconfont icon-back-copy"></i></li>
            <li class="oneborder"></li>
            <li class="textarea" @click="modifyTextarea">个性签名
                <span>一路前行，时间是最好的见证者</span>
                <i class="select iconfont icon-back-copy"></i></li>
        </ul>



    </div>
</div>
</template>

<script>
export default {
    methods: {
        goBack(){
            history.back();
        },
        modifyPet(){
            this.$router.push({
                name: 'pet',
                path: '/selfdata/pet',
            });
        },
        modifySex(){
            this.$router.push({
                name: 'sex',
                path: '/selfdata/sex',
            });
        },
        modifyQrcode(){
            this.$router.push({
                name: 'qrcode',
                path: '/selfdata/qrcode',
            });
        },
        modifyBirth(){
            this.$router.push({
                name: 'birth',
                path: '/selfdata/birth',
            });
        },
        modifyArea(){
            this.$router.push({
                name: 'area',
                path: '/selfdata/area',
            });
        },
        modifyTextarea(){
            this.$router.push({
                name: 'textarea',
                path: '/selfdata/textarea',
            });
        },
    }
}
</script>

<style scoped>
#selfdata-wrap{
    width: 100%;
    height: 13.34rem;
    background: #fff;
    position: relative;
}
#selfdata{
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 13.34rem;
    background: #f5f5f5;
}
#selfdata header{
    background: #f1457c;
    height: 1.28rem;
    text-align: center;
}
#selfdata header .return{
    color: #fff;
    position: absolute;
    top: .7rem;
    left: .3rem;
    font-size: .28rem;
}

#selfdata header h1{
    position: absolute;
    top: .58rem;
    left: 3.16rem;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: .34rem;
    line-height: .48rem;

}
#selfdata ul{
    position: absolute;
    left: 0;
    top: 1.68rem;
    background: #fff;
    width: 100%;
    min-height:3.04rem ;
}
#selfdata ul li{
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
#selfdata ul .oneborder{
    content: "";
    background: #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    height: 1px;
    width: 100%;
    transform: scaleY(0.5);
    -webkit-transform: scaleY(.5);
}

#selfdata ul .select{
    position: absolute;
    top: .4rem;
    right: .3rem;
    font-size: .2rem;
    line-height: .2rem;
    color: #9b9b9b;

}
#selfdata ul .userpic span{
    width: .88rem;
    height: .88rem;
    position: absolute;
    top: .05rem;
    right: .6rem;
    background: #eee;
}
#selfdata ul .pet span{
    position: absolute;
    top: .28rem;
    right: .7rem;
    color: #333;
    font-size: .3rem;
    line-height: .42rem;
}
#selfdata ul .sex span{
    position: absolute;
    top: .28rem;
    right: .86rem;
    color: #333;
    font-size: .3rem;
    line-height: .42rem;
}
#selfdata ul .id span{
    position: absolute;
    top: .28rem;
    right: .7rem;
    color: #333;
    font-size: .3rem;
    line-height: .42rem;
}
#selfdata ul .qrcode span{
    position: absolute;
    top: .28rem;
    right: .7rem;
    color: #d8d8d8;
    font-size: .52rem;
    line-height: .52rem;
}
#selfdata ul .birth span{
    position: absolute;
    top: .28rem;
    right: .68rem;
    color: #333;
    font-size: .3rem;
    line-height: .42rem;
}
#selfdata ul .area span{
    position: absolute;
    top: .28rem;
    right: .68rem;
    color: #333;
    font-size: .3rem;
    line-height: .42rem;
}
#selfdata ul .textarea span{
    position: absolute;
    top: .3rem;
    left: 1.66rem;
    color: #999;
    font-family: PingFangSC-Regular;
    font-size: .26rem;
    line-height: .36rem;
}


</style>