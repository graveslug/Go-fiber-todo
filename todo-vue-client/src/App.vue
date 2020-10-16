<template>
    <div>
        <section>
            <the-header></the-header>
            <!-- this is how we navigate with the routers! -->
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
import TheHeader from './components/layout/Header.vue'
export default {
    components: {
        TheHeader
    }
}
</script>

<style>

</style>
