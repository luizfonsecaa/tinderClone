import Vue from 'vue'
import Vuex from 'vuex'

import user from './module-example/user'

// const vuexLocal = new VuexPersistence({
//     storage: window.localStorage,
//     reducer: state => ({
//         common: state.common,
//     })
// })


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
    },
    // plugins: [vuexLocal.plugin]
})
