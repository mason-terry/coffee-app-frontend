import { Api } from './api-service'

export default {
  fetchShopsByZipcode(zipcode) {
    return Api.get(`/shops/zipcode/${zipcode}`)
  },
  fetchShopsByCurrentLocation(lat, long) {
    return Api.get(`/shops/location/${lat}/${long}`)
  }
}