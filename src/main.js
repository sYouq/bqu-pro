import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
//中间组件，用于传值
Vue.prototype.$pubsub = new Vue();

//引入内容部分可以滚动的组件，设置为全局组件
import AppContent from "@/components/common/AppContent.vue";
Vue.component("app-content", AppContent);
//定义过滤器例子
import { arrToString } from './filter/arrToString.js';
Vue.filter("arrToString", arrToString);
//数字转换为时间格式
import {timeFormat} from "./filter/timeFormat.js";
Vue.filter("timeFormat", timeFormat);





Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
