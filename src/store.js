import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      isSignin: false
    }
  },
  mutations: {
    saveUserInfo(state, info) {
      state.userInfo.phone = info.phone
      state.userInfo.isSignin = true
    }
  },
  actions: {
    verifyUser({ commit }, info) {
      commit('saveUserInfo', info)
    }
  }
})
