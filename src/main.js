import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.config.productionTip = false
Vue.use(vueTextareaAutosize);

firebase.initializeApp({
    apiKey: "AIzaSyCW6eUepSD8m5tpb7TMtuAXAFT2BeT98gs",
    authDomain: "vue-calendar-f3540.firebaseapp.com",
    databaseURL: "https://vue-calendar-f3540.firebaseio.com",
    projectId: "vue-calendar-f3540",
    storageBucket: "vue-calendar-f3540.appspot.com",
    messagingSenderId: "433524826833",
    appId: "1:433524826833:web:694fcef21f9510a03a9bf0"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
