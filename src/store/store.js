import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import chatPerson from './chatPerson'
import message from './message'
import activeChat from './activeChat'

export const store = new Vuex.Store({
    state: {
        showPanel: 0
    },
    getters: {
        getShowPanel(state) {
            return state.showPanel;
        }
    },
    mutations: {
        setShowPanel(state) {
            state.showPanel = 1;
        },
        disShowPanel(state) {
            state.showPanel = 0;
        },
    },
    modules: {
        chatPerson,
        message,
        activeChat,
    }
})

export default store