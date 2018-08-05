<template>
    <div class="login-wrap">
        <h1 class="header">登录</h1>
        <div class="logo">
            <img src="images/login/logo300.png" alt="" class="logo-img"><span></span>
        </div>
        <div class="login-ipt">
            <div class="phone-number ipt">
                <i class="iconfont icon-unie639"></i>
                <input type="text" class="phone" placeholder="请输入您的手机号码" @input="checkPhoneNumber" ref="phone">
                <span class="btn-sendcode" :class="{focusBg : rellayPhone}" @click="getCodeAction">发送验证码</span>
            </div>
            <div class="code-meg ipt">
                <i class="iconfont icon-suo"></i>
                <input type="text" class='code' placeholder="请输入短信验证码??" @input="checkCodeAction" ref="code">
            </div>
            <div class="ipt login" @click="loginAction()">
                登录
            </div>
            <transition name="fade">
                <div class="prompt" v-show="isShowError">
                    {{ errorMeg }}
                </div>
            </transition>
        </div>
        <div class="other-login">
            <p class="other-login-title">其他登录方式</p>
            <div class="other-logo">
                <span><img src="images/login/qq.png" alt=""></span>
                <span><img src="images/login/wechart.png" alt=""></span>
                <span><img src="images/login/xinlang.png" alt=""></span>
            </div>
        </div>
    </div>
</template>

