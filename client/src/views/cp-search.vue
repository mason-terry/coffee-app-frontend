<template>
  <v-content class="content">
    <h1>Search By Zipcode</h1>
    <v-form>
      <v-text-field
        v-model="zipcode"
        placeholder="zipcode"
        solo
      ></v-text-field>
      <v-btn
        @click='retrieveShopsByZipcode'
        color="#6060ff"
        outlined
      >
        Search
      </v-btn>
    </v-form>
  </v-content>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'cp-search',
  data: () => ({
    zipcode: ''
  }),
  methods: {
    ...mapActions('shops', ['fetchShopsByZipcode', 'setLoadingValue', 'resetShopsValue']),
    async retrieveShopsByZipcode() {
      if (this.zipcode.length === 5) {
        try {
          this.resetShopsValue()
          this.setLoadingValue(true)
          this.$router.push('/')
          await this.fetchShopsByZipcode(this.zipcode)
          this.zipcode = ''
        } catch (err) {
          this.setLoadingValue(false)
          throw err
        }
      } else {
        alert('Please enter a valid zipcode')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 400px;
  margin: 0 auto;
}
h1 {
  font-family: 'Bungee';
  text-align: center;
  color: #6060ff;
  padding-top: 180px;
}
</style>