import UserService from '../../services/user-service'

export default {
  namespaced: true,
  state: {
    userToken: undefined,
    currentUser: {}
  },
  mutations: {
    setUserToken(state, token) {
      state.userToken = token
    },
    setCurrentUser(state, user) {
      state.currentUser = user
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserService.userLogin(payload)
      const user = response.data.user
      console.log('user', user)
      commit('setCurrentUser', user)
    },
    async createUser({ commit }, payload) {
      const response = await UserService.createUser(payload)
      const user = response.data.newUser
      commit('setCurrentUser', user)
    },
    logout({ commit }) {
      commit('setCurrentUser', {})
    }
  }
}