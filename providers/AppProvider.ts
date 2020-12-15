import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { DateTime } from 'luxon'

export default class AppProvider {
	public static needsApplication = true

  constructor (protected app: ApplicationContract) {
  }

  public register () {
    // Register your own bindings
  }

  public async boot () {
    // IoC container is ready
    const View = (await import('@ioc:Adonis/Core/View')).default
    View.global('date', (valor: DateTime) => {
      return (valor == null) ? '' : valor.toFormat('dd/LL/yyyy')
    })

    View.global('datetime', (valor: DateTime) => {
      return (valor == null) ? '' : valor.toFormat('dd/LL/yyyy HH:mm')
    })

    View.global('now', () => {
      const valor = DateTime.local()
      return valor.toFormat('dd/LL/yyyy HH:mm')
    })

    View.global('range', (start: number, size: number) => {
      return [...Array(size).keys()].map(i => i + start)
    })

    if(View.GLOBALS['csrfField'] == undefined)
    {
      View.global('csrfField', () => {
        return '##__CSRF_FIELD__##'
      })
    }
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
