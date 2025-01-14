import Router from 'express'
import { NODE_ENV } from '#Utils/index.js'
import httpStatus from 'http-status'

const router = Router()

router.get('/health', (req, res) => {
  res.status(httpStatus.OK).json({
    success: true,
    status: 'UP',
    environment: NODE_ENV || 'Not defined'
  })
})

router.get('/', (req, res) => {
  res.send('Hello World')
})
export default router
