import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Thing extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public logico: boolean = false

  @column.dateTime()
  public fecha: DateTime

  @column()
  public fraccionario: number

  @column()
  public entero: number

  @column()
  public cadena: string

  @column()
  public texto: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
