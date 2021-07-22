import express from 'express'
import auth from './auth/index.js'
import google from './auth/google.js'
import profile from './profile.js'

const router = express.Router()

router.get('/', (_, res) => {
  res.render('index')
})

auth(router)
google(router)
profile(router)

export default router
