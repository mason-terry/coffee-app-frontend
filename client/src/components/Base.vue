<template>
  <div>
    <h1>Search By Zipcode</h1>
    <input
      v-model='zipcode'
      placeholder='Zipcode'
    />
    <button @click='retrieveShopsByZipcode'>Search</button>
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Base',
  data: () => ({
    zipcode: ''
  }),
  computed: {
    ...mapState('shops', ['shops'])
  },
  methods: {
    ...mapActions('shops', ['fetchShopsByZipcode']),
    async retrieveShopsByZipcode() {
      await this.fetchShopsByZipcode(this.zipcode)
      this.zipcode = ''
    }
  }
}
</script>

<style scoped>
</style>
