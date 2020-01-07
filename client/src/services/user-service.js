import { Api } from './api-service'

export default {
  createUser(payload) {
    return Api.post('/users', payload)
  },
  userLogin(payload) {
    return Api.post('/users/login', payload)
  }
}