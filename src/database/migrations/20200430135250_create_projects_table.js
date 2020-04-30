
exports.up = knex =>  knex.schema.createTable('projects', table => {
  table.increments('id')
  table.text('title')
  
  // relation ship
  // 1 users have n projects
  table.integer('user_id')
    .references('users.id')
    .notNullable()
    .onDelete('CASCADE') //quando usuário for deletado, automaticamente todos os projetos dos usuários são deletados

  table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('projects')
