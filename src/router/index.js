import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/layout'
import Home from '../components/view/home'
import Note from '../components/view/note'
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
                    path: 'note',
                    name: 'note',
                    component: Note
                }
            ]
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     store.commit('changFooterActive',{
//         footerActive: to.name
//     })
//     next()
// })

export default router;
