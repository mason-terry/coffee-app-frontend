import { Api } from './api-service'

export default {
  fetchShopsByZipcode(zipcode) {
    return Api.get(`/shops/zipcode/${zipcode}`)
  },
  fetchShopsByCurrentLocation(lat, lng) {
    return Api.get(`/shops/location/${lat}/${lng}`)
  }
}