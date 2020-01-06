<template>
  <v-content class="content">
    <div v-if="!newUser">
      <h1>Login</h1>
      <v-form>
        <v-text-field v-model="email" placeholder="Email@example.com"></v-text-field>
        <v-text-field v-model="password" placeholder="Password"></v-text-field>
        <v-btn color="#6060ff" outlined>Login</v-btn>
      </v-form>
    </div>
    <div v-if="newUser">
      <h1>New User</h1>
      <v-form>
        <v-text-field v-model="name" placeholder="Full Name"></v-text-field>
        <v-text-field v-model="username" placeholder="Username"></v-text-field>
        <v-text-field v-model="email" placeholder="Email@example.com"></v-text-field>
        <v-text-field v-model="password" placeholder="Password"></v-text-field>
        <v-btn color="#6060ff" outlined>Submit</v-btn>
      </v-form>
    </div>
  </v-content>
</template>

<script>
export default {
  name: 'cp-login',
  data: () => ({
    email: '',
    password: '',
    name: '',
    username: '',
    newUser: true
  })
}
</script>

<style lang="scss" scoped>
.content {
  width: 400px;
  margin: 0 auto;
  color: #6060ff;
}
h1 {
  font-family: 'Bungee';
}
</style>