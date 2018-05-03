import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/layout'
import Home from '../components/view/home'
import About from '../components/view/about'
import Anime from '../components/view/anime'
import Technote from '../components/view/technote'

import store from '../store/store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: Layout,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'about',
                    name: 'about',
                    component: About
                },
                {
                    path: 'anime',
                    name: 'anime',
                    component: Anime
                },
                {
                    path: 'technote',
                    name: 'technote',
                    component: Technote
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    store.commit('changNavActive',{
        navActive: to.name
    })
    next()
})

export default router;
