const { options } = require('./options/mariaDB.js')
const knex = require('knex')(options)

knex.schema.createTable('products', table => {
    table.increments('id');
    table.string('title');
    table.string('thumn');
    table.integer('price');
  }).then(()=>{
      console.log('tabla products creada');
  }).catch((err)=>{
      console.log(err)
      throw err
  }).finally(()=>{
      console.log('end')
  })