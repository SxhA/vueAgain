<template>
    <div class="footer_box">
        <router-link v-for="item in footerList" :to="{path: item.link}" tag="div" :key="item.index">
            <i class="iconfont" :class="item.icon"></i>
            <p>{{item.text}}</p>
        </router-link>
        <!-- <div>
            <i class="iconfont icon-homefill"></i>
            <p>首页</p>
        </div>
        <div>
            <i class="iconfont icon-iosfootball"></i>
            <p>足球</p>
        </div>
        <div>
            <i class="iconfont icon-stroke"></i>
            <p>行程</p>
        </div>
        <div>
            <i class="iconfont icon-cartoon"></i>
            <p>动漫</p>
        </div>
        <div>
            <i class="iconfont icon-me2"></i>
            <p>介绍</p>
        </div> -->
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data(){
        return{
            footerList: [
                {
                    text: '首页',
                    link: 'home',
                    icon: 'icon-homefill'
                },
                {
                    text: '足球',
                    link: 'shenhua',
                    icon: 'icon-iosfootball'
                },
                {
                    text: '行程',
                    link: 'stroke',
                    icon: 'icon-stroke'
                },
                {
                    text: '动漫',
                    link: 'cartoon',
                    icon: 'icon-cartoon'
                },
                {
                    text: '介绍',
                    link: 'about',
                    icon: 'icon-me2'
                }
            ]
        }
    },
}
</script>

<style>

</style>
