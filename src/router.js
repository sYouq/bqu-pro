import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//四个页面的组件
import Home from "./views/home/Home.vue";
import Dynamic from "./views/dynamic/Dynamic.vue";

import Message from "./views/message/Message.vue";
import ChatList from "./views/message/ChatList.vue";
import ChatDetail from "./views/message/ChatDetail.vue";

import Mine from "./views/mine/Mine.vue";
import Login from "./views/mine/Login.vue";


export default new Router({
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
      component: Message
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

