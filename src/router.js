import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//四个页面的组件
import Home from "./views/home/Home.vue";
import Dynamic from "./views/dynamic/Dynamic.vue";

import Message from "./views/message/Message.vue";
import ChatList from "./views/message/ChatList.vue";
import ChatDetail from "./views/message/ChatDetail.vue";
import AttentionList from "./views/message/AttentionList.vue";
import FriendList from "./views/message/FriendList.vue";

import Mine from "./views/mine/Mine.vue";
import Login from "./views/mine/Login.vue";


const router = new Router({
  routes: [
    {
      path: '/home',
      alias : '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: Dynamic
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      children : [
        {
          name : 'attentionList',
          path : 'attentionList',
          component : AttentionList
        },
        {
          name : 'friendList',
          path : "friendList",
          component : FriendList
        }
      ]
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      name : "login",
      path : "/login",
      component : Login
    },
    {
      name : "chat-list",
      path : "/chat-list",
      component : ChatList,
      children : [
        {
          name : "chatDetail",
          path : "chatDetail",
          component : ChatDetail
        }
      ]

    },

    {
      path : "**",
      redirect : '/'
    }
  ]
})


router.beforeEach((to, from, next)=>{

  var str = localStorage.getItem("uesr");
  var userLocal = JSON.parse(str);
  var auth = null;

  const nextRoute = [ 'home', 'dynamic', 'message', 'mine'];
  if(userLocal == null || userLocal.isLogin != true){
    auth = false;
  }else{
    auth = true;
  }
  if (nextRoute.indexOf(to.name) >= 0) {
      //未登录
      if (!auth) {
          router.push({name: 'login'})
      }
  }
  //已登录的情况再去登录页，跳转至首页
  if (to.name === 'login') {
      if (auth) {
          router.push({name: 'home'});
      }
  }

  next();

})


export default  router;