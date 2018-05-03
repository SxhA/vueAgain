<template>
    <div class="nav_box">
        <router-link to="/" class="logo" tag="div">Liang</router-link>
        <!--PC导航右边部分-->
        <div class="nav_right">
            <!-- <router-link to="/about" tag="div">关于我</router-link>
            <router-link to="/technote" tag="div">技术笔记</router-link>
            <router-link to="/anime" tag="div">二次元</router-link> -->
            <router-link 
                v-for="(item, index) in navList" 
                :to="{ path: item.link }" 
                :key="index" 
                tag="div"
                :class="{nav_active: item.link == navActive}"
            >{{item.text}}
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data() {
        return {
            navList: [
                {
                    'link': 'about',
                    'text': '关于我'
                },
                {
                    'link': 'technote',
                    'text': '技术笔记'
                },
                {
                    'link': 'anime',
                    'text': '二次元'
                }
            ]
        }
    },
    name: 'Nav',
    computed: {
        ...mapState({
            navActive: 'navActive'
        })
    },
    methods: {
        
    }
}
function isClass(element, index, array){
    return (element == 'nav_active');
}
</script>

<style>

</style>
