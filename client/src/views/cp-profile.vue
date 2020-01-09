<template>
  <v-content class="content">
    <div v-if="currentUser.name">
      <div class="avatar">
        <v-avatar
          color="#6060ff"
          height="100"
          width="100"
        >
          <v-icon color=#ffffff>fa fa-user</v-icon>
        </v-avatar>
      </div>
      <p><strong>Name:</strong> {{ currentUser.name }}</p>
      <p><strong>Username:</strong> {{ currentUser.username }}</p>
      <p><strong>Email:</strong> {{ currentUser.email }}</p>
      <p><strong>Favorites:</strong> {{ currentUser.favorites }}</p>
    </div>
    <div v-if="!currentUser.name">
      <h1>Please login</h1>
      <v-btn
        @click="goToLogin"
        color="#6060ff"
        outlined
      >Login</v-btn>
    </div>
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
</style>