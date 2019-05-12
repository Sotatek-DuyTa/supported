import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueRouter from 'vue-router'
import routes from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
axios.defaults.headers.post['Content-Type'] = 'application/json';
window.axios = axios;

const router = new VueRouter(routes);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
