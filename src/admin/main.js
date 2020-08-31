import Vue from 'vue';
import App from './App.vue'
import SimpleVueValidation from 'simple-vue-validator';

import router from './router'

Vue.use(SimpleVueValidation, {mode: 'manual'});

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});