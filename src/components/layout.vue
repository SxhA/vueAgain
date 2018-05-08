<template>
    <div class="layout">
        <router-view></router-view>
        <Nav />
        <Footer />
    </div>
</template>

<script>
import Nav from './nav'
import Footer from './footer'

export default {
    name: 'Layout',
    components: {
        Nav,
        Footer
    }
}
</script>

<style>

</style>
