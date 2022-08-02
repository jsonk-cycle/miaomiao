import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRoute from './movie'
import cinemaRoute from './cinema'
import mineRoute from './mine'

Vue.use(VueRouter)

const routes = [
    movieRoute,
    cinemaRoute,
    mineRoute,
    // 重定向到主页
    {
        path: '/*',
        redirect: "/movie"
    }
    // {
    //         path: '/',
    //         name: 'home',
    //         component: HomeView
    //     },
    //     // 按需引入组件
    //     {
    //         path: '/about',
    //         name: 'about',
    //         // route level code-splitting
    //         // this generates a separate chunk (about.[hash].js) for this route
    //         // which is lazy-loaded when the route is visited.
    //         component: () =>
    //             import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    //     }

]

const router = new VueRouter({
    mode: 'history',
    // 设置baseurl
    base: process.env.BASE_URL,
    routes
})

export default router