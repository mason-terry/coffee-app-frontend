<template>
  <v-content class="content">
    <h1>Profile</h1>
    <div class="avatar">
      <v-avatar
        color="#6060ff"
        height="100"
        width="100"
      >
        <v-icon color=#ffffff>fa fa-user</v-icon>
      </v-avatar>
    </div>
    <p>Name: {{ currentUser.name }}</p>
    <p>Username: {{ currentUser.username }}</p>
    <p>Email: {{ currentUser.email }}</p>
    <p>Favorites: {{ currentUser.favorites }}</p>
    <v-btn
      v-if="!user"
      @click="goToLogin"
      color="#6060ff"
      outlined
    >Login</v-btn>
  </v-content>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'cp-profile',
  data: () => ({
    user: false
  }),
  computed: {
    ...mapState('users', ['currentUser'])
  },
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 400px;
  color: #6060ff;
  margin: 0 auto;
}
.avatar {
  text-align: center;
  margin: 10px;
}
h1 {
  font-family: 'Bungee';
}
</style>