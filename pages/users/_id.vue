<template>
    <section>
        <h3>
            <!-- we recieve it from $route -->
           <!-- user {{$route.params.id}} -->
           {{user.name}}
        </h3>
        <h3>{{user.email}}</h3>
    </section>
</template>

<script>
export default {
    name: 'userID',
    // params => parametrs from not vue, recieve they from context, {context} -> ES6 
    validate: function({params}){
        console.log('validation complited')
        return /^\d+$/.test(params.id)
    },
    asyncData: async function({$axios, params}){
        const user = await $axios.$get('http://jsonplaceholder.typicode.com/users/' + params.id)
        console.log(user)
        return {user}
    },
}
</script>

<style scoped>

</style>