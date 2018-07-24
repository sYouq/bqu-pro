import Vue from 'vue';
import Vuex from 'vuex';
import Home from "./home/home.js";
Vue.use(Vuex);

const store=new Vuex.Store({
    modules:{
    	Home,
    }
})

export default store;

console.log(store)
