<template>
    <section>
        <h3>{{pageTitle}}</h3>
        <ul>
            <li v-for="(user) in users" :key="user.id">
               <a href="#" @click.prevent="openUser(user)">user  {{user.name}}</a> 
                </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'indexUsers.vue',
    // special method for renfering in server datas, return promise/ we use async/await
    // we have no THIS in server renderingmethods -> give data from context

    //  async asyncData({$axios}){
    //      const users = await $axios.$get('http://jsonplaceholder.typicode.com/users')
    //      return {users} 
    //      //obj users is users from data(){}
    // }, 
    // coment asyncData(), bcs we use store(Vuex), fetch is method from NUXT for SSR
    async fetch({store}){
        if(store.getters['users/users'].length === 0){
            await store.dispatch('users/fetch') // NUXT use moduls from Vuex, than sent in dispatch action from users.js
        }
    },
    data(){
        return{
            //users:[],
            pageTitle: 'users page!!!!!'
        }
    },
    computed: {
        users(){
            return this.$store.getters['users/users']
        }
    },
    // coment mounted(), bcs use server method asyncData()
    // mounted: async function(){
    //     this.users = await this.$axios.$get('http://jsonplaceholder.typicode.com/users')
    // },
    methods:{
        openUser: function(user){
            this.$router.push('/users/' + user.id) //recieve here user.id from obj user(in _id.vue)
        }
    },
}
</script>

<style scoped>

</style>