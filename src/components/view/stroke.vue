<template>
    <section class="section_main">
        <div class="container">

        </div>
    </section>
</template>

<script>
import AMap from 'AMap'
export default {
    data() {
        return {
            
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
        new AMap.Map('container', {
            features: ['bg', 'road', 'building'],
            zoom: 16,
            center: [116.39, 39.9] 
        })
    }
}

</script>

<style>

</style>
