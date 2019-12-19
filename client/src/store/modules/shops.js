import ShopService from '../../services/shop-service'

export default {
  namespaced: true,
  state: {
    shops: []
  },
  mutations: {
    setShops(state, shops) {
      state.shops = shops
    }
  },
  actions: {
    async fetchShopsByZipcode({ commit }, zipcode) {
      const response = await ShopService.fetchShopsByZipcode(zipcode)
      const shops = response.data.shops
      commit('setShops', shops)
    },
    async fetchShopsByLocation({ commit }, payload) {
      const { lat, lng } = payload
      const response = await ShopService.fetchShopsByCurrentLocation(lat, lng)
      const shops = response.data.shops
      commit('setShops', shops)
    }
  }
}