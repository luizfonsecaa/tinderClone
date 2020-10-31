import Vue from 'vue'

const state = {
    id: '',
    admin: '',
    age: '',
    username: '',
    photo_user: 'TESTE'
}

const actions = {
    SET_USER_INFO(context, [id, admin, age, username, photo_user]) {
        context.commit('SAVE_USER_INFO', [id, admin, age, username, photo_user])
    },

    SET_PHOTO_USER (context, [photo_user]) {
        context.commit('SAVE_PHOTO_USER', [photo_user])
    }
}

const mutations = {
    SAVE_USER_INFO: (state, [id, admin, age, username, photo_user]) => {
      Vue.set(state, 'id', id)
      Vue.set(state, 'admin', admin)
      Vue.set(state, 'age', age)
      Vue.set(state, 'username', username)
      Vue.set(state, 'photo_user', photo_user)
    },

    SAVE_PHOTO_USER: (state, [photo_user]) => {
        Vue.set(state, 'photo_user', photo_user)
      }
}

const getters = {
    id: state => {
        return state.id
    },

    admin: state => {
        return state.admin
    },

    age: state => {
        return state.age
    },

    username: state => {
        return state.username
    },

    photo_user: state => {
        return state.photo_user
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
