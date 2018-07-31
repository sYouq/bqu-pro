import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//四个页面的组件
import Home from "./views/home/Home.vue";
import Dynamic from "./views/dynamic/Dynamic.vue";
import Message from "./views/message/Message.vue";
import Mine from "./views/mine/Mine.vue";

//设置组件
import FongSetting from "./components/common/FongSetting.vue";
//四个设置数据组件
import Account from "./components/setting/Account.vue"
import Safe from "./components/setting/Safe.vue";
import ClearPlace from "./components/setting/ClearPlace.vue";
import About from "./components/setting/About.vue";
//个人资料组件
import FongPersonalData from "./components/common/FongPersonalData.vue";
//六个个人资料数据组件
import Pet from "./components/selfdata/Pet.vue";
import Sex from "./components/selfdata/Sex.vue";
import Qrcode from "./components/selfdata/Qrcode.vue";
import Birth from "./components/selfdata/Birth.vue";
import Area from "./components/selfdata/Area.vue";
import Textarea from "./components/selfdata/Textarea.vue";
//分享组件
import FongShare from "./components/common/FongShare.vue";


export default new Router({
  mode: 'history',
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
      name: 'setting',
      path: '/setting',
      component: FongSetting,
      children: [
        {
          name: 'account',
          path: '/setting/account',
          component: Account

        },
        {
          name: 'safe',
          path: '/setting/safe',
          component: Safe

        },
        {
          name: 'clear-place',
          path: '/setting/clear-place',
          component: ClearPlace

        },
        {
          name: 'about',
          path: '/setting/about',
          component: About

        }
      ]
    },

    {
      path: '/selfdata',
      name: 'selfdata',
      component: FongPersonalData,
      children: [
        {
          name: 'pet',
          path: '/selfdata/pet',
          component: Pet
        },
        {
          name: 'sex',
          path: '/selfdata/sex',
          component: Sex
        },
        {
          name: 'qrcode',
          path: '/selfdata/qrcode',
          component: Qrcode
        },
        {
          name: 'birth',
          path: '/selfdata/birth',
          component: Birth
        },
        {
          name: 'area',
          path: '/selfdata/area',
          component: Area
        },
        {
          name: 'textarea',
          path: '/selfdata/textarea',
          component: Textarea
        },
      ]

    },
    {
      path: '/share',
      name: 'share',
      component: FongShare

    },





    {
      path : "**",
      redirect : '/'
    }
  ]
})

