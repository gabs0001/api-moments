/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import app from '@adonisjs/core/services/app'
import { HttpContext } from '@adonisjs/core/http'

router.get('/uploads/:filename', async ({ params, response } : HttpContext) => {
  const filePath = app.tmpPath('uploads', params.filename)
  return response.download(filePath)
})

router.group(()=> {
  router.get('/', async () => {
    return {
      hello: 'world',
    }
  })

  router.resource('/moments', '#controllers/moments_controller').apiOnly()

  router.post('/moments/:momentId/comments','#controllers/comments_controller.store')

}).prefix('/api') 