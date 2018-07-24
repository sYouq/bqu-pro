

const state={
	playIndex:1,
}

const mutations={
	handleChangPlayIndex(state,params){
		state.playIndex=params;
	}
}

const actions={
	findChangPlayIndex(context,params){
		context.commit("handleChangPlayIndex",params);
	}
}

export default {
	namespaced:true,
	state,
	actions,
	mutations,
}


