export const state = ()=>({
    users: []
})
    

export const mutations = {
    setUsers: function(state, users){
        state.users = users
    }
}

export const actions = {
    async fetch({commit}){
        const users = await this.$axios.$get('http://jsonplaceholder.typicode.com/users')
        commit('setUsers', users)
    }
}

export const getters = {
    users: s => s.users //s is state
}