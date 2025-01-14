import express from 'express'
import { PORT, NODE_ENV } from '#Utils/env.config.js'

const app = express()
// app.js
app.use('/assets', express.static(new URL('views/assets', import.meta.url).pathname))

if (NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`App.js is running on port ${PORT}, mode: ${NODE_ENV}`)
  })
}

export default app
