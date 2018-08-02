<template>
    <div id="qrcode">

        <header>
            <i @click="goBack" class="return iconfont icon-fanhui"></i>
            <h1>二维码</h1>

        </header>
        <div id="qrcode-wrap" @click="goBack">

            <div id="box" >
                <div id="box-wrap">

                <li>
                        <i class="userpic"></i>
                        <span class="name">小柒</span>
                        <span class="id">伴趣ID：264852346</span>

                    </li>
                    <i class="qrcode iconfont icon-erweima"></i>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    goBack() {
      history.back();
    }
  }
};
</script>

<style scoped>
#qrcode {
  position: relative;
  width: 100%;
  height: 13.34rem;
  z-index: 20;
}
#qrcode-wrap{
    width: 100%;
    height: 12.06rem;
    position: absolute;
    left: 0;
    top: 1.28rem;
  background: rgba(0, 0, 0, 0.3);
}
#qrcode header {
  background: #f1457c;
  height: 1.28rem;
  text-align: center;
  position: relative;
  z-index: 20;
}
#qrcode header .return {
  color: #fff;
  position: absolute;
  top: 0.7rem;
  left: 0.3rem;
  font-size: 0.28rem;
  z-index: 20;
}
#qrcode header h1 {
  position: absolute;
  top: 0.6rem;
  left: 3.34rem;
  color: #fff;
  font-family: PingFangSC-Regular;
  font-size: 0.34rem;
  line-height: 0.48rem;
}
#qrcode #box {
  display: block;
  width: 6.4rem;
  height: 10rem;
  background: #fff;
  position: absolute;
  top: 1.04rem;
  left: 0.56rem;
}
#qrcode #box #box-wrap {
  position: relative;
  width: 6.4rem;
  height: 10rem;
}
#qrcode #box #box-wrap .qrcode{
    position: absolute;
    display: block;
    left: 1.2rem;
    top: 3rem;
    color: #4a4a4a;
    width: 4rem;
    height: 4rem;
    font-size:4rem;
    line-height: 4rem;
}
#qrcode #box-wrap li{
    width: 100%;
    height: .88rem;
    position: absolute;
    top: .4rem;
    left: .4rem;
}
#qrcode #box-wrap li .userpic {
  width: 0.88rem;
  height: 0.88rem;
  position: absolute;
  top: 0.05rem;
  left: 0.3rem;
  background: #eee;
}
#qrcode #box-wrap li .name {
  position: absolute;
  top: 0.16rem;
  left: 1.36rem;
  font-family: PingFangSC-Regular;
  font-size: 0.3rem;
  line-height: 0.42rem;
  color: #333;
}
#qrcode #box-wrap li .id {
  position: absolute;
  top: 0.54rem;
  left: 1.36rem;
  font-family: PingFangSC-Regular;
  font-size: 0.26rem;
  line-height: 0.36rem;
  color: #999;
}
</style>