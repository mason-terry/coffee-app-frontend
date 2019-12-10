import { Api } from './api-service'

export default {
  fetchUsers() {
    return Api.get('/users')
  },
  userLogin(payload) {
    return Api.post('/users/login', payload)
  }
}