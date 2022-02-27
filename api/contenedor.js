 
const { options } = require('../options/mariaDB.js')
const knex = require('knex')(options)
 
 
/*CLASES*/

class product{
    constructor(title,price,thumb) {
        this.id = 0;
        this.title = title; 
        this.price = price;  
        this.thumb = thumb;          
    }
}

module.exports =  class contenedor{
    
    //save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    save(title,price,thumb){  
        let producto = new product(title,price,thumb)

        knex('products').insert(producto)
            .then(()=> console.log('datos insertados'))
            .catch((err)=>{ console.log(err);  throw err})
            .finally(()=>{
               //knex.destroy()
          })            
  
        let data = 'ok'
        
        return data  
    }
     

    //getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
    async  getAll() {
        return await knex.from('products').select('*')
    }

    
  
}
/*FIN CLASES*/
 