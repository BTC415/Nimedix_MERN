import { axios } from './utils'

export const addEmailToWaitList = (email) =>
  new Promise((resolve, reject) => {
    axios
      .post('/waitlist', { email })
      .then((result) => {
        resolve(result)
      })
      .catch((error) => {
        console.error(error)
        reject(error)
      })
  })
