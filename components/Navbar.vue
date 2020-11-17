<template>
    <nav>
        <nuxt-link class="link" to="#" title="nuxt ssr" >nuxt SSR</nuxt-link>
        <nuxt-link exact no-prefetch class="link" to="/" title="home" >home</nuxt-link>
        <nuxt-link no-prefetch class="link" to="/about" title="about" >about</nuxt-link>
        <nuxt-link no-prefetch class="link" to="/users" title="users" >users</nuxt-link>
        <nuxt-link no-prefetch class="link" to="/viewpict" title="photos" >photos</nuxt-link>
        <nuxt-link v-if="!hasToken" no-prefetch class="link" to="/login" title="users" >log in</nuxt-link>
        <nuxt-link v-else @click.prevent="logOut()" no-prefetch class="link" to="#" title="users" >log out</nuxt-link>
    </nav>    
</template>

<script>
export default {
    name: 'Navbar.vue',
    computed:{
        hasToken: function(){
            return this.$store.getters.hasToken
        }
    },
    methods:{
        logOut: function(){
            this.$store.dispatch('logOut')
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
    nav{
        width: 80%;
        height: 30px;
        margin-left: 100px;
        margin-top: 50px;
    }
    .link{
        margin-left: 30px;
        color: red;
        text-decoration: none;
    }
    .link:active, .link:hover{
        color: springgreen;
    }
</style>