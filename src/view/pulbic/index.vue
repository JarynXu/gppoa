<template>
    <div class="layout">
        <nav-com></nav-com>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavCom from "./nav.vue";

    export default {
        components: {NavCom},
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .layout {
        height: 100%;
    }
</style>
