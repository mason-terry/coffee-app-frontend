import ShopService from '../../services/shop-service'

export default {
  namespaced: true,
  state: {
    shops: [],
    loading: false,
    errorMessage: undefined
  },
  mutations: {
    setShops(state, shops) {
      state.shops = shops
    },
    setLoadingValue(state, val) {
      state.loading = val
    },
    setErrorMessage(state, message) {
      state.errorMessage = message
    }
  },
  actions: {
    async fetchShopsByZipcode({ commit, dispatch }, zipcode) {
      const response = await ShopService.fetchShopsByZipcode(zipcode)
      const shops = response.data.shops
      commit('setShops', shops)
      dispatch('setLoadingValue', false)
    },
    async fetchShopsByLocation({ commit, dispatch }, payload) {
      const { lat, lng } = payload
      const response = await ShopService.fetchShopsByCurrentLocation(lat, lng)
      const shops = response.data.shops
      commit('setShops', shops)
      dispatch('setLoadingValue', false)
    },
    setLoadingValue({ commit }, val) {
      commit('setLoadingValue', val)
    },
    resetShopsValue({ commit }) {
      commit('setShops', [])
    },
    setErrorMessage({ commit }, message) {
      commit('setErrorMessage', message)
    }
  }
}
