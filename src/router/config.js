// 登录前页面
import Index from '../view/App.vue';
import Login from '../view/login.vue';
import Test from '../view/pulbic/test.vue';
import userManage from '../view/userManage.vue';
import PublicIndex from "../view/pulbic/index.vue";

export default [
    {path: '/', component: Index},
    {path: '/login', component: Login},
    {path: '/userManage.html', component: userManage},
    {
        path: '/publicIndex', component: PublicIndex,
        children: [
            {path: 'test.html', component: Test},
        ]
    }
];