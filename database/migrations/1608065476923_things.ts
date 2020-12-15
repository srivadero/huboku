import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Things extends BaseSchema {
  protected tableName = 'things'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('logico').defaultTo(false)
      table.dateTime('fecha')
      table.decimal('fraccionario')
      table.integer('entero')
      table.string('cadena')
      table.text('texto')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
