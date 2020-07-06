<template>
  <v-card
    style="margin: 0 0 20px 0;"
    max-width="400"
    class="card"
    @click="shopView(shop.id)"
  >
    <v-img
      :src="shop.image_url"
      max-height="200"
    >
      <div class="card-text">
        <v-card-title>{{ shop.name }}</v-card-title>
        <v-card-subtitle>
          <v-rating
            v-model="rating"
            color="yellow"
            background-color="yellow lighten-3"
            small
            half-increments
            dense
          >{{ yelpRating }}</v-rating>
        </v-card-subtitle>
        <v-card-text>{{ address }}</v-card-text>
      </div>
      <v-card-text>{{ shop.display_phone }}</v-card-text>
    </v-img>
    <div
      v-if="shopDetails && shop.id === shopDetails.yelpDetails.id"
      style="background-color: #6060FF"
    >
      <v-card-text><strong>Open:</strong> {{ shopDetails.yelpDetails.is_closed ? 'No' : 'Yes' }}</v-card-text>
      <v-card-text><strong>Outlets:</strong> {{ shopDetails.dbDetails.outlets }}</v-card-text>
      <v-btn
        outlined
        color="#ffffff"
        style="margin: 10px 135px;"
        @click="rate"
      >Rate</v-btn>
    </div>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'shop-card',
  props: ['shop'],
  data: () => ({
    rating: 0
  }),
  computed: {
    ...mapState('shops', ['shopDetails']),
    address() {
      return `${this.shop.location.display_address[0] || ''} ${this.shop.location
        .display_address[1] || ''} ${this.shop.location.display_address[2] || ''}`
    },
    yelpRating() {
      return this.formatRating()
    }
  },
  methods: {
    ...mapActions('shops', ['fetchShopDetails']),
    formatRating() {
      this.rating = this.shop.rating
    },
    async shopView(shopId) {
      const yelpId = this.shopDetails && this.shopDetails.yelpDetails.id
      if (shopId !== yelpId) {
        await this.fetchShopDetails(shopId)
      }
    },
    rate() {
      alert('rating')
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  color: #ffffff;
}
.card-text {
  background-image: linear-gradient(rgba(96, 96, 255, 1), rgba(96, 96, 255, 0));
}
</style>