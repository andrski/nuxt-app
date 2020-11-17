<template>
    <section>
        
        <ul>
            <li v-for="(item, index) in photos" :key="index">
                <h3>{{item.title}}</h3>
                <img :src="item.url" alt="photo">
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name:'Viewpict.vue',
    data(){
        return{
            title: 'photos',
            photos: [],
            limit: 5,
        }
    },
    mounted: async function(){
        await this.$axios.$get('http://jsonplaceholder.typicode.com/photos?_limit=' + this.limit)
        //console.log(response[0])
        .then((response)=>{
            this.photos = response
            //console.log(this.photos)
        })
    },
    methods: {

    },
}
</script>

<style scoped>
    img{
        width: 200px;
        height: 200px;
    }
</style>