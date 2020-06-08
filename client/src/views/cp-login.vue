<template>
  <v-content class="content">
    <div v-if="!newUser">
      <h1>Login</h1>
      <v-form>
        <v-text-field
          v-model="username"
          placeholder="Username"
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          placeholder="Password"
        ></v-text-field>
        <p style="color: #ff0000">{{ errorMessage }}</p>
        <v-btn
          color="#6060ff"
          outlined
          @click="submitLogin"
        >Login</v-btn>
        <v-btn
          style="margin: 0 10px;"
          @click="swapUser"
          color="#6060ff"
          outlined
        >{{ buttonName }}</v-btn>
      </v-form>
    </div>
    <div v-if="newUser">
      <h1>New User</h1>
      <v-form>
        <v-text-field
          v-model="name"
          placeholder="Full Name"
        ></v-text-field>
        <v-text-field
          v-model="username"
          placeholder="Username"
        ></v-text-field>
        <v-text-field
          v-model="email"
          placeholder="Email@example.com"
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          placeholder="Password"
        ></v-text-field>
        <v-btn
          color="#6060ff"
          outlined
          @click="addUser"
        >Submit</v-btn>
        <v-btn
          style="margin: 0 10px;"
          @click="swapUser"
          color="#6060ff"
          outlined
        >{{ buttonName }}</v-btn>
      </v-form>
    </div>
  </v-content>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'cp-login',
  data: () => ({
    email: '',
    password: '',
    name: '',
    username: '',
    newUser: false,
    buttonName: 'New User'
  }),
  computed: {
    ...mapState('users', ['errorMessage'])
  },
  methods: {
    ...mapActions('users', ['login', 'createUser']),
    swapUser() {
      if (this.newUser) {
        this.newUser = false
        this.buttonName = 'New User'
      } else {
        this.newUser = true
        this.buttonName = 'Returning User'
      }
    },
    async submitLogin() {
      const payload = { username: this.username, password: this.password }
      await this.login(payload)
      if (!this.errorMessage) {
        this.$router.push('/profile')
      }
    },
    async addUser() {
      const payload = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password
      }
      await this.createUser(payload)
      this.$router.push('/profile')
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 400px;
  margin: 0 auto;
  color: #6060ff;
}
h1 {
  padding: 0;
}
</style>
