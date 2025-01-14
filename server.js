import app from './Src/app.js'
import { PORT, NODE_ENV } from '#Utils/index.js'

// Actualizado porque YOLO
if (import.meta.url === `file://${process.argv[1]}` && NODE_ENV !== 'test') {
  app.listen(PORT || 3000, () => {
    console.log(`App.js is running on port ${PORT}, mode: ${NODE_ENV}`)
  })
}
