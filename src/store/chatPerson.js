import firebase from "firebase/app";
import "firebase/auth";

const state = {
    chatInfoSt: []
}

const getters = {
    getChatInfoSt(state) {
        return state.chatInfoSt;
    }
}

const mutations = {
    setChatInfoSt(state, payload) {
        state.chatInfoSt.push(payload)
    },
    emptyChat(state) {
        state.chatInfoSt = []
    }
}

const actions = {
    pullChatInfo({ commit }, payload) {
        let userId = firebase.auth().currentUser.uid
        for (let key in payload) {
            if (key !== userId) {
                payload[key].key = key
                console.log(payload[key])
                commit('setChatInfoSt', payload[key]);
            }
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}