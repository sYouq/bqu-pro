const state = {
    userName : JSON.parse(localStorage.getItem("uesr")).phone,
    userIsLogin : JSON.parse(localStorage.getItem("uesr")).isLogin
}

const mutations ={
    isLoginAction(state, value){
        console.log(value)
        state.userName = value.phone;
        state.userIsLogin = value.isLogin;
    }
}

const actions = {
    modifyIsLogin(context, params){
        


        console.log(params)
        context.commit("isLoginAction", params);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}