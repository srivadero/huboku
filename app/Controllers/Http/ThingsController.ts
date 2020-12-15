import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { default as Model } from 'App/Models/Thing'
import ModelValidator from 'App/Validators/ThingValidator'

export default class ThingsController {
  public async index({ view }: HttpContextContract) {
    const model = await Model.all() //.query().orderBy('name', 'asc')
    return view.render('thing/index', { model: model })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('thing/create')
  }

  public async store({ request, response, session }: HttpContextContract) {
    const data = await request.validate(ModelValidator)
    const model = new Model
    model.merge(data)
    await model.save()
    session.flash({ success: 'Guardado correctamente' })
    return response.redirect().toRoute('thing.index')
  }

  public async show({ response }: HttpContextContract) {
    console.log('No implementado')
    return response.redirect().toRoute('thing.index')
  }

  public async edit({ params, response, session, view }: HttpContextContract) {
    const model = await Model.find(params.id)
    if (!model) {
      session.flash({ error: 'No encontrado' })
      return response.redirect().toRoute('thing.index')
    }
    return view.render('thing/edit', { model: model })
  }

  public async update({ params, request, response, session }: HttpContextContract) {
    const data = await request.validate(ModelValidator)
    if(!data.logico) data.logico = false
    const model = await Model.find(params.id)
    // console.log('OJO: No cambia los campos opcionales de llenos a vacio al actualizar')
    // model?.merge(data)
    model?.fill(data)
    if(model) model.id = params.id
    await model?.save()
    session.flash(model ? { success: 'Actualizado correctamente' } : { error: 'No encontrado' })
    return response.redirect().toRoute('thing.index')
  }

  public async destroy({ response }: HttpContextContract) {
    console.log('No implementado')
    return response.redirect().toRoute('thing.index')
  }
}
