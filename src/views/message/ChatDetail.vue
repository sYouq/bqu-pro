<template>
    <div class="chat-detail">
        <!-- 头部 -->
        <app-content class="chat-detail-main" ref="content" :reciveScroll = "true">
            <div class="chat-meg" ref="chatMeg">
                <p class="chat-time">18:06</p>
                <!-- 综合 -->
                <div class="clearfix" :class ="{'chat-left' : item.direction == 1, 'chat-right' : item.direction == 2}" ref="chat" v-for="(item, index) in chatMeg" :key="index">
                    <div class="head-img" v-show="item.direction == 1">
                        <img :src="headerImg" alt="">
                    </div>
                    <div class="text-meg" v-if="item.type == 'text' || item.type == 'sound'" v-show="item.direction == 1">
                        <p v-if="item.type == 'text'">{{item.megCont}}</p>
                        <div class="sound-meg" v-if="item.type == 'sound'">
                            <i class="iconfont icon-shengyin1"></i>
                            <span>{{item.realyTime}}''</span>
                        </div>
                        
                        <span class="left-icon"></span>
                    </div>

                    <div class="img-meg img-fl" v-if="item.type == 'img'" v-show="item.direction == 1">
                        <img :src="item.megCont" alt="">
                    </div>

                    <div class="fr" v-show="item.direction == 2">
                        <div class="text-meg right-meg"  v-if="item.type == 'text' || item.type == 'sound'">
                            <p v-if="item.type == 'text'">{{item.megCont}}</p>
                            <div class="sound-meg r-sound" v-if="item.type == 'sound'">
                                    <i class="iconfont icon-shengyin1"></i>
                                    <span>{{item.realyTime}}''</span>
                            </div>
                            <span class="right-icon"></span>
                        </div>

                        <div class="img-meg img-fr" v-if="item.type == 'img'">
                            <img :src="item.megCont" alt="">
                        </div>
                        <div class="head-img">
                            <img :src="headerImg" alt="">
                        </div>
                    </div>

                </div>
                <!-- 右边 -->
                <!-- <div class="chat-right clearfix">
                    <div class="fr">
                        <div class="text-meg right-meg"  v-if="megType == 'text' || megType == 'sound'">
                            <p v-if="megType == 'text'">{{megCont}}</p>
                            <div class="sound-meg r-sound" v-if="megType == 'sound'">
                                    <i class="iconfont icon-shengyin1"></i>
                                    <span>{{realyTime}}''</span>
                            </div>
                            <span class="right-icon"></span>
                        </div>

                        <div class="img-meg img-fr" v-if="megType == 'img'">
                            <img :src="megCont" alt="">
                        </div>
                        <div class="head-img">
                            <img :src="headerImg" alt="">
                        </div>
                    </div>
                </div> -->
            </div>
        </app-content>
        <!-- 语音输入框展示 -->
        <div class="sound-inpt-now" v-show="isSay">
            <p class="sound-time-count">{{ time | timeFormat}}</p>
            <span class="sound-logo">
                <img src="images/message/huatong.png" alt="" v-show="isCancel == false">
                <i class="iconfont icon-jingyin" v-show="isCancel == true"></i>
            </span>
            <p class="sound-ipt-meg">{{promptMeg[1]}}</p>
        </div>
        <!-- 页脚 -->
        <div class="chat-detail-footer">
            <span class="sound" @tap="checkInptAction()">
                <i class="iconfont icon-shengyin"></i>
            </span>
            <!-- 输入框 -->
            <input type="text" ref="ipt" class="ipt" v-show="checkInpt == true" @input="inputMegAction()" >

            <!-- 语音框 -->
            <span class="sound-ipt-btn" ref="soundIpt" v-show="checkInpt == false" @touchstart="isSayAction($event)" >
                {{promptMeg[0]}}
            </span>
            <span class="expression">
                <i class="iconfont icon-xiao"></i>
            </span>

            <span class="more-features">
                <i class="iconfont icon-jiahao" v-show="isInput == false"></i>
                <b class="sendBtn" v-show="isInput == true" @click="sendMegAction()">发送</b>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            megType : 'sound',

            chatMeg : [
                {
                    direction : 1, //2为自己发的消息
                    type : "text",
                    megCont : "nice",
                    realyTime : 0,
                    //time : new Date().getTime() //时间撮，可以根据时间来排列消息的顺序
                    time : 1533212835926
                },
                {
                    direction : 2, //1 为好友发的消息
                    type : "img",
                    megCont : "images/message/34.jpg",
                    realyTime : 0,
                    //time : new Date().getTime()
                    time : 1533212868955
                }
            ],
            headerImg : 'images/message/15.jpg',
            checkInpt : true, //切换语音和输入框
            isSay : false, //是否正在语音输入
            time : 0,//语音记时
            realyTime : 0, //记录时间
            promptMeg : ["点击输入语音","手指上划，取消发送"], //操作提示
            isCancel : false,   //改变取消发送的状态
            isReallyCancel : false,  //是否真正的取消了发送
            isInput : false, //是否正在输入内容
        }
    },
    methods : {
        checkInptAction(){
            this.checkInpt = !this.checkInpt;
        },
        //输入语音时的状态
        isSayAction(event){
            var _this = this;
            this.isReallyCancel = false;
            this.isSay = true;
            this.promptMeg[0] = "松手发送";
            var soundIpt = $(this.$refs.soundIpt);
            var time = event.timeStamp;
            //时间的计算
            var t = 0;
            var timer = setInterval(()=>{
                t++;
                this.time = t;
                
            },1000)
            //检测手指在屏幕上移动的位置，距离
            var startPositionY , endPositionY ,  disY;
            var touch = event.touches[0];
            startPositionY = touch.pageY;

            //松手发送
            soundIpt.on("touchend", (e)=>{
                clearInterval(timer);
                this.isSay = false;
                this.realyTime = t;
                //发送语音，视图层,过滤掉0秒时的消息
                //把语音保存，存到后台（未做）
                if(this.realyTime > 0 && !this.isReallyCancel){
                    this.chatMeg.push({
                        direction : 2, //1 为好友发的消息
                        type : "sound",
                        megCont : "",
                        realyTime : this.realyTime,
                        time : new Date().getTime()
                    })
                }
                
                this.time = 0;
                this.promptMeg[0] = "点击输入语音";
                this.isCancel = false;
                this.promptMeg[1] = "手指上划，取消发送";
                document.removeEventListener("touchmove", swipeTop);
                soundIpt.off('touchend')
            })
            // 上划取消
            document.addEventListener("touchmove",swipeTop );
            
            //移动时的方法
            function swipeTop(e){
                //this指向的是document
                var touch = e.touches[0];
                endPositionY = touch.pageY;
                disY = endPositionY - startPositionY;
                if(disY <= -150){
                    _this.isCancel = true;
                    _this.promptMeg[1] = "松手，取消发送";
                    _this.isReallyCancel = true;
                }
                if(disY > -150){
                    _this.isCancel = false;
                    _this.promptMeg[1] = "手指上划，取消发送";
                    _this.isReallyCancel = false;
                }
            }
        },
        //输入内容时的状态
        inputMegAction(){
            var iptVal = this.$refs.ipt.value;
            if( iptVal != ""){
                this.isInput = true;
            }else{
                this.isInput = false;
            }
        },
        sendMegAction(){
            this.chatMeg.push({
                direction : 2, //1 为好友发的消息
                type : "text",
                megCont : this.$refs.ipt.value,
                realyTime : 0,
                time : new Date().getTime()
            })
            
            this.$refs.ipt.value = "";
            this.isInput = false;
           
        }
    },
    watch : {
        chatMeg(){      
            this.$nextTick(()=>{
                //内容的高度
                var megHeight = this.$refs.chatMeg.scrollHeight;
                //滚动容器视图的高度
                var wrapHeight = this.$refs.content.myScroll.wrapperHeight
                //当内容的高度大于滚动容器视图的高度时
                if(megHeight > wrapHeight){
                    this.$refs.content.myScroll.scrollTo(0, -this.$refs.chatMeg.scrollHeight + wrapHeight)
                }
            })

        }
    },
    mounted(){

    }

}
</script>

