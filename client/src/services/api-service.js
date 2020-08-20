import axios from 'axios'

export const Api = axios.create({
  // baseURL: 'http://localhost:3000/api'
  baseURL: 'http://91b5efe435f5.ngrok.io/api'
})