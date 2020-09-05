import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import WhatsApp from '../WhatsApp';
import Enter from '../components/enter/Enter';

export const router = new VueRouter({
    routes: [
        {path: '/', component: Enter},
        {path: '/app', component: WhatsApp},
    ],
    mode: "history"
})