<template>
  <v-content class="content">
    <!-- <h3>Find Coffee</h3>
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
    </v-form> -->
    <h1 v-if="!shops.length">Find coffee shops where you can recharge yourself and your laptop!</h1>
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
  name: 'cp-base',
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
      if (this.zipcode.length === 5) {
        try {
          await this.fetchShopsByZipcode(this.zipcode)
          this.zipcode = ''
        } catch (err) {
          throw err
        }
      } else {
        alert('Please enter a valid zipcode')
      }
    },
    async retrieveShopsByLocation() {
      if (navigator.geolocation) {
        await navigator.geolocation.getCurrentPosition(this.getLatLng)
      } else {
        alert(`Please turn on your location services.`)
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
h1 {
  font-family: 'Bungee';
  text-align: center;
  color: #6060ff;
}
.content {
  margin: 0 auto;
}
</style>
