// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
// 导入vuex
import store from './store/store'

//导入jquery
import $ from 'jquery'

//引入css样式
import '@/assets/css/iconfont/iconfont.css'
import './assets/css/app.scss'

Vue.use(ElementUI);
Vue.config.productionTip = false

//引入vue-amap，饿了么的高德地图组件
import VueAMap from 'vue-amap'
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'cf412a7204a96fe1e5574284a410124b',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  uiVersion: '1.0.11'
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    data () {
        return {
            clientHeight: ''
        }
    },
    mounted: function () {
        //html字体大小恒等于屏幕宽度的1%，这样1rem=1%
        //document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + 'px'; 
        //window.addEventListener("orientationchange", setRem);
        //window.addEventListener("resize", setRem);
        setRem()
        window.onresize = function(){
            setRem()
            //document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + 'px'; 
        }
    }
})

function setRem() {
    var html = document.querySelector("html");
    var width = html.getBoundingClientRect().width;
    html.style.fontSize = width / 15 + "px";
}
