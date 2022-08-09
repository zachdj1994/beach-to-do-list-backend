import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://zachjones:root@localhost:5432/to_do_list');


export const getToDoListFromRepository = async (): Promise<ToDoList> => {
        const [results] = await sequelize.query('SELECT text FROM list_items;')

        const toDoList: ToDoList = [];
        results.map((result: ToDoListItem) => {
            toDoList.push(result.text)
        });

        return toDoList;
};
