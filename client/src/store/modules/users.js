import UserService from '../../services/user-service'

export default {
  namespaced: true,
  state: {
    userToken: undefined,
    currentUser: {},
    errorMessage: undefined
  },
  mutations: {
    setUserToken(state, token) {
      state.userToken = token
    },
    setCurrentUser(state, user) {
      state.currentUser = user
    },
    setErrorMessage(state, message) {
      state.errorMessage = message
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserService.userLogin(payload)
      if (!response.data.success) {
          commit('setErrorMessage', response.data.message)
      } else {
        const user = response.data.user
        commit('setCurrentUser', user)
      }
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
