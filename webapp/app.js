import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
Vue.use(VueRouter);
import App from './components/App.vue';

// new Vue({
//     el: '#app',
//     render: h => h(App)
// })

import Index from './components/index/Index.vue';
import Banner from './components/banner/Banner.vue';

const routes = [{
    path: '/index',
    component: Index
}, {
    path: '/banner',
    component: Banner
}];

const router = new VueRouter({
    routes,
    // mode: 'history'
});

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