<style scoped>
    .chat-detail{
        width: 100%;
        height: 100%;
        position:absolute;
        left: 0;
        top: 0;
        bottom: 0;
        background: #fff;
        z-index: 2;
    }
    .chat-detail-main{
        bottom: 1rem !important;
        background: #f5f5f5;
    }
    .chat-meg{
        padding: 0 .3rem;
        overflow: hidden;
    }
    .chat-time{
        width: 100%;
        height: .6rem;
        text-align:center;
        line-height:.6rem;
        color:#dedede;
        font-size: .28rem;

    }
    .chat-left{
        float: left;
        display:flex;
    }
    .chat-left, .chat-right{
        width: 100%;
        margin: .2rem 0;
        
        position:relative;
        overflow: hidden;
    }
    .head-img{
        width: 1rem;
        height: 1rem;

    }
    .head-img img{
        width: 100%;
        height: 100%;
    }
    .text-meg{
        position:relative;
        margin-top: .76rem;
        margin-left: .24rem;
        max-width:3.6rem ;
        padding: 0.14rem .2rem;
        background: #4CA9EC;
        border-radius:4px;
    }
    .text-meg p{
        line-height: .4rem;
        font-size: .28rem;
        color:#E1E1E1;
    }

    .sound-meg{
        color:#E1E1E1;
    }
    .sound-meg i{
        color:#E1E1E1;
        font-size: .3rem;
        margin-right: .15rem;
    }   
    .r-sound{
        color:#4D4D4D;
    }
    .r-sound i{
        color:#4D4D4D;
    }

    

    .img-fl{
        margin-left: .24rem;
    }
    .img-fr{
        margin-right: .24rem;
    }
    .img-meg{
        margin-top: .44rem;
        width: 2.2rem;
    }
    .img-meg img{
        width: 100%;
        border-radius: 6px;
    }
    .left-icon{
        display: block;
        position:absolute;
        left:-.10rem;
        top:0.07rem;
        width: 0;
        height: 0;
        border:.05rem solid;
        border-color: transparent #4CA9EC #4CA9EC transparent;
    }
    .chat-right{
        
    }
    .fr{
        float: right;
        display:flex;
    }
    .right-icon{
        display: block;
        position:absolute;
        right:-.10rem;
        top:0.07rem;
        width: 0;
        height: 0;
        border:.05rem solid;
        border-color: transparent  transparent #9e9e9e #9e9e9e;
    }
    .right-meg{
        margin-right: .24rem;
        background: #ebebeb;
    }
    .right-meg p{
        color:#4D4D4D;
    }

    /* 页脚 */
    .chat-detail-footer{
        position:absolute;
        width: 100%;
        height: 1rem;
        left: 0;
        bottom:0;
        display:flex;
        align-items:center;
        border-top:1px solid #e8e8e8;
    }
    .sound{
        margin-left: .38rem;
    }
    .sound i, .expression i, .more-features i{
       font-size: .54rem;
       color:#979797;
    }
    .ipt{
        width: 4.4rem;
        height: .56rem;
        margin: 0 .25rem;
        border:none;
        border-bottom:1px solid #efefef;
        outline : none;
    }
    .sound-ipt-btn{
        display: block;
        margin: 0 .4rem;
        width: 4.12rem;
        height: .52rem;
        background: #4ca9ec;
        color:#fff;
        text-align: center;
        line-height:.52rem;
        font-size: .24rem;
        border-radius : .52rem;
    }
    .sound-inpt-now{
        position:absolute;
        left: 2.2rem;
        bottom:1.92rem;
        width: 3.1rem;
        height: 2.82rem;
        background: #fff;
        border-radius:.08rem;
    }
    .sound-time-count{
        margin-top: .22rem;
        font-size: .28rem;
        line-height:.4rem;
        text-align:center;
        color:#A6A6A6;
    }
    .sound-logo{
        display: block;
        width: 1.42rem;
        height: 1.42rem;
        background: #4CA9EC;
        border-radius:50%;
        margin: .08rem auto 0;
        text-align: center;
        line-height:1.42rem;
    }
    .sound-logo img{
        width: 100%;
    }
    .sound-logo i{
        font-size: .54rem;
        color:#ededed;
    }
    .sound-ipt-meg{
        margin-top: .12rem;
        font-size: .28rem;
        color:#505050;
        text-align:center;
        line-height:.4rem;
    }
    .expression{
        /* margin-left: .25rem; */
    }
    /* .expression i{
        font-size: .54rem;
    } */
    .more-features{
        margin-left: .18rem;
    }
    /* .more-features i{
        font-size: .54rem;
    } */
    .sendBtn{
        display : block;
        background: #4CA9EC;
        color:#fff;
        width: .8rem;
        height: .54rem;
        font-size: .28rem;
        text-align: center;
        line-height: .54rem;
        border-radius: .1rem;
    }
</style>
