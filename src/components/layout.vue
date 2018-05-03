<template>
    <el-container>
        <el-header class="layout_header">
            <Nav />
        </el-header>
        <el-main class="layout_main">
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
import Nav from './nav'

export default {
    name: 'Layout',
    components: {
        Nav
    }
}
</script>

<style>

</style>
