// file fo router guard
export const state = ()=>({
    token: null
})
    

export const mutations = {
    setToken: function(state, token){
        state.token = token
    },
    clearToken: function(state){
        state.token = null
    }
}

export const actions = {
    nuxtServerInit: function({dispatch}){
        console.log('nuxtServerInit')
    },
    logIn: function({commit}){
        commit('setToken', 'trueToken')
    },
    logOut: function({commit}){
        commit('clearToken')
    },
}

export const getters = {
    hasToken: s => !!s.token //s is state
}