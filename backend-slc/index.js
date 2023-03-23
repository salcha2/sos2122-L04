const BASE_API_URL = "/api/v1";

//const salim = require("./andalusian-bicycles-plans");

//const salim = require("./andalusian-bicycles-plans");

const API_DOC_PORTAL_salim = "https://documenter.getpostman.com/view/25746364/2s93JxsMEP"


const API_DOC_PORTAL_salim1 = "https://sos2223-17-381423.ew.r.appspot.com/"


var Datastore = require('nedb');
var db = new Datastore();


module.exports = (app) =>{

    //codigo salim /////////////////////////////////////////////////////////////

var datos_Salim = [
    {
        "province":"Almeria",
        "municipality":19,
        "population":508657,
        "all_displacement":1099878,
        "walking":32.1,
        "car_driver":47.2,
        "accompanying_car":14.7,
        "motorcycle":5.4,
        "bicycle":2.2,
        "public_transport":7.6,
        "other_transportation":1.5,
        "year":2015,
        "motorized_percentage":53.1
    },
    {
        "province":"Cadiz",
        "municipality":12,
        "population":807793,
        "all_displacement":2176140,
        "walking":28.6,
        "car_driver":42.4,
        "accompanying_car":14.7,
        "motorcycle":6.5,
        "bicycle":1.6,
        "public_transport":4,
        "other_transportation":0.8,
        "year":2015,
        "motorized_percentage":65.0
    },
    {
        "province":"Cordoba",
        "municipality":16,
        "population":398762,
        "all_displacement":902612,
        "walking":33.3,
        "car_driver":40.9,
        "accompanying_car":13.8,
        "motorcycle":2.9,
        "bicycle":2.1,
        "public_transport":6.2,
        "other_transportation":0.5,
        "year":2015,
        "motorized_percentage":65.2
    },
    {
        "province":"Granada",
        "municipality":50,
        "population":566830,
        "all_displacement":1382297,
        "walking":31.8,
        "car_driver":48.1,
        "accompanying_car":10.5,
        "motorcycle":3.5,
        "bicycle":2.2,
        "public_transport":9.3,
        "other_transportation":0.8,
        "year":2015,
        "motorized_percentage":62.8
    },
    {
        "province":"Huelva",
        "municipality":21,
        "population":398584,
        "all_displacement":959108,
        "walking":30.1,
        "car_driver":48.1,
        "accompanying_car":10.6,
        "motorcycle":5.2,
        "bicycle":2.1,
        "public_transport":4,
        "other_transportation":0.4,
        "year":2015,
        "motorized_percentage":57.4
    },
    {
        "province":"Jaen",
        "municipality":14,
        "population":218264,
        "all_displacement":439574,
        "walking":38.4,
        "car_driver":47.2,
        "accompanying_car":10.6,
        "motorcycle":5.2,
        "bicycle":0.8,
        "public_transport":9.3,
        "other_transportation":0.4,
        "year":2015,
        "motorized_percentage":62.6
    },
    {
        "province":"Malaga",
        "municipality":32,
        "population":1294982,
        "all_displacement":2775480,
        "walking":30.4,
        "car_driver":48.2,
        "accompanying_car":13.5,
        "motorcycle":3.5,
        "bicycle":2.5,
        "public_transport":4,
        "other_transportation":0.4,
        "year":2015,
        "motorized_percentage":62.8
    },
    {
        "province":"Sevilla",
        "municipality":50,
        "population":1543901,
        "all_displacement":3405252,
        "walking":24.0,
        "car_driver":39.6,
        "accompanying_car":13.7,
        "motorcycle":1.7,
        "bicycle":0.8,
        "public_transport":8.2,
        "other_transportation":1.5,
        "year":2015,
        "motorized_percentage":57.4
    },
    
  
    {
        "province":"Almeria",
        "municipality":18,
        "population":508658,
        "all_displacement":1099878,
        "walking":32.1,
        "car_driver":48.2,
        "accompanying_car":13.5,
        "motorcycle":3.3,
        "bicycle":2.5,
        "public_transport":8.2,
        "other_transportation":0.1,
        "year":2016,
        "motorized_percentage":64.1
    },
    {
        "province":"Cadiz",
        "municipality":11,
        "population":807792,
        "all_displacement":2176140,
        "walking":28.6,
        "car_driver":42.4,
        "accompanying_car":11.8,
        "motorcycle":3.1,
        "bicycle":1.3,
        "public_transport":9.2,
        "other_transportation":0.4,
        "year":2016,
        "motorized_percentage":57.4
    },
    {
        "province":"Cordoba",
        "municipality":15,
        "population":398763,
        "all_displacement":902612,
        "walking":33.3,
        "car_driver":47.2,
        "accompanying_car":13.8,
        "motorcycle":3.4,
        "bicycle":2.1,
        "public_transport":9.2,
        "other_transportation":0.4,
        "year":2016,
        "motorized_percentage":53.1
    },
    {
        "province":"Granada",
        "municipality":49,
        "population":566831,
        "all_displacement":1382297,
        "walking":31.8,
        "car_driver":45.8,
        "accompanying_car":13.8,
        "motorcycle":1.7,
        "bicycle":2.5,
        "public_transport":4.8,
        "other_transportation":0.1,
        "year":2016,
        "motorized_percentage":62.6
    },
    {
        "province":"Huelva",
        "municipality":50,
        "population":398584,
        "all_displacement":959108,
        "walking":30.1,
        "car_driver":45.8,
        "accompanying_car":9.2,
        "motorcycle":5.4,
        "bicycle":1.9,
        "public_transport":9.4,
        "other_transportation":0.4,
        "year":2016,
        "motorized_percentage":65.0
    },
    {
        "province":"Jaen",
        "municipality":51,
        "population":218264,
        "all_displacement":439574,
        "walking":38.4,
        "car_driver":40.9,
        "accompanying_car":10.5,
        "motorcycle":2.9,
        "bicycle":1.5,
        "public_transport":5.6,
        "other_transportation":0.5,
        "year":2016,
        "motorized_percentage":62.8
    },
    {
        "province":"Malaga",
        "municipality":32,
        "population":1294986,
        "all_displacement":2775480,
        "walking":30.4,
        "car_driver":48.1,
        "accompanying_car":13.6,
        "motorcycle":6.5,
        "bicycle":1.6,
        "public_transport":9.4,
        "other_transportation":0.5,
        "year":2016,
        "motorized_percentage":57.4
    },
    {
        "province":"Sevilla",
        "municipality":50,
        "population":1543900,
        "all_displacement":3405252,
        "walking":24.0,
        "car_driver":48.1,
        "accompanying_car":9.2,
        "motorcycle":3.4,
        "bicycle":2.2,
        "public_transport":7.2,
        "other_transportation":0.4,
        "year":2016,
        "motorized_percentage":64.1
    },
    
    {
        "province":"Alameda",
        "municipality":11,
        "population":398765,
        "all_displacement":1099878,
        "walking":32.1,
        "car_driver":48.2,
        "accompanying_car":10.6,
        "motorcycle":3.1,
        "bicycle":1.5,
        "public_transport":4.8,
        "other_transportation":0.6,
        "year":2017,
        "motorized_percentage":60.8
    },
    {
        "province":"Cadiz",
        "municipality":15,
        "population":566833,
        "all_displacement":2176140,
        "walking":28.6,
        "car_driver":43.0,
        "accompanying_car":13.7,
        "motorcycle":3.3,
        "bicycle":2.1,
        "public_transport":5.6,
        "other_transportation":0.8,
        "year":2017,
        "motorized_percentage":65.1
    },
    {
        "province":"Cordoba",
        "municipality":49,
        "population":398586,
        "all_displacement":902612,
        "walking":33.3,
        "car_driver":44.8,
        "accompanying_car":11.0,
        "motorcycle":3.5,
        "bicycle":0.8,
        "public_transport":5.6,
        "other_transportation":0.1,
        "year":2017,
        "motorized_percentage":57.4
    },
    {
        "province":"Granada",
        "municipality":50,
        "population":218269,
        "all_displacement":1382297,
        "walking":31.8,
        "car_driver":39.6,
        "accompanying_car":13.7,
        "motorcycle":6.5,
        "bicycle":1.9,
        "public_transport":7.2,
        "other_transportation":0.4,
        "year":2017,
        "motorized_percentage":60.8
    },
    {
        "province":"Huelva",
        "municipality":51,
        "population":1294987,
        "all_displacement":959108,
        "walking":30.1,
        "car_driver":43.0,
        "accompanying_car":13.6,
        "motorcycle":5.4,
        "bicycle":2.1,
        "public_transport":9.4,
        "other_transportation":0.6,
        "year":2017,
        "motorized_percentage":64.1
    },
    {
        "province":"Jaen",
        "municipality":32,
        "population":1543901,
        "all_displacement":439574,
        "walking":38.4,
        "car_driver":48.1,
        "accompanying_car":10.5,
        "motorcycle":8.1,
        "bicycle":1.6,
        "public_transport":7.2,
        "other_transportation":0.6,
        "year":2017,
        "motorized_percentage":65.1
    },
    {
        "province":"Malaga",
        "municipality":50,
        "population":1543908,
        "all_displacement":2775480,
        "walking":30.4,
        "car_driver":39.6,
        "accompanying_car":11.0,
        "motorcycle":8.1,
        "bicycle":1.9,
        "public_transport":9.2,
        "other_transportation":1.1,
        "year":2017,
        "motorized_percentage":65.2
    },
    {
        "province":"Sevilla",
        "municipality":52,
        "population":1543905,
        "all_displacement":3405252,
        "walking":24.0,
        "car_driver":48.1,
        "accompanying_car":11.8,
        "motorcycle":3.1,
        "bicycle":1.3,
        "public_transport":8.2,
        "other_transportation":0.4,
        "year":2017,
        "motorized_percentage":65.1
    },
    
  

]



var datos_auxilio = [
    {
        "province":"Almeria",
        "municipality":19,
        "population":508657,
        "all_displacement":1099878,
        "walking":32.1,
        "car_driver":47.2,
        "accompanying_car":14.7,
        "motorcycle":5.4,
        "bicycle":2.2,
        "public_transport":7.6,
        "other_transportation":1.5,
        "year":2015,
        "motorized_percentage":53.1
    },
    {
        "province":"Cadiz",
        "municipality":12,
        "population":807793,
        "all_displacement":2176140,
        "walking":28.6,
        "car_driver":42.4,
        "accompanying_car":14.7,
        "motorcycle":6.5,
        "bicycle":1.6,
        "public_transport":4,
        "other_transportation":0.8,
        "year":2015,
        "motorized_percentage":65.0
    },
    {
        "province":"Cordoba",
        "municipality":16,
        "population":398762,
        "all_displacement":902612,
        "walking":33.3,
        "car_driver":40.9,
        "accompanying_car":13.8,
        "motorcycle":2.9,
        "bicycle":2.1,
        "public_transport":6.2,
        "other_transportation":0.5,
        "year":2015,
        "motorized_percentage":65.2
    },
    {
        "province":"Granada",
        "municipality":50,
        "population":566830,
        "all_displacement":1382297,
        "walking":31.8,
        "car_driver":48.1,
        "accompanying_car":10.5,
        "motorcycle":3.5,
        "bicycle":2.2,
        "public_transport":9.3,
        "other_transportation":0.8,
        "year":2015,
        "motorized_percentage":62.8
    },
    {
        "province":"Huelva",
        "municipality":21,
        "population":398584,
        "all_displacement":959108,
        "walking":30.1,
        "car_driver":48.1,
        "accompanying_car":10.6,
        "motorcycle":5.2,
        "bicycle":2.1,
        "public_transport":4,
        "other_transportation":0.4,
        "year":2015,
        "motorized_percentage":57.4
    },
    {
        "province":"Jaen",
        "municipality":14,
        "population":218264,
        "all_displacement":439574,
        "walking":38.4,
        "car_driver":47.2,
        "accompanying_car":10.6,
        "motorcycle":5.2,
        "bicycle":0.8,
        "public_transport":9.3,
        "other_transportation":0.4,
        "year":2015,
        "motorized_percentage":62.6
    },
    {
        "province":"Malaga",
        "municipality":32,
        "population":1294982,
        "all_displacement":2775480,
        "walking":30.4,
        "car_driver":48.2,
        "accompanying_car":13.5,
        "motorcycle":3.5,
        "bicycle":2.5,
        "public_transport":4,
        "other_transportation":0.4,
        "year":2015,
        "motorized_percentage":62.8
    },
    {
        "province":"Sevilla",
        "municipality":50,
        "population":1543901,
        "all_displacement":3405252,
        "walking":24.0,
        "car_driver":39.6,
        "accompanying_car":13.7,
        "motorcycle":1.7,
        "bicycle":0.8,
        "public_transport":8.2,
        "other_transportation":1.5,
        "year":2015,
        "motorized_percentage":57.4
    },
    
  
    {
        "province":"Almeria",
        "municipality":18,
        "population":508658,
        "all_displacement":1099878,
        "walking":32.1,
        "car_driver":48.2,
        "accompanying_car":13.5,
        "motorcycle":3.3,
        "bicycle":2.5,
        "public_transport":8.2,
        "other_transportation":0.1,
        "year":2016,
        "motorized_percentage":64.1
    },
    {
        "province":"Cadiz",
        "municipality":11,
        "population":807792,
        "all_displacement":2176140,
        "walking":28.6,
        "car_driver":42.4,
        "accompanying_car":11.8,
        "motorcycle":3.1,
        "bicycle":1.3,
        "public_transport":9.2,
        "other_transportation":0.4,
        "year":2016,
        "motorized_percentage":57.4
    },
    {
        "province":"Cordoba",
        "municipality":15,
        "population":398763,
        "all_displacement":902612,
        "walking":33.3,
        "car_driver":47.2,
        "accompanying_car":13.8,
        "motorcycle":3.4,
        "bicycle":2.1,
        "public_transport":9.2,
        "other_transportation":0.4,
        "year":2016,
        "motorized_percentage":53.1
    },
    {
        "province":"Granada",
        "municipality":49,
        "population":566831,
        "all_displacement":1382297,
        "walking":31.8,
        "car_driver":45.8,
        "accompanying_car":13.8,
        "motorcycle":1.7,
        "bicycle":2.5,
        "public_transport":4.8,
        "other_transportation":0.1,
        "year":2016,
        "motorized_percentage":62.6
    },
    {
        "province":"Huelva",
        "municipality":50,
        "population":398584,
        "all_displacement":959108,
        "walking":30.1,
        "car_driver":45.8,
        "accompanying_car":9.2,
        "motorcycle":5.4,
        "bicycle":1.9,
        "public_transport":9.4,
        "other_transportation":0.4,
        "year":2016,
        "motorized_percentage":65.0
    },
    {
        "province":"Jaen",
        "municipality":51,
        "population":218264,
        "all_displacement":439574,
        "walking":38.4,
        "car_driver":40.9,
        "accompanying_car":10.5,
        "motorcycle":2.9,
        "bicycle":1.5,
        "public_transport":5.6,
        "other_transportation":0.5,
        "year":2016,
        "motorized_percentage":62.8
    },
    {
        "province":"Malaga",
        "municipality":32,
        "population":1294986,
        "all_displacement":2775480,
        "walking":30.4,
        "car_driver":48.1,
        "accompanying_car":13.6,
        "motorcycle":6.5,
        "bicycle":1.6,
        "public_transport":9.4,
        "other_transportation":0.5,
        "year":2016,
        "motorized_percentage":57.4
    },
    {
        "province":"Sevilla",
        "municipality":50,
        "population":1543900,
        "all_displacement":3405252,
        "walking":24.0,
        "car_driver":48.1,
        "accompanying_car":9.2,
        "motorcycle":3.4,
        "bicycle":2.2,
        "public_transport":7.2,
        "other_transportation":0.4,
        "year":2016,
        "motorized_percentage":64.1
    },
    
    {
        "province":"Alameda",
        "municipality":11,
        "population":398765,
        "all_displacement":1099878,
        "walking":32.1,
        "car_driver":48.2,
        "accompanying_car":10.6,
        "motorcycle":3.1,
        "bicycle":1.5,
        "public_transport":4.8,
        "other_transportation":0.6,
        "year":2017,
        "motorized_percentage":60.8
    },
    {
        "province":"Cadiz",
        "municipality":15,
        "population":566833,
        "all_displacement":2176140,
        "walking":28.6,
        "car_driver":43.0,
        "accompanying_car":13.7,
        "motorcycle":3.3,
        "bicycle":2.1,
        "public_transport":5.6,
        "other_transportation":0.8,
        "year":2017,
        "motorized_percentage":65.1
    },
    {
        "province":"Cordoba",
        "municipality":49,
        "population":398586,
        "all_displacement":902612,
        "walking":33.3,
        "car_driver":44.8,
        "accompanying_car":11.0,
        "motorcycle":3.5,
        "bicycle":0.8,
        "public_transport":5.6,
        "other_transportation":0.1,
        "year":2017,
        "motorized_percentage":57.4
    },
    {
        "province":"Granada",
        "municipality":50,
        "population":218269,
        "all_displacement":1382297,
        "walking":31.8,
        "car_driver":39.6,
        "accompanying_car":13.7,
        "motorcycle":6.5,
        "bicycle":1.9,
        "public_transport":7.2,
        "other_transportation":0.4,
        "year":2017,
        "motorized_percentage":60.8
    },
    {
        "province":"Huelva",
        "municipality":51,
        "population":1294987,
        "all_displacement":959108,
        "walking":30.1,
        "car_driver":43.0,
        "accompanying_car":13.6,
        "motorcycle":5.4,
        "bicycle":2.1,
        "public_transport":9.4,
        "other_transportation":0.6,
        "year":2017,
        "motorized_percentage":64.1
    },
    {
        "province":"Jaen",
        "municipality":32,
        "population":1543901,
        "all_displacement":439574,
        "walking":38.4,
        "car_driver":48.1,
        "accompanying_car":10.5,
        "motorcycle":8.1,
        "bicycle":1.6,
        "public_transport":7.2,
        "other_transportation":0.6,
        "year":2017,
        "motorized_percentage":65.1
    },
    {
        "province":"Malaga",
        "municipality":50,
        "population":1543908,
        "all_displacement":2775480,
        "walking":30.4,
        "car_driver":39.6,
        "accompanying_car":11.0,
        "motorcycle":8.1,
        "bicycle":1.9,
        "public_transport":9.2,
        "other_transportation":1.1,
        "year":2017,
        "motorized_percentage":65.2
    },
    {
        "province":"Sevilla",
        "municipality":52,
        "population":1543905,
        "all_displacement":3405252,
        "walking":24.0,
        "car_driver":48.1,
        "accompanying_car":11.8,
        "motorcycle":3.1,
        "bicycle":1.3,
        "public_transport":8.2,
        "other_transportation":0.4,
        "year":2017,
        "motorized_percentage":65.1
    },
    
  
  ]


db.insert(datos_Salim);
//db.insert(datos_auxilio);


    
    
    app.get(BASE_API_URL+"/andalusian-bicycle-plans/docs", (req,res)=>{
        res.redirect(API_DOC_PORTAL_salim);
    });
    
    

    app.get(BASE_API_URL + "/andalusian-bicycle-plans/loadInitialData", (req, res) => {
        db.find({}, (err, docs) => {
          if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo los datos de la base de datos');
          } else if (docs.length == 0) {
            db.insert(datos_auxilio, (err, newDocs) => {
              if (err) {
                console.error(err);
                res.status(500).send('Error insertando los datos en la base de datos');
              } else {
                res.json(newDocs);
                console.log("Se han creado los datos");
              }
            });
          } else {
            res.send('Ya existen datos');
            console.log('Ya existen datos');
          }
        });
      });
      
      
    
   
    

