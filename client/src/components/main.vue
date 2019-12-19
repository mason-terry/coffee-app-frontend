<template>
  <v-content>
    <h1>Search By Zipcode</h1>
    <input
      v-model='zipcode'
      placeholder='Zipcode'
    />
    <button @click='retrieveShopsByZipcode'>Search</button>
    <button @click='retrieveShopsByLocation'>Get Shops By Location</button>
    <div
      v-for='shop in shops'
      :key='shop._id'
    >
      <h3>{{ shop.name }}</h3>
      <p>{{ shop.display_phone }}</p>
      <p><span>{{ shop.location.display_address[0] }}</span>&nbsp;<span>{{ shop.location.display_address[1] }}</span>&nbsp;<span>{{ shop.location.display_address[2] }}</span></p>
      <img
        :src='shop.image_url'
        style='max-width: 300px;'
      />
    </div>
  </v-content>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Main',
  data: () => ({
    zipcode: ''
  }),
  computed: {
    ...mapState('shops', ['shops'])
  },
  methods: {
    ...mapActions('shops', ['fetchShopsByZipcode', 'fetchShopsByLocation']),
    async retrieveShopsByZipcode() {
      await this.fetchShopsByZipcode(this.zipcode)
      this.zipcode = ''
    },
    async retrieveShopsByLocation() {
      if (navigator.geolocation) {
        await navigator.geolocation.getCurrentPosition(this.getLatLng)
      } else {
        alert(`Something didn't go correctly`)
      }
    },
    async getLatLng(pos) {
      const lng = pos.coords.longitude
      const lat = pos.coords.latitude
      const payload = { lat, lng }
      await this.fetchShopsByLocation(payload)
    }
  }
}
</script>

<style scoped lang='css'>
button {
  margin: 5px;
}
</style>
