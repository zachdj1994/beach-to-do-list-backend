import express from "express";
import ToDoListService from './ToDoListService';
import { Sequelize } from 'sequelize';
import ToDoListRepository from './ToDoListRepository';

const index = express()
const port = 8080;

const userName = process.env.USER;
const myTropicoolDatabase = new Sequelize(`postgres://${userName}:root@localhost:5432/to_do_list`);
const myTropicoolRepository = new ToDoListRepository(myTropicoolDatabase);
const toDoListService = new ToDoListService(myTropicoolRepository)

index.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    express.json();

    next();
});

index.get( "/", (request, response ) => {
    response.send(
        {pinaColada: {
                pineappleJuice: "4.5 oz",
                cocoLopez: "1.5 oz",
                lightRum: "1.5 oz (optional)",
            }}
    );
});

index.get( "/toDoListItems", (request, response ) => {
    toDoListService.getToDoList().then((data: ToDoList) => {
        response.send(data);
    });
});

index.post( "/toDoListItems", express.json({type: '*/*'}), (request, response ) => {
    toDoListService.addToDoListItem(request.body).then((data: ToDoListItem) => {
        response.send(data);
    });
});

index.delete( "/toDoListItems", (request, response ) => {
    toDoListService.deleteToDoListItemById(request.query as DeleteItemRequest);
});

index.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
