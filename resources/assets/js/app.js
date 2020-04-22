import './bootstrap';
import router from './routes';

// Vue.component('user-list', require('./components/User.vue'));
Vue.use(HighchartsVue.default)
new Vue({
    el: '#app',
    router: router
});