app.get('/api/v1/andalusian-bicycle-plans', (req, res) => {
  const { province, year, from, to, population_over, municipality_over, all_dispacement_over, walking_over, car_driver_over, accompanying_car_over, motorcycle_over, bicycle_over, public_transport_over, other_transport_over, motorized_percentage_over } = req.query;

  let query = {};
  if (province) {
    query.province = province;
  }
  if (year) {
    query.year = Number(year);
  }
  if (population_over) {
    query.population = { $gt: Number(population_over) };
  }
  if (municipality_over) {
    query.municipality = { $gt: Number(municipality_over) };
  }
  if (all_dispacement_over) {
    query.all_displacement = { $gt: Number(all_dispacement_over) };
  }
  if (walking_over) {
    query.walking = { $gt: Number(walking_over) };
  }
  if (car_driver_over) {
    query.car_driver = { $gt: Number(car_driver_over) };
  }
  if (accompanying_car_over) {
    query.accompanying_car = { $gt: Number(accompanying_car_over) };
  }
  if (motorcycle_over) {
    query.motorcycle = { $gt: Number(motorcycle_over) };
  }
  if (bicycle_over) {
    query.bicycle = { $gt: Number(bicycle_over) };
  }
  if (public_transport_over) {
    query.public_transport = { $gt: Number(public_transport_over) };
  }
  if (motorized_percentage_over) {
    query.motorized_percentage = { $gt: Number(motorized_percentage_over) };
  }

  
  if (from && to) {
    query.year = { $gte: Number(from), $lte: Number(to) };
  } else if (from) {
    query.year = { $gte: Number(from) };
  } else if (to) {
    query.year = { $lte: Number(to) };
  }

  db.find(query, (err, docs) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.json(docs);
  });
});

      
  

