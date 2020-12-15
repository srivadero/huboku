import Factory from '@ioc:Adonis/Lucid/Factory'
import { DateTime } from 'luxon'

import Thing from 'App/Models/Thing'

export const ThingFactory = Factory
  .define(Thing, ({ faker }) => {
    return {
      logico: faker.random.boolean(),
      fecha: DateTime.fromJSDate(faker.date.recent(300)),
      fraccionario: faker.random.float(),
      entero: faker.random.number(),
      cadena: faker.random.words(8),
      texto: faker.lorem.paragraph(5),
    }
  })
  .build()
