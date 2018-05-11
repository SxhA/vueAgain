<template>
    <section class="home_main">
        <div class="home_nav">
            <div class="innerDiv">
                <router-link to="/home" class="home_link" exact tag="div" @click.native="moveLine($event, 0)">
                    前端
                </router-link>
                <router-link to="/home/backend" class="home_link" tag="div" @click.native="moveLine($event, 1)">
                    后端
                </router-link>
                <router-link to="/home/other" class="home_link" tag="div" @click.native="moveLine($event, 2)">
                    其他
                </router-link>
                <section :class="{line_movea: tabA, line_moveb: tabB, line_movec: tabC}"></section><!--导航下方移动的线-->
            </div>
        </div>
        <div class="home_view">
            <transition>
                <router-view></router-view>
            </transition>
        </div>
    </section>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: {
        swiper,
        swiperSlide
    },
    data (){
        return {
            tabA: true,
            tabB: false,
            tabC: false
        }
    },
    mounted: function(){
        //初始化home_view的最小高度
        let minHeight = $(window).height() - $('.nav_box').height() - $('.home_nav').height()
        $('.home_view').css('min-height',minHeight);
    },
    methods: {
        moveLine: function(e, num){
            switch (num){
                case 0:
                    this.tabA = true
                    this.tabB = false
                    this.tabC = false
                    break;
                case 1:
                    this.tabA = false
                    this.tabB = true
                    this.tabC = false
                    break;
                case 2:
                    this.tabA = false
                    this.tabB = false
                    this.tabC = true
                    break;
            }
        }
    }
}
</script>

<style>

</style>
