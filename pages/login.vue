<template>
    <section>
        <h3>login page</h3>
        <form @submit.prevent="onSubmit()">
            <div class="form_div">
                <input type="text" name="" id="">
            </div>
            <button class="button--green" type="submit">log in</button>
            <p>
                <nuxt-link to="/">home page</nuxt-link>
            </p>
        </form>
    </section>
</template>

<script>
export default {
    name: 'login',
    layout: 'empty', // recieve there layout which will render as like default (whith out navbar in our case)
    methods:{
        onSubmit: function(){
            this.$store.dispatch('logIn') //without modules as like users.js, bcs index.js is root file for folder
            this.$router.push('/')
        }
    },
}
</script>

<style scoped>

</style>