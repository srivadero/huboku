import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ThingFactory } from 'Database/factories'
import Thing from 'App/Models/Thing'

export default class SeederSeeder extends BaseSeeder {
  public async run () {
    await Thing.truncate()
    await ThingFactory.createMany(5)

  }
}
