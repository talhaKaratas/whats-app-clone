const state = {
    messages: []
}

const getters = {
    getMessages(state) {
        return state.messages;
    }
}

const mutations = {
    setMessages(state, payload) {
        state.messages.push(payload)
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