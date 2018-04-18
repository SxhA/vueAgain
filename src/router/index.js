import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/layout'
import Home from '../components/view/home'
import About from '../components/view/about'
import Anime from '../components/view/anime'
import Technote from '../components/view/technote'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: Layout,
            children: [
                {
                    path: '/',
                    name: 'Name',
                    component: Home
                },
                {
                    path: 'about',
                    name: 'About',
                    component: About
                },
                {
                    path: 'anime',
                    name: 'Anime',
                    component: Anime
                },
                {
                    path: 'technote',
                    name: 'Technote',
                    component: Technote
                }
            ]
        }
    ]
})
