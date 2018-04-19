import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        navActive: ''
    },
    mutations: {
        changNavActive(state, payload){
            state.navActive = payload.navActive
        }
    },
    actions: {
        
    }
})

export default store
