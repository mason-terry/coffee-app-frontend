<template>
  <v-content class="content">
    <h1 v-if="!shops.length && !loading">Find <v-icon
        color="#6060ff"
        x-large
      >fa fa-coffee</v-icon> shops where you can recharge yourself and your <v-icon
        color="#6060ff"
        x-large
      >fa fa-laptop</v-icon>
    </h1>
    <div v-if="loading">
      <h1>Searching...</h1>
      <v-progress-linear
        v-if="loading"
        color="#6060ff"
        size="48"
        indeterminate
      ></v-progress-linear>
    </div>
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
import { mapState } from 'vuex'

export default {
  name: 'cp-base',
  components: {
    ShopCard
  },
  data: () => ({
    zipcode: ''
  }),
  computed: {
    ...mapState('shops', ['shops', 'loading'])
  }
}
</script>

<style scoped lang='css'>
.content {
  width: 400px;
  margin: 0 auto;
}
</style>
