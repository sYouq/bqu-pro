import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//四个页面的组件
import Home from "./views/home/Home.vue";
import Dynamic from "./views/dynamic/Dynamic.vue";
import Message from "./views/message/Message.vue";
import Mine from "./views/mine/Mine.vue";
import FongSetting from "./components/common/FongSetting.vue"
import FongPersonalData from "./components/common/FongPersonalData.vue"
import Account from "./components/setting/Account.vue"
import Safe from "./components/setting/Safe.vue"
import ClearPlace from "./components/setting/ClearPlace.vue"
import About from "./components/setting/About.vue"


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
      path: '/setting',
      name: 'setting',
      component: FongSetting,
      /*children: [
        {
          name: 'setting-data',
          path: 'detail/:option',
          component: SettingOption
        }
      ]*/
    },
    {
      path: '/selfdata',
      name: 'selfdata',
      component: FongPersonalData,
      /*children: [
        {
          name: 'setting-data',
          path: 'detail/:option',
          component: SettingOption
        }
      ]*/
    },
    {
      path: '/account',
      name: 'account',
      component: Account

    },
    {
      path: '/safe',
      name: 'safe',
      component: Safe

    },
    {
      path: '/clear-place',
      name: 'clear-place',
      component: ClearPlace

    },
    {
      path: '/about',
      name: 'about',
      component: About

    },

    {
      path : "**",
      redirect : '/'
    }
  ]
})

