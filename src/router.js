import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//四个页面的组件
import Home from "./views/home/Home.vue";
import Dynamic from "./views/dynamic/Dynamic.vue";
import Message from "./views/message/Message.vue";
import Mine from "./views/mine/Mine.vue";

//动态Dynamic的子路由
import Autoimg from "./components/dynamic/autoImg.vue"
import Edit from './components/dynamic/edit.vue'
//Edit的子路由
import Selectimg from './components/dynamic/selectImg.vue'
import Position from './components/dynamic/position.vue'
import Jurisdiction from './components/dynamic/jurisdiction.vue'

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
      component: Dynamic,
      children: [
        {
          path: 'autoimg/:num',
          name: 'autoimg',
          component: Autoimg,
          props: true
        },
        {
          path: 'edit',
          name: 'edit',
          component: Edit,
          children: [
            {
              path: 'selectimg',
              name: 'selectimg',
              component: Selectimg,
            },
            {
              path: 'position',
              name: 'position',
              component: Position
            },
            {
              path: 'jurisdiction',
              name: 'jurisdiction',
              component: Jurisdiction
            }
          ]
        }
      ]
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
      path : "**",
      redirect : '/'
    }
  ]
})

