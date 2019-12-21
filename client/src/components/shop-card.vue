<template>
  <v-card
    style="margin: 10px 0 0 0;"
    max-width="400"
    class="card"
  >
    <v-img :src="shop.image_url">
    </v-img>
    <v-card-title>{{ shop.name }}</v-card-title>
    <v-card-subtitle>
      <v-rating v-model="rating" color="yellow" background-color="yellow lighten-3" small half-increments dense>{{ yelpRating }}</v-rating>
    </v-card-subtitle>
    <v-card-text>{{ address }}</v-card-text>
    <v-card-text>{{ shop.display_phone }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'shop-card',
  props: ['shop'],
  data: () => ({
    rating: 0
  }),
  computed: {
    address() {
      return `${this.shop.location.display_address[0] || ''} ${this.shop.location.display_address[1] || ''} ${
        this.shop.location.display_address[2] || ''
      }`
    },
    yelpRating() {
      return this.formatRating()
    }
  },
  methods: {
   formatRating() {
     this.rating = this.shop.rating
   } 
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: gold;
}
</style>