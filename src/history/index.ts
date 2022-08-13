import express from 'express'

const router = express.Router()

router.get('/', function (req, res) {
  res.send('respond with a resource')
})

router.get('/concert', (req, res) => {
  return res.status(200).json({ status: true })
})

export default router
