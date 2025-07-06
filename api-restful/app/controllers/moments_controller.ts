import {v4 as uuidv4} from 'uuid'
import type { HttpContext } from '@adonisjs/core/http'
import Moment from '#models/moment'
// import { Application } from '@adonisjs/core/app'
import app from '@adonisjs/core/services/app'

export default class MomentsController {
    private validationOptions = {
        types: ['image'],
        size: '2mb',
    }

    //inserção
    public async store({ request, response }: HttpContext) {
        const body = request.body()

        const image = request.file('image', this.validationOptions)

        if(image) {
            const imageName = `${uuidv4()}.${image.extname}`

            await image.move(app.tmpPath('uploads'), {
                name: imageName
            })

            body.image = imageName
        }

        const moment = await Moment.create(body)
        
        response.status(201)

        return {
            message: "Momento criado!",
            data: moment,
        }
    }

    //buscar todos
    public async index() {
        const moments = await Moment.query().preload('comments')

        return {
            data: moments,
        }
    }

    //buscar por id
    public async show({ params }: HttpContext) {
        const moment = await Moment.findOrFail(params.id)

        await moment.load('comments')

        return {
            data: moment,
        }
    }

    //remover
    public async destroy({ params }: HttpContext) {
        const moment = await Moment.findOrFail(params.id)

        await moment.delete()

        return {
            message: 'momento excluido!',
            data: moment,
        }
    }

    //atualizar
    public async update({ params, request }: HttpContext) {
        const body = request.body()

        const moment = await Moment.findOrFail(params.id)

        moment.title = body.title
        moment.description = body.description

        if(moment.image !== body.image || !moment.image) {
            const image = request.file('image', this.validationOptions)

            if(image) {
                const imageName = `${uuidv4()}.${image.extname}`

                await image.move(app.tmpPath('uploads'), {
                    name: imageName
                })

                moment.image = imageName
            }
        }

        await moment.save()

        return {
            message: 'momento atualizado!',
            data: moment,
        }
    }
}