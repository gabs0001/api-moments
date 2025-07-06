//ao inves de usar public foi utilizado declare

import { DateTime } from 'luxon'
import { BaseModel, column, hasMany} from '@adonisjs/lucid/orm'
import Comment from './comment.js'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Moment extends BaseModel {
  @hasMany(() => Comment)
  declare comments: relations.HasMany<typeof Comment>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare image: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}