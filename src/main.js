import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import * as firebase from 'firebase';
import 'firebase/database'

import store2 from './store/store';

Vue.use(VueResource);

import { store } from './store/store';
import { router } from './router/routes';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyB8BcoCOKH2Uxk_mKtTo0eEa1nhnTOjbXM",
  authDomain: "whats-app-clone-77834.firebaseapp.com",
  databaseURL: "https://whats-app-clone-77834.firebaseio.com",
  projectId: "whats-app-clone-77834",
  storageBucket: "whats-app-clone-77834.appspot.com",
  messagingSenderId: "14710007621",
  appId: "1:14710007621:web:7a520c28ff5c75b2fdc02c",
  measurementId: "G-49QGJPH4JB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

/*******listening firebase */
firebase.auth().onAuthStateChanged((user) => {
  if (user) {

    let changed = firebase.database().ref('users/')

    changed.on('value', (snapshot) => {
      store2.commit('emptyChat');
      store2.dispatch('pullChatInfo',snapshot.val());
    })
  }
})
/************* */

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
