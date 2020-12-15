import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ThingValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    cadena: schema.string({ trim: true}, []),

    texto: schema.string.optional({ trim: true}, []),
    entero: schema.number.optional(),
    fraccionario: schema.number.optional(),
    fecha: schema.date.optional({ format: 'd/L/yyyy' }),
    logico: schema.boolean.optional(),
  })

  public messages = {}
}
