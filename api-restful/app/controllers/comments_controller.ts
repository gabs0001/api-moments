import type { HttpContext } from '@adonisjs/core/http'
import Comment from '#models/comment'
import Moment from '#models/moment'

export default class CommentsController {
    //inserção
    public async store({ params, request, response }: HttpContext) {
        const body = request.body()
        const momentId = params.momentId

        await Moment.findOrFail(momentId)

        body.momentId = momentId

        const comment = await Comment.create(body)

        response.status(201)

        return {
            message: 'comentário adicionado!',
            data: comment,
        }
    }
}