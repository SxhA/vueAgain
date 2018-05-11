import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/layout'
import Home from '../components/view/home'
import Note from '../components/view/note'
import Footeball from '../components/view/football'
import Stroke from '../components/view/stroke'
import Cartoon from '../components/view/cartoon'
import Fontend from '../components/view/fontend'
import Backend from '../components/view/backend'
import Other from '../components/view/other'

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
                    component: Home,
                    children: [
                        {
                            path: '',//这样写成空就代表Fontend为home的子路由，/home/fontend
                            name: 'home',//Fontend是home的默认子路由，所以name: 'home'写在这里
                            component: Fontend
                        },
                        {
                            path: 'backend',
                            name: 'backend',
                            component: Backend
                        },
                        {
                            path: 'other',
                            name: 'other',
                            component: Other
                        },
                    ]
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
