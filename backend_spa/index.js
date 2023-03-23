
const BASE_API_URL = "/api/v1";
const SANTIAGO = "/emergency-call-stats"

var Datastore = require('nedb');

var db = new Datastore();



module.exports = (app) => {

    var datosLlamadas = [{
        province: "Almería",
        month: "january",
        phone_call_activation_organization: 3520,
        telematic_activation_organization: 4826,
        emergency_call: 3786,
        year: 2019
    },
    {
        province: "Cádiz",
        month: "january",
        phone_call_activation_organization: 1016,
        telematic_activation_organization: 8605,
        emergency_call: 6009,
        year: 2019
    },
    {
        province: "Cordoba",
        month: "january",
        phone_call_activation_organization: 997,
        telematic_activation_organization: 5174,
        emergency_call: 3965,
        year: 2019
    },
    {
        province: "Granada",
        month: "january",
        phone_call_activation_organization: 4067,
        telematic_activation_organization: 9577,
        emergency_call: 6693,
        year: 2019
    },
    {
        province: "Huelva",
        month: "january",
        phone_call_activation_organization: 837,
        telematic_activation_organization: 3555,
        emergency_call: 2830,
        year: 2019
    },
    {
        province: "Jaén",
        month: "january",
        phone_call_activation_organization: 2191,
        telematic_activation_organization: 5469,
        emergency_call: 3578,
        year: 2019
    },
    {
        province: "Málaga",
        month: "january",
        phone_call_activation_organization: 1871,
        telematic_activation_organization: 13735,
        emergency_call: 9897,
        year: 2019
    },
    {
        province: "Sevilla",
        month: "january",
        phone_call_activation_organization: 3203,
        telematic_activation_organization: 24597,
        emergency_call: 14903,
        year: 2019
    },
    {
        province: "Almería",
        month: "february",
        phone_call_activation_organization: 3171,
        telematic_activation_organization: 4052,
        emergency_call: 3352,
        year: 2019
    },
    {
        province: "Cádiz",
        month: "february",
        phone_call_activation_organization: 848,
        telematic_activation_organization: 7763,
        emergency_call: 5506,
        year: 2019
    },
    {
        province: "Cordoba",
        month: "february",
        phone_call_activation_organization: 988,
        telematic_activation_organization: 4564,
        emergency_call: 3689,
        year: 2019
    },
    {
        province: "Granada",
        month: "february",
        phone_call_activation_organization: 4267,
        telematic_activation_organization: 8416,
        emergency_call: 5967,
        year: 2019
    },
    {
        province: "Huelva",
        month: "february",
        phone_call_activation_organization: 749,
        telematic_activation_organization: 3263,
        emergency_call: 2586,
        year: 2019
    },
    {
        province: "Jaén",
        month: "february",
        phone_call_activation_organization: 2070,
        telematic_activation_organization: 4902,
        emergency_call: 3208,
        year: 2019
    },
    {
        province: "Málaga",
        month: "february",
        phone_call_activation_organization: 1777,
        telematic_activation_organization: 12482,
        emergency_call: 9218,
        year: 2019
    },
    {
        province: "Sevilla",
        month: "february",
        phone_call_activation_organization: 3270,
        telematic_activation_organization: 22247,
        emergency_call: 13529,
        year: 2019
    },
    {
        province: "Almería",
        month: "march",
        phone_call_activation_organization: 3613,
        telematic_activation_organization: 4714,
        emergency_call: 3666,
        year: 2019
    },
    {
        province: "Cádiz",
        month: "march",
        phone_call_activation_organization: 937,
        telematic_activation_organization: 8952,
        emergency_call: 6201,
        year: 2019
    },
    {
        province: "Cordoba",
        month: "march",
        phone_call_activation_organization: 1184,
        telematic_activation_organization: 5121,
        emergency_call: 3859,
        year: 2019
    },
    {
        province: "Granada",
        month: "march",
        phone_call_activation_organization: 4622,
        telematic_activation_organization: 9437,
        emergency_call: 6499,
        year: 2019
    },
    {
        province: "Huelva",
        month: "march",
        phone_call_activation_organization: 840,
        telematic_activation_organization: 3769,
        emergency_call: 2887,
        year: 2019
    },
    {
        province: "Jaén",
        month: "march",
        phone_call_activation_organization: 2181,
        telematic_activation_organization: 5238,
        emergency_call: 3436,
        year: 2019
    },
    {
        province: "Málaga",
        month: "march",
        phone_call_activation_organization: 2274,
        telematic_activation_organization: 15129,
        emergency_call: 10487,
        year: 2019
    },
    {
        province: "Sevilla",
        month: "march",
        phone_call_activation_organization: 3642,
        telematic_activation_organization: 25339,
        emergency_call: 14691,
        year: 2019
    }

    ];

    //Redirect a la lista de Postman
    app.get(BASE_API_URL+SANTIAGO+"/docs", (request,response) => {
      response.redirect("https://documenter.getpostman.com/view/25995736/2s93K1oeqq");
  });

  function validateId(request, response, next) {
    const { _id } = request.body;
    if (_id) {
      return response.status(400).json({ error: 'El campo _id no está permitido.' });
    }
    next();
  }
    

    app.get(BASE_API_URL + SANTIAGO + "/loadInitialData", (request, response) => {
        db.count({}, (err, count) => {
            if (count === 0) {
                console.log('Base de datos vacia, insertando datos...');
                db.insert(datosLlamadas,(err,datos)=>{
                    console.log("Datos insertados");
                    response.status(200).json(datos.map((e=>{
                        delete e._id;
                        return e;
                    })));
                });  
            }else{
                db.find({},(err,datos)=>{
                    console.log(`Base de datos con ${count} elementos`);
                    response.status(200).json(datos.map((e=>{
                        delete e._id;
                        return e;
                    })));
                });
            }
        })

    });

   //Obtener un dato concreto
    app.get(BASE_API_URL + SANTIAGO + "/:province/:month", (request, response) => {
        console.log("New GET to emergency-call-stats");
        var mes = request.params.month;
        var provincia = request.params.province;
        db.findOne({province: provincia, month : mes }, (err, datos) => {
          if(err){
            console.log(err);
            response.sendStatus(500);
          } else if(!datos) {
            console.log("Datos no encontrado")
            response.sendStatus(404);
          } else {
            console.log(datos);
            delete datos._id;
            response.status(200).json(datos);
          }
        });
    });
      
      //Borrar todos los recursos
      app.delete(BASE_API_URL + SANTIAGO, (request, response) => {
        console.log("New DELETE to emergency-call-stats");
      //seleccionamos todos los recursos de la base de datos con multi:true
        db.remove({}, { multi: true }, (err, numDelete) => {
          if (err) {
            console.log(err);
            response.sendStatus(500);
          } else {
            console.log(`Se han eliminado ${numDelete} elementos `);
            response.sendStatus(200);
          }
        });
      });

      //Borrar datos por provincias
      app.delete(BASE_API_URL + SANTIAGO +"/:province", (request, response) => {
        var provincia = request.params.province;
        console.log("New DELETE to emergency-call-stats");
      //Seleccionamos el elemento a eliminar
        db.remove({province: provincia}, {}, (err, numDelete) => {
          if (err) {
            console.log(err);
            response.sendStatus(500);
          } else {
            console.log(`Elemenetos eleminados`);
            response.sendStatus(200);
          }
        });
      });

      //Borrar un recurso concreto
      app.delete(BASE_API_URL + SANTIAGO +"/:province/:month", (request, response) => {
        var mes = request.params.month;
        var provincia = request.params.province;
        console.log("New DELETE to emergency-call-stats");
        //Seleccionamos el elemento a eliminar
        db.remove({province: provincia, month : mes }, {}, (err, numDelete) => {
          if (err) {
            console.log(err);
            response.sendStatus(500);
          } else if(numDelete == 0) {
            console.log("Elemento no encontrado");
            response.sendStatus(404);
           }else {
            console.log(`Elemeneto eleminado`);
            response.sendStatus(200);
          }
        });
      });

      //PROHIBIDO METODO POST A UN RECURSO CONCRETO
      app.post(BASE_API_URL + SANTIAGO +"/:province/:month", (request, response) => {
        // Enviamos una respuesta con el código de estado 405 Method Not Allowed
        response.sendStatus(405);
      });

      //PROHIBIDO LOS PUT A SOBRE LA LISTA DE RECURSOS
      app.put(BASE_API_URL + SANTIAGO, (request, response) => {
        // Enviamos una respuesta con el código de estado 405 Method Not Allowed
        response.status(405).send('Method Not Allowed');
      });
      app.put(BASE_API_URL + SANTIAGO+"/:var", (request, response) => {
        // Enviamos una respuesta con el código de estado 405 Method Not Allowed
        response.sendStatus(405);
      });

      //Actualizar una entrada concreta
      app.put(BASE_API_URL + SANTIAGO + "/:province/:month",validateId , (request, response) => {
        var mes = request.params.month;
        var provincia = request.params.province;
        var body = request.body;
        var provinciasAndalucia = ['Almería', 'Cádiz', 'Córdoba', 'Granada', 'Huelva', 'Jaén', 'Málaga', 'Sevilla'];
        var meses = ["january", "february", "march", "april", "may", "june",
                               "july", "august", "september", "october", "november", "december"];
        //checkear que esta todos los campos implementados correctamente
        if (!(mes==body.month) || !(provincia==body.province)) {
          response.sendStatus(400);
        } else if (!body.province ||!provinciasAndalucia.includes(body.province)) {
          response.sendStatus(400);
        }else if (!body.month || !meses.includes(body.month.toLowerCase())) {
          response.sendStatus(400);
        }else if(isNaN(body.phone_call_activation_organization) || body.phone_call_activation_organization < 0) {
          response.sendStatus(400);
        }else if (isNaN(body.telematic_activation_organization) || body.telematic_activation_organization < 0) {
          response.sendStatus(400);
        }else if (isNaN(body.emergency_call) || body.emergency_call < 0) {
          response.sendStatus(400);
        }else if (isNaN(body.year) || body.year < 0) {
          response.sendStatus(400);
        } else {
            //actualizar el recurso especificados
         db.update({province: provincia, month : mes}, body, {}, (err, update) => {
          if (err) {
            console.error(err);
            response.sendStatus(500);
              } else if (update == 0) {
                response.sendStatus(404);
              } else {
                console.log("Campos actualizados")
                response.sendStatus(200);
              }
          });
        }
      });


    app.get(BASE_API_URL + SANTIAGO + "/:value", (request, response) => {
        console.log("New GET to emergency-call-stats");
        var valor = request.params.value;
        const limit = parseInt(request.query.limit) || 10;
        const offset = parseInt(request.query.offset) || 0;

        //Creamos los filtros para cada campo con el valor especificado
        var filtros = {
          $or: [
              { year: valor },
              { month: valor },
              { province: valor }
            ]
          };
        
        db.find(filtros).skip(offset).limit(limit).exec((err, datos) => {
          if(err){
            console.log(err);
            response.sendStatus(500);
          } else if(datos==0){
            console.log("Datos no encontrados");
            response.sendStatus(404);
          }else{
            console.log(datos);
            response.status(200).json(datos.map((e=>{
                delete e._id;
                return e;
            })));
          }
        });
      });

      app.get(BASE_API_URL + SANTIAGO, (request, response) => {
        console.log("New GET to emergency-call-stats");
        const limit = parseInt(request.query.limit) || 10;
        const offset = parseInt(request.query.offset) || 0;

        var parametros = request.query;//obtenemos la consulta campo1=valor1&campo2=valor2...

        delete parametros.limit;
        delete parametros.offset;

        var claves = Object.keys(parametros); // creamos una variable con todos las claves de cada consulta

        var filtros = {}; // inizializamos el array con el que vamos a filtrar

        claves.forEach(clave =>{
            if (clave === 'from') {
                //creamos el filtro con la clave time y añadimo con el valor el comparador >=
                filtros['year'] = { $gte: parseInt(parametros[clave]) };
            } else if (clave === 'to') {
                if (filtros['year']) {
                //añadimos al objeto ya creado el comparador menor que y el valor a comparar <=
                  filtros['year']['$lte'] = parseInt(parametros[clave]);
            } else {
                //creamos el filtro con la clave time y añadimo con el valor el comparador <=
                  filtros['year'] = { $lte: parseInt(parametros[clave]) };

            } }else if(!isNaN(parametros[clave])){//Si el valor es un numero lo parseamos
                //Añadimos al valor del filtro un comparador >=
                filtros[clave] = {$gte: Number(parametros[clave]) }; 
            }else{
                filtros[clave] = parametros[clave];
            }
        });

        if(filtros['_id']){
          response.status(400).json({ error: 'El campo _id no está permitido.' });
        }else{

        db.find(filtros).skip(offset).limit(limit).exec((err, datos)  => {
          if(err){
            console.log(err);
            response.sendStatus(500);
          } else{
            console.log(datos);
            response.status(200).json(datos.map((e=>{
                delete e._id;
                return e;
            })));
          }
        });
      }
      });

   

  
    app.post(BASE_API_URL + SANTIAGO,validateId , (request, response) => {
        console.log("New POST to emergency-call-stats");
      
        var provinciasAndalucia = ['Almería', 'Cádiz', 'Córdoba', 'Granada', 'Huelva', 'Jaén', 'Málaga', 'Sevilla'];
        var meses = ["january", "february", "march", "april", "may", "june",
                               "july", "august", "september", "october", "november", "december"];
      
        const body = request.body;
       //Comprobar que todos los campos estan presentes y verificar sus valores
        if (!body.province ||!provinciasAndalucia.includes(body.province)) {
          response.sendStatus(400);
        }else if (!body.month || !meses.includes(body.month.toLowerCase())) {
          response.sendStatus(400);
        }else if(isNaN(body.phone_call_activation_organization) || body.phone_call_activation_organization < 0) {
          response.sendStatus(400);
        }else if (isNaN(body.telematic_activation_organization) || body.telematic_activation_organization < 0) {
          response.sendStatus(400);
        }else if (isNaN(body.emergency_call) || body.emergency_call < 0) {
          response.sendStatus(400);
        }else if (isNaN(body.year) || body.year < 0) {
          response.sendStatus(400);
        } else {
          db.find({province: body.province, month: body.month}, (err, datos) => {
          if (err) {
              console.error(err);
              response.status(500);
          } else if(datos.length > 0) {
                  console.log("El recurso ya existe");
                  response.sendStatus(409); // Codido de estado conflict
          } else {
            db.insert(body, (err, newEntry) => {
              if (err) {
                console.log(err);
                response.sendStatus(500);
              } else {
                console.log(newEntry);
                response.sendStatus(201);//Ok Created
              }
            });
          }
        });
      }
      });
}