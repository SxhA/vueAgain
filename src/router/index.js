import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/layout'
import Home from '../components/view/home'
import About from '../components/view/about'
import Footeball from '../components/view/football'
import Stroke from '../components/view/stroke'
import Cartoon from '../components/view/cartoon'

import store from '../store/store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: Layout,
            children:[
                {
                    path: 'home',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'football',
                    name: 'football',
                    component: Footeball
                },
                {
                    path: 'stroke',
                    name: 'stroke',
                    component: Stroke
                },
                {
                    path: 'cartoon',
                    name: 'cartoon',
                    component: Cartoon
                },
                {
                    path: 'about',
                    name: 'about',
                    component: About
                }
            ]
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     store.commit('changNavActive',{
//         navActive: to.name
//     })
//     next()
// })

export default router;
