<template>
    <div class="content" ref="content">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    //由父组件在标签上传值， ：reciveScroll = "true" , 为true 时，表示打开滚动监听
    props : ["reciveScroll"],
    mounted(){
        var myScroll = new IScroll(this.$refs.content, {
            //配置参数，打开滚动监听事件
            probeType : 3
        });
        //把myScroll对象挂载到组件实例中，方便调用
        this.myScroll = myScroll;

        //滚动开始前都识别最新的高度，解决数据请求回来之后，不能滚动页面的问题
        myScroll.on("beforeScrollStart", ()=>{
            myScroll.refresh();
        })

        //判断当前组件页面是否需要监听滚动，
        if(this.reciveScroll){
            //正在滚动事件
            myScroll.on('scroll', ()=>{
                //事件。。。。
            })
        }
    }
}
</script>

<style scoped>
    .content{
        position: absolute;
        top:.88rem;
        left: 0;
        bottom : 0.98rem;
        width: 100%;
        overflow: hidden;
    }
</style>
