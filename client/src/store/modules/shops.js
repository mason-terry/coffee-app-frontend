import ShopService from '../../services/shop-service'

export default {
  namespaced: true,
  state: {
    shops: [],
    shopDetails: undefined,
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
    },
    setShopDetails(state, shopDetails) {
      state.shopDetails = shopDetails
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
    async fetchShopDetails({ commit }, shopId) {
      const response = await ShopService.fetchShopDetails(shopId)
      const { shopDetails }= response.data
      commit('setShopDetails', shopDetails)
    },
    setLoadingValue({ commit }, val) {
      commit('setLoadingValue', val)
    },
    resetShopsValue({ commit }) {
      commit('setShops', [])
      commit('setShopDetails', undefined)
    },
    setErrorMessage({ commit }, message) {
      commit('setErrorMessage', message)
    }
  }
}
