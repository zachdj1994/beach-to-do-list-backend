import express from "express";
import { getToDoList } from './ToDoListService';
const app = express()
const port = 8080;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});

app.get( "/", ( request, response ) => {
    response.send(
        {pinaColada: {
                pineappleJuice: "4.5 oz",
                cocoLopez: "1.5 oz",
                lightRum: "1.5 oz (optional)",
            }}
    );
});

app.get( "/toDoListItems", ( request, response ) => {
    getToDoList().then((data: ToDoList) => {
        response.send(
            data
        );
    })
});

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