<script>
import {getCode , sendLogin} from "../../services/loginService.js";
export default {
    data(){
        return {
            isPhone : false, //控制点击登录的按钮
            rellayPhone : false, //判断是否是正确的电话号码
            isCode : false,  //控制点击登录的按钮
            isShowError : false,
            errorMeg : '' 
        }
    },
    methods : {
        checkPhoneNumber(){
            var phoneNum = this.$refs.phone.value;
            var reg = /^1\d{10}$/;
            if(!reg.test(phoneNum)){
                this.isPhone = true;
                this.isShowError = true;
                this.errorMeg = "请输入正确的手机号";
                this.rellayPhone = false;
            }else{
                this.isPhone = false;
                this.isShowError = false;
                this.rellayPhone = true;
            }

            // var timeOut = setTimeout(()=>{
            //     clearTimeout(timeOut);
            //     this.isShowError = false;
            // },3000)
        },
        checkCodeAction(){
            var code = this.$refs.code.value;
            
            //后台传来状态值
            // if(code != 123){
            //     this.isCode = true;
            //     this.isShowError = true;
            //     this.errorMeg = "验证码错误";
            // }else{
            //     this.isCode = false;
            //     this.isShowError = false;
            // }
            if(code == ""){
                this.isCode = true;
                this.isShowError = true;
                this.errorMeg = "验证码不能为空";
            }else{
                this.isCode = false;
                this.isShowError = false;
            }

           
            // var timeOut = setTimeout(()=>{
            //     clearTimeout(timeOut);
            //     this.isShowError = false;
            // },3000)
        },
        //点击登录的事件
        loginAction(){
            if(this.$refs.code.value == "" || this.$refs.code.value == ""){
                this.isShowError = true;
                this.errorMeg = "请正确填写信息";
                
                //this.$store.dispatch('user/modifyIsLogin', {phone : '18174080072', isLogin : true})
                // console.log(this.$store)
                //测试 localStorage.setItem("uesr",'{"phone" : "18174080072", "isLogin" : true}');
            }
           else if(this.isPhone == true || this.isCode == true){
                this.isShowError = true;
            }
            else{
                //点击登录，发送手机号码和验证码到服务端
                console.log(this.$refs.code.value)
                var phoneNum = this.$refs.phone.value;
                var codeNum = this.$refs.code.value;
                sendLogin(phoneNum, codeNum).then((result)=>{
                    console.log(result)
                    if(result.code == 200){
                        var uesrObj = {phone : phoneNum, isLogin : true};
                        localStorage.setItem("uesr",JSON.stringify(uesrObj));
                        this.$store.dispatch('modifyIsLogin', uesrObj);
                        this.$router.push("/home");
                        
                    }else if(result.code == 404){
                        this.errorMeg = result.msg;
                        console.log(this.errorMeg)
                        this.isShowError = true;
                        this.errorMeg = result.msg;
                        setTimeout(()=>{
                            this.errorMeg = "";
                            this.isShowError = false;
                        },3000)
                    }
                });
            }
        },
        //点击发送验证码，获取验证码
        getCodeAction(){
            console.log(this.$refs.phone.value);
            if(this.rellayPhone){
                var phoneNum = this.$refs.phone.value;
                //获取验证码
                getCode(phoneNum).then((result)=>{
                    console.log(result)
                    this.isShowError = true;
                    this.errorMeg = "验证码已发送成功，请注意查收";
                    setTimeout(()=>{
                        this.errorMeg = "";
                        this.isShowError = false;
                    },3000)
                    
                });
            }
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
.login-wrap{
    width: 100%;
    height: 100%;
    position: absolute;
    left : 0;
    top:0;
    background: #fff;
    z-index: 2;
}
.header{
    width: 100%;
    height: .88rem;
    text-align: center;
    line-height: .88rem;
    font-size: .32rem;
}
.logo{
    height: 3.6rem;
    text-align:center;
}
.logo span{
    height: 100%;
    width: 0;
    display:inline-block;
    vertical-align: middle;
}
.logo-img{
    width: 2.64rem;
    /* margin: 0 auto; */
    display: inline-block;
    vertical-align: middle;

}
.login-ipt{
    margin-top: .99rem;
    width: 100%;
    position:relative;
}
.ipt{
    width: 6rem;
    height: .8rem;
    background: #F3F5F7;
    margin:0 auto .28rem;
    border-radius:.08rem;
    position:relative;
    line-height: .8rem;
}
.ipt i{
    margin-left: .3rem;
    font-size: .4rem;
    color:#999;
}
.phone,.code{
    width: 3rem;
    height: .5rem;
    margin-left: .18rem;
    outline:none;
    border:none;
    background: #F3F5F7;
}
.btn-sendcode{
    display: block;
    position:absolute;
    top:.1rem;
    right:.1rem;
    width: 1.6rem;
    height: .6rem;
    background: #ddd;
    text-align: center;
    line-height:.6rem;
    color:#fff;
    border-radius: .06rem;
    font-size: .28rem;
}
.focusBg{
    background: lightblue;
}
.phone-number{

}   
.code-meg{

}
.login{
    background: #F1457C;
    margin-top: 1.42rem;
    text-align: center;
    color:#fff;
    font-size: .32rem;
}
.prompt{
    position:absolute;
    padding : 0 .2rem;
    height: .6rem;
    bottom:1rem;
    left:50%;
    transform: translateX(-50%);
    font-size: .24rem;
    background: rgba(0,0,0,.7); 
    text-align: center;
    line-height: .6rem;
    border-radius: 6px;
    color:#fff;
}
.other-login{
    margin-top: .64rem;
}
.other-login-title{
    width: 6rem;
    height: .64rem;
    margin: 0 auto;
    border-bottom:1px solid #E4E4E4;
    text-align: center;
    line-height:.64rem; 
    font-size: .28rem;
    color:#8A8A8A;
}
.other-logo{
    display: flex;
    justify-content : center;
}
.other-logo span img{
    width: .8rem;
    height: .8rem;
    margin: .2rem .4rem;
}

@keyframes fadeIn {
    from{opacity : 0}
    to{opacity: 1;}
}
@keyframes fadeOut {
    from{opacity : 1}
    to{opacity: 0;}
}
.fade-enter-active{
    animation : fadeIn 500ms;
}
.fade-leave-active{
    animation : fadeOut 500ms;
}
</style>
