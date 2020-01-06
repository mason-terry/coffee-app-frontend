<template>
  <v-bottom-navigation
    color="#FFFFFF"
    app
    fixed
  >
    <v-btn @click="goToProfile">
      <v-icon
        color="#6060FF"
        class="icons"
      >fa fa-user</v-icon>
    </v-btn>
    <v-btn @click="goToSearch">
      <v-icon
        color="#6060FF"
        class="icons"
      >fa fa-search</v-icon>
    </v-btn>
    <v-btn @click="retrieveShopsByLocation">
      <v-icon
        color="#6060FF"
        class="icons"
      >fa fa-location-arrow</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'bot-nav',
  methods: {
    ...mapActions('shops', ['fetchShopsByLocation', 'setLoadingValue', 'resetShopsValue']),
    goToProfile() {
      this.$router.push('/profile')
    },
    goToSearch() {
      this.$router.push('/search')
    },
    async retrieveShopsByLocation() {
      this.resetShopsValue()
      this.setLoadingValue(true)
      if (this.$router.history.current.name !== 'Main') this.$router.push('/')
      if (navigator.geolocation) {
        await navigator.geolocation.getCurrentPosition(this.getLatLng)
      } else {
        this.setLoadingValue(false)
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

<style lang="css" scoped>
.icons {
  padding: 0 40px;
}
</style>