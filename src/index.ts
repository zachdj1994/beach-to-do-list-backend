import express from "express";
import { getToDoList } from './ToDoListService';
import { Sequelize } from 'sequelize';
import ToDoListRepository from './ToDoListRepository';

const app = express()
const port = 8080;

const userName = process.env.USER;
const myTropicoolDatabase = new Sequelize(`postgres://${userName}:root@localhost:5432/to_do_list`);
const myTropicoolRepository = new ToDoListRepository(myTropicoolDatabase);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    express.json();

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
    getToDoList(myTropicoolRepository).then((data: ToDoList) => {
        response.send(
            data
        );
    });
});

app.post( "/toDoListItems", express.json({type: '*/*'}), ( request, response ) => {
    console.log(request.body);
    response.json(request.body);
});

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
