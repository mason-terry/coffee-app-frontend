<template>
  <v-app-bar
    color="#6060FF"
    app
    height="70"
  >
    <v-toolbar-title class="header">Coffee
      <v-icon color="yellow">fa fa-bolt</v-icon> Power
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'top-nav'
}
</script>

<style lang="css" scoped>
.header {
  font-family: 'Bungee Shade';
  font-size: 2.2rem;
  color: #ffffff;
  margin: 0 auto;
}
</style>