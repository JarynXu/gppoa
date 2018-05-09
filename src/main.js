import Vue from 'vue'
import App from './view/App.vue'
import iView from 'iview'
import routes from './router/config'
import VueRouter from 'vue-router'
import 'iview/dist/styles/iview.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/global/css/global.css'

Vue.use(VueRouter);
Vue.use(iView);

const router = new VueRouter({
    routes: routes
});
router.beforeEach((to, from, next) => {//开始进度条动画
    iView.LoadingBar.start();
    next();
});
router.afterEach(() => {//结束进度条动画
    iView.LoadingBar.finish();
});
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
