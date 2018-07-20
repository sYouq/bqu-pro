<template>
    <footer id="footer">
        <ul>
            <li v-for="(item , index) in list" :key="index" @click="checkPage(item.path, index)" ref="flist" :class="{active : index == isActive}">
                <i class="iconfont" :class="item.font"></i>
                <span>{{item.title}}</span>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    data(){
        return {
            list : [
                {title : "首页", font : "icon-home", path : "/home"},
                {title : "动态", font : "icon-xiaoxixuanzhong01", path : "/dynamic"},
                {title : "消息", font : "icon-web-icon-", path : "/message"},
                {title : "我", font : "icon-wode1", path : "/mine"}
            ],
            isActive : 0,
        }
    },
    methods : {
        checkPage(path, index){
            this.$router.push(path);
            this.isActive = index;
        }
    }
}
</script>

<style scoped>
    #footer{
        position: absolute;
        left:0;
        bottom:0;
        width: 100%;
        height:0.98rem;
        background: #fff;
    }
    #footer ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }
    #footer ul li{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: .18rem;
        color: #4a4a4a;
    }
    #footer ul li i{
        font-size:.48rem;
        margin-bottom: .08rem;
    }
    #footer ul li.active{
        color:#F1457C;
    }
</style>