app.get('/api/v1/andalusian-bicycle-plans/:province/:year', (req, res) => {
  const { province, year } = req.params;
  const { from, to } = req.query;




  // Verificar si se proporcionan los parámetros de ruta necesarios
  if (!province || !year) {
    return res.status(400).json({ error: 'Faltan parámetros de ruta' });
  }

  // Validar que los valores de los parámetros sean correctos
  const validProvinces = ['sevilla', 'malaga', 'cadiz', 'huelva', 'cordoba', 'jaen', 'almeria'];
  if (!validProvinces.includes(province.toLowerCase())) {
    return res.status(400).json({ error: 'Provincia inválida' });
  }

  if (isNaN(year) || year < 2000 || year > 2023) {
    return res.status(400).json({ error: 'Año inválido' });
  }

  const query = {
    province: province.toLowerCase(),
    year: parseInt(year)
  };

  db.find(query, (err, docs) => {
    if (err) {
      return res.status(500).json({ error: 'Error al buscar en la base de datos' });
    }

    let planesFiltrados = docs;


    res.json(planesFiltrados);
  });
});

      
      
      
      


      
      
    
app.post(BASE_API_URL + "/andalusian-bicycle-plans", (req, res) => {
  const inputPost = req.body;

  const query = { province: inputPost.province, year: inputPost.year };

  db.find(query, (err, docs) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (docs.length > 0) {
      return res.status(409).json({ message: 'HTTP 409 CONFLICT: The contact already exists.' });
    } else {
      db.insert(inputPost, (err, newDoc) => {
        if (err) {
          return res.status(500).json({ error: 'Internal server error' });
        }
        return res.status(201).json({ message: 'HTTP 201 CREATED' });
      });
    }
  });
  
  console.log("New POST to /andalusian-bicycle-plans");
});

    
    
      app.post(BASE_API_URL+"/andalusian-bicycle-plans/:province", (req,res)=>{
        res.sendStatus(405).json({ message: "HTTP 405 METHOD NOT ALLOWED" });
    });
    
      
      
      
      
      
      
      
      
    
     
      
      
      
    
    app.put('/api/v1/andalusian-bicycle-plans/:province/:year', (req, res) => {
      const { province, year } = req.params;
      const expectedId = `${province}/${year}`;
      
      if (parseInt(year) >= 2020) {
        return res.sendStatus(404);
      }
      
      if(parseInt(year) <= 2013){
        return res.sendStatus(400);
      }
    
      if (req.params.province && req.params.year) {
        if (req.params.province !== province || req.params.year !== year.toString()) {
          return res.sendStatus(400);
        }
      } else if (req.body.id !== expectedId) {
        return res.sendStatus(400);
      }
    
      const query = { province, year: parseInt(year) };
      const update = { $set: { ...req.body, province, year: parseInt(year) } };
      const options = { returnUpdatedDocs: true };
    
      db.update(query, update, options, (err, numAffected, updatedDoc) => {
        if (err) {
          return res.status(500).json({ error: 'Internal server error' });
        }
        if (numAffected === 0) {
          return res.sendStatus(404);
        }
        return res.status(200).json(updatedDoc);
      });
    });
    
      
    
      
      
    
      app.put('/api/v1/andalusian-bicycle-plans', (req, res) => {
        res.sendStatus(405);
      });
    
      
      
      app.delete(BASE_API_URL + '/andalusian-bicycle-plans', (req, res) => {
        db.remove({}, { multi: true }, (err, numRemoved) => {
          if (err) {
            return res.status(500).json({ error: 'Internal server error' });
          }
          return res.status(200).end();
        });
      
        console.log('All data deleted from /andalusian-bicycle-plans');
      });
      
    
      
    
      app.get(BASE_API_URL + "/andalusian-bicycle-plans/:province/:year", (req, res) => {
        const { province, year } = req.params;
        const query = { province, year: parseInt(year) };
      
        db.findOne(query, (err, doc) => {
          if (err) {
            return res.status(500).json({ error: 'Internal server error' });
          }
      
          if (!doc) {
            return res.status(404).json({ message: 'HTTP 404 NOT FOUND' });
          }
      
          return res.status(200).json(doc);
        });
      });
      
      



    exports 



}


