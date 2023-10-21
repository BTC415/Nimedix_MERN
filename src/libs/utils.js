import client from 'axios'
import { BASE_URL, PATTERNS } from './constants'

export const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250)
  })

export const axios = client.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
})

export const emailValidation = (data) => {
  return PATTERNS.email.test(data)
}
