import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UserCreateValidator {
  constructor(private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    nombre: schema.string({ trim: true }, [
      // rules.alpha(),
      rules.minLength(2),
      rules.maxLength(40),
    ]),
    apellido: schema.string({ trim: true }, [
      // rules.alpha(),
      rules.minLength(2),
      rules.maxLength(40),
    ]),
    email: schema.string({ trim: true }, [
      rules.maxLength(100),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({ trim: true }, [
      rules.minLength(5),
      rules.maxLength(20),
      rules.confirmed(),
    ]),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'nombre.required': 'No puede estar vacio',
    'nombre.minLength': 'Minimo 2 caracteres',
    'nombre.maxLength': 'Maximo 40 caracteres',
    'nombre.alpha': 'Solo se permiten letras',
    'apellido.required': 'No puede estar vacio',
    'apellido.minLength': 'Minimo 2 caracteres',
    'apellido.maxLength': 'Maximo 40 caracteres',
    'apellido.alpha': 'Solo se permiten letras',
    'email.required': 'No puede estar vacio',
    'email.maxLength': 'Maximo 100 caracteres',
    'email.email': 'No es un mail valido',
    'email.unique': 'El correo ya esta en uso',
    'password.required': 'No puede estar vacio',
    'password.minLength': 'Maximo 8 caracteres',
    'password.maxLength': 'Maximo 20 caracteres',
    'password.confirmed': 'La contraseña no coincide',
  }
}
