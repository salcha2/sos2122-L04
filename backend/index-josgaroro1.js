//Variables
var Datastore = require('nedb');
var db = new Datastore();

const BASE_API_URL = "/api/v1";

module.exports = (app) => {

    var datosFichero = [
        {
            "genre": "Hombres", 
            "live_with": 1, 
            "territory": "Almería", 
            "employee": 5, 
            "value": 6850, 
            "year": 2019
        },
        {
            "genre": "Hombres", 
            "live_with": 1, 
            "territory": "Cádiz", 
            "employee": 5, 
            "value": 8325, 
            "year": 2019
        },
        {
            "genre": "Hombres", 
            "live_with": 1, 
            "territory": "Córdoba", 
            "employee": 5, 
            "value": 4375, 
            "year": 2018
        },
        {
            "genre": "Hombres", 
            "live_with": 1, 
            "territory": "Granada", 
            "employee": 5, 
            "value": 9650, 
            "year": 2018
        },
        {
            "genre": "Hombres", 
            "live_with": 1, 
            "territory": "Huelva", 
            "employee": 3, 
            "value": 4425, 
            "year": 2016
        },
        {
            "genre": "Hombres", 
            "live_with": 1, 
            "territory": "Jaén", 
            "employee": 3, 
            "value": 4525, 
            "year": 2016
        },
        {
            "genre": "Hombres", 
            "live_with": 1, 
            "territory": "Málaga", 
            "employee": 3, 
            "value": 14525, 
            "year": 2016
        },
        {
            "genre": "Hombres", 
            "live_with": 1, 
            "territory": "Sevilla", 
            "employee": 3, 
            "value": 10175, 
            "year": 2018
        },
        {
            "genre": "Hombres", 
            "live_with": 1, 
            "territory": "Cádiz", 
            "employee": 3, 
            "value": 63250, 
            "year": 2018
        },
        {
            "genre": "Hombres", 
            "live_with": 1, 
            "territory": "Almería", 
            "employee": 3, 
            "value": 8050, 
            "year": 2019
        },
    ];
    db.insert(datosFichero);

    //GET //////////////////////////////////////////////////
    app.get(BASE_API_URL+"/self-employed-stats", (request,response) => {
        console.log("New GET to /self-employed-stats");
        db.find({}, (err, datosFichero)=>{
            if(err){
                console.log(`Error geting /self-employed-stats: ${err}`);
                response.sendStatus(500);
            }else{
                console.log(`data out: ${datosFichero.length}`);
                response.json(datosFichero.map((d)=>{
                    delete d._id;//id propio de mongoDB, no apropiado mostrar al cliente
                    return d;
                }));                           
            }
        });
    });

    app.get(BASE_API_URL+"/self-employed-stats/docs", (request,response) => {
        response.redirect("https://documenter.getpostman.com/view/26051644/2s93K1oemT");
    });

    app.get(BASE_API_URL+"/self-employed-stats/loadInitialData", (request,response) => {
        console.log("New GET to /self-employed-stats/loadInitialData");
        db.find({}, function(err,data){
            if(err){
                console.log(`Error geting /self-employed-stats/loadInitialData: ${err}`);
                response.sendStatus(500);
            }else{
                if(data.length==0){
                    console.log(`data inserted: ${data.length}`);  
                    db.insert(datosFichero); 
                    response.json(datosFichero.map((d)=>{
                        delete d._id;
                        return d;
                    }));    
                }else{
                    console.log(`Data is already inserted: ${datosFichero.length}`);
                    response.status(200).send("Data is already inserted");  
                }
            }
        });
    });
    
    /*app.get(BASE_API_URL+"/self-employed-stats/:name", (request,response) => {
        var name = request.params.name;
        //
        if (datosFichero.filter((dato=>dato.territory === name)).length>0){
            response.json(datosFichero.filter(dato=>dato.territory === name));
            response.sendStatus(200).send("HTTP 200 OK" );
        }else if(datosFichero.filter((dato=>dato.genre === name)).length>0){
            response.json(datosFichero.filter(dato=>dato.genre === name));
            response.sendStatus(200).send("HTTP 200 OK" );
        }else if(datosFichero.filter((dato=>dato.year === parseInt(name))).length>0){
            response.json(datosFichero.filter(dato=>dato.year === parseInt(name)));
            response.sendStatus(200).send("HTTP 200 OK" );
        }else if(datosFichero.filter((dato=>dato.live_with === parseInt(name))).length>0){
            response.json(datosFichero.filter(dato=>dato.live_with === parseInt(name)));
            response.sendStatus(200).send("HTTP 200 OK" );
        }else if(datosFichero.filter((dato=>dato.value === parseInt(name))).length>0){
            response.json(datosFichero.filter(dato=>dato.value === parseInt(name)));
            response.sendStatus(200).send("HTTP 200 OK" );

        }else{
            response.sendStatus(404).json({ mes   ge: "HTTP 404 NOT FOUND" });
        }
    });*/
    app.get(BASE_API_URL+"/self-employed-stats/:name", (request,response) => {
        var name = request.params.name;
        if (isNaN(name)){
            db.find({ $or: [{ "genre": name }, { "territory": name }] }, function (err, data) {
                if(err){
                    console.log(`Error geting /self-employed-stats/${name}: ${err}`);
                    response.sendStatus(500);
                }else{
                    if(data.length > 0){
                        console.log(`data returned ${data.length}`);
                        response.json(data.map((d)=>{
                            delete d._id;
                            return d;
                        }));
                    }else{
                        console.log(`Data not found /self-employed-stats/${name}: ${err}`);
                        response.status(404).send("Data not found");
                    }
                }
              });
        }else{
            name = parseInt(name);
            db.find({ $or: [{ "value": name }, { "employee": name }, {"year": name}] }, function (err, data) {
                if(err){
                    console.log(`Error geting /self-employed-stats/${name}: ${err}`);
                    response.sendStatus(500);
                }else{
                    if(data.length > 0){
                        console.log(`data returned ${data.length}`);
                        response.json(data.map((d)=>{
                            delete d._id;
                            return d;
                        }));
                    }else{
                        console.log(`Data not found /self-employed-stats/${name}: ${err}`);
                        response.status(404).send("Data not found");
                    }
                }
              });
        }
        
        
    });
    
    app.get(BASE_API_URL+"/self-employed-stats/:territory/:year", (request,response) => {
        var name = request.params.territory;
        var anyo = parseInt(request.params.year);
    
        if (datosFichero.filter((dato=>dato.territory === name & dato.year === anyo)).length>0){
            response.json(datosFichero.filter(dato=>dato.territory === name & dato.year === anyo));
            response.sendStatus(200).json({ message: "HTTP 200 OK" });
        }else{
            response.sendStatus(404).json({ message: "HTTP 404 NOT FOUND" });
        }
    });

    app.get(BASE_API_URL+"/self-employed-stats?limit=n1&offset=n2", (request,response) => {
        var n1 = parseInt(request.params.n1);
        var n2 = parseInt(request.params.n2);

        db.find({}).skip(n1).limit(n2).exec(function (err, data) {//PAGINACION
            if(err){
                console.log(`Error geting /self-employed-stats/: ${err}`);
                response.sendStatus(500);
            }else{
                if(data.length > 0){
                    console.log(`data returned ${data.length}`);
                    response.json(data.map((d)=>{
                        delete d._id;
                        return d;
                    }));
                }else{
                    console.log(`Data not found /self-employed-stats/${anyo}: ${err}`);
                    response.status(404).send("Data not found");
                }
            }
        })

    });

    app.get(BASE_API_URL+"/self-employed-stats/:year", (request,response) => {
        var anyo = request.params.year;

        db.find({year: anyo}).skip(1).limit(2).exec(function (err, data) {//PAGINACION
            if(err){
                console.log(`Error geting /self-employed-stats/${anyo}: ${err}`);
                response.sendStatus(500);
            }else{
                if(data.length > 0){
                    console.log(`data returned ${data.length}`);
                    response.json(data.map((d)=>{
                        delete d._id;
                        return d;
                    }));
                }else{
                    console.log(`Data not found /self-employed-stats/${anyo}: ${err}`);
                    response.status(404).send("Data not found");
                }
            }
        });
    });
    
    app.get(BASE_API_URL+"/self-employed-stats/:territory/:year1/:year2", (request,response) => {
        var anyo1 = parseInt(request.params.year1);
        var anyo2 = parseInt(request.params.year2);
        var territorio = request.params.territory;

        db.find({territory : territorio,year : {$gte: anyo1, $lte: anyo2}}, function(err, data){
            if(err){
                console.log(`Error geting /apartment-occupancy-surveys/${territorio}/${anyo1}/${anyo2}: ${err}`);
                response.sendStatus(500);
            }else{
                if(data.length!=0){
                    response.json(data.map((d)=>{
                        delete d._id;
                        return d;
                    }));
                }else{
                    console.log(`Data not found /self-employed-stats/${territorio}/${anyo1}/${anyo2}: ${err}`);
                    response.status(404).send("Data not found");
                }                
            }
        });
    });
    
    
    //POST //////////////////////////////////////////////////
    app.post(BASE_API_URL+"/self-employed-stats",(req,res)=>{
        var inputPost = req.body;
        if(!inputPost.genre || !inputPost.live_with || !inputPost.territory || !inputPost.employee || 
            !inputPost.value || !inputPost.year){
            res.sendStatus(400).send("HTTP 400 BAD REQUEST");
        }
        else if (datosFichero.find(autonomo => (autonomo.value === inputPost.value)&(autonomo.year === inputPost.year)&
                (autonomo.genre === inputPost.genre)&(autonomo.territory === inputPost.territory)&
                (autonomo.live_with === inputPost.live_with)&(autonomo.employee === inputPost.employee))){
            res.sendStatus(409).send("HTTP 409 CONFLICT");
        }else{
            db.insert(inputPost);
            res.sendStatus(201).send("HTTP 201 CREATED" );
        }
        console.log("New POST to /self-employed")
    });
    
    app.post(BASE_API_URL+"/self-employed-stats/:territory", (req,res)=>{
        res.sendStatus(405);
    });
    
    app.post(BASE_API_URL+"/self-employed-stats/:territory/:year", (req,res)=>{
        res.sendStatus(405);
    });
    
    //PUT //////////////////////////////////////////////////

    //db.update({ planet: 'Jupiter' }, { planet: 'Pluton'}, {}, function (err, numReplaced) {} remplaza jupiter por pluton
    app.put(BASE_API_URL+"/self-employed-stats", (req,res)=>{
        res.sendStatus(405).json({ message: "HTTP 405 METHOD NOT ALLOWED" });
    });

    //id no coincidente
    app.put(BASE_API_URL+"/self-employed-stats/:province/:year", (req,res)=>{
        const province = req.params.province;
        const year = req.params.year;
        const id = `${province}/${year}`
        if (req.body.id !== id){
            res.sendStatus(400).json({ message: "HTTP 400 BAD REQUEST" });
        }
    });
    
    app.put(BASE_API_URL+"/self-employed-stats/:territory/:year", (request,response)=>{
        var newFile = request.body;
        var territorio = request.params.territory;
        var año = parseInt(request.params.year);

        /*if(!newFile.genre || !newFile.live_with || !newFile.territory || !newFile.employee || 
            !newFile.value || newFile.year){
            console.log(`No se han recibido los campos esperados:`);
            response.status(400);
        }else{*/
            db.update({$and: [{"territory":territorio}, {"year":año}]}, {$set: newFile},{},function(err, data){
                if(err){
                    console.log(`Error put /self-employed-stats/${territorio}/${año}: ${err}`);
                    response.sendStatus(500);
                }else{
                    console.log(`Numero de documentos actualizados: ${data}`);
                    response.sendStatus(200);  
                    }
            });
        //}
            
    });
    
    //DELETE //////////////////////////////////////////////////
    app.delete(BASE_API_URL +"/self-employed-stats", (request, response)=>{
        //usando el parametro options -> db.remove(query, options, callback)
        db.remove({},{multi:true},(err,numRemoved)=>{
            if(err){
                console.log(`Error deleting /self-employed-stats: ${err}`);
                response.sendStatus(500);
            }else{
                if(numRemoved==0){
                    response.sendStatus(404).send("HTTP 404 NOT FOUND");
                }else{
                    console.log(`Files removed ${numRemoved}`);
                    response.sendStatus(200);
                }    
            }
        });
    });
    
    app.delete(BASE_API_URL+"/self-employed-stats/:name", (request,response) => {//quita por territorio
        var name = request.params.name;

        console.log(`New DELETE to /self-employed/stats/${name}`);

        db.remove({"territory": name}, {multi:true}, (err,numRemoved)=>{
            if(err){
                console.log(`Error deleting /self-employed-stats/${name}: ${err}`);
                response.sendStatus(500);
            }else{
                if (numRemoved==0){
                    response.sendStatus(404);
                }else{
                    console.log(`Self-employed removed: ${numRemoved}`);
                    response.sendStatus(200);
                }
            }
        });
    });
    
    app.delete(BASE_API_URL+"/self-employed-stats/:territory/:year",(request, response)=>{
        var territorio = request.params.territory;
        var anyo = parseInt(request.params.year);
    
        console.log(`New DELETE to /self-employed-stats/${territorio}/${anyo}`);
    
        db.remove({"territory":territorio, "year":anyo},{multi:true},(err, numRemoved)=>{
            if(err){
                console.log(`Error deleting /self-employed-stats/${territorio}/${anyo}: ${err}`);
                response.sendStatus(500);
            }else{
                if(dbRemoved==0){
                    response.sendStatus(404).send("Not Found");
                }else{
                    console.log(`Files removed ${numRemoved}`);
                    response.sendStatus(200);
                }
            }      
        });
    });

};




