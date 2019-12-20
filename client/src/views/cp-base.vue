<template>
  <v-content>
    <h1>Coffee Power</h1>
    <h3>Find Coffee</h3>
    <v-form>
      <v-text-field
        v-model="zipcode"
        placeholder="zipcode"
      ></v-text-field>
      <v-btn
        @click='retrieveShopsByZipcode'
        outlined
        color="blue"
      >Search</v-btn>
      <v-btn
        @click='retrieveShopsByLocation'
        outlined
        color="blue"
      >Get Shops By Location</v-btn>
    </v-form>
    <div
      v-for='shop in shops'
      :key='shop._id'
    >
      <ShopCard :shop="shop" />
    </div>
  </v-content>
</template>

<script>
import ShopCard from '../components/shop-card'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CPBase',
  components: {
    ShopCard
  },
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
