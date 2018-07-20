import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    
    a : 1,//测试数据，可以删除
    b : 2//测试数据，可以删除
};

export default new Vuex.Store({
    state
})