<template>
  <v-container fluid>
    <v-app>
      <top-nav></top-nav>
      <router-view></router-view>
      <bot-nav></bot-nav>
    </v-app>
  </v-container>
</template>

<script>
import topNav from './components/top-nav'
import botNav from './components/bot-nav'
export default {
  name: 'App',
  components: {
    topNav,
    botNav
  }
}
</script>

<style lang="scss" scoped>
</style>