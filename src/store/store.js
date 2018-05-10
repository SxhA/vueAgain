import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        footerActive: ''
    },
    mutations: {
        changFooterActive(state, payload){
            state.footerActive = payload.changFooterActive
        }
    },
    actions: {
        
    }
})

export default store
