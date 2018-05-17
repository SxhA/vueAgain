<template>
    <section class="section_main amap-page-container">
        <div class="amap_wrapper">
            <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center"></el-amap>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        let self = this
        return {
            center: [121.59996, 31.197646],
            lat: 0,
            lng: 0,
            loaded: false,
            plugin: [{
                pName: 'Geolocation',
                events: {
                    init(o) {
                        // o 是高德地图定位插件实例
                        o.getCurrentPosition((status, result) => {
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

    }
}

</script>

<style>

</style>
