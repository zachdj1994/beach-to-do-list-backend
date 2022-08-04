import express from "express";
import ToDoListService from './ToDoListService';
const app = express()
const port = 8080;
const toDoListService = new ToDoListService();

app.get( "/", ( request, response ) => {
    response.send(
        {pinaColada: {
                pineappleJuice: "4.5 oz",
                cocoLopez: "1.5 oz",
                lightRum: "1.5 oz (optional)",
            }}
    );
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});

app.get( "/toDoListItems", ( request, response ) => {
    response.send(
        toDoListService.getToDoList()
    );
});

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
