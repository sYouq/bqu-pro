

const state={
	playIndex:1,
	lockSwiper:false,
}

const mutations={
	handleChangPlayIndex(state,params){
		state.playIndex=params;
	},
	handleChangeLock(state,params){
		state.lockSwiper=params;
	}
}

const actions={
	findChangPlayIndex(context,params){
		context.commit("handleChangPlayIndex",params);
	},
	findChangeLock(context,params){
		context.commit("handleChangeLock",params);
	},
	headerChangPlayIndex(context,params){
		context.commit("handleChangPlayIndex",params);
	},
	contentChangeLock(context,params){
		context.commit("handleChangeLock",params);
	},
}

export default {
	namespaced:true,
	state,
	actions,
	mutations,
}


