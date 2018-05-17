<template>
    <section class="section_main">
        <div class="amap_wrapper">
            <el-amap vid="amap" :zoom="zoom" :plugin="plugin" class="amap-demo" :center="center"></el-amap>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        let self = this
        return {
            zoom: 12,
            center: [121.59996, 31.197646],//center里面不能为空
            lat: 0,
            lng: 0,
            loaded: false,
            plugin: [{
                pName: 'Geolocation',
                events: {
                    init(o) {
                        // o 是高德地图定位插件实例
                        console.log(o)
                        o.getCurrentPosition((status, result) => {
                            console.log('map')
                            if (result && result.position) {
                                self.lng = result.position.lng;
                                self.lat = result.position.lat;
                                self.center = [self.lng, self.lat];
                                self.loaded = true;
                                self.$nextTick();
                            }
                        });
                    }
                }
            }]
        }
    },
    methods: {

    },
    created() {
        // this.init()
    },
    updated() {

    },
    mounted() {
        console.log(this.lng)
    }
}

</script>

<style>

</style>
