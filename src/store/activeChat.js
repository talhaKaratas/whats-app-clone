const state = {
    activeChat : {}
}

const getters = {
    getActiveChat(state) {
        return state.activeChat
    }
}

const mutations = {
    setActiveChat(state, payload) {
        console.log(payload);
        state.activeChat = payload
    }
}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions,
}